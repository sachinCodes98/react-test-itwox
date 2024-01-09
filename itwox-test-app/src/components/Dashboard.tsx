import React, { useState, useEffect } from "react";
import { usePosts, useComments } from "./api";
import PostCard from "./PostCard";
import { Button } from "react-bootstrap";
// Assuming our post object has 'userId', id', 'title', and 'body' properties
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Assuming our comment object has 'postId' property
interface Comment {
  postId: number;
}


const Dashboard = () => {
  const { data: posts } = usePosts();
  const { data: comments } = useComments();
  const [lastPage, setLastPage] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentPosts, setCurrentPosts] = useState<[]>([]);

  useEffect(() => {
    const postsPerPage = 10;

    if (!posts || !comments) {
      return;
    }

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPostsFetched = posts.slice(indexOfFirstPost, indexOfLastPost);
    setCurrentPosts(currentPostsFetched);
    setLastPage(Math.ceil(posts.length / postsPerPage));
  }, [currentPage, posts, comments]);

  return (
    <>
      <h1>Posts</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "10px",
          margin: "auto",
        }}
      >
        {currentPosts?.map((post: Post) => {
          let commentsLength: number = comments
            ? comments.filter((comment: Comment) => comment.postId === post.id)
                .length
            : 0;
          return (
            <div key={post.id}>
              <PostCard post={post} commentsLength={commentsLength} />
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      <div>
        <Button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          variant="info"
        >
          {`< Previous`}{" "}
        </Button>
        <span style={{ margin: "0 20px" }}>{currentPage}</span>
        <Button
          onClick={() => currentPage && setCurrentPage(currentPage + 1)}
          disabled={currentPage == lastPage}
          variant="info"
        >{`Next >`}</Button>
      </div>
    </>
  );
};

export default Dashboard;
