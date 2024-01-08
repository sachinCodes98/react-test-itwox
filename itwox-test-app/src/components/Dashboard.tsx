import React from 'react';
import { usePosts, useComments } from './api';
// Assuming your post object has 'id', 'title', and 'body' properties
interface Post {
    id: number;
    title: string;
    body: string;
  }
  
  // Assuming your comment object has 'postId' property
  interface Comment {
    postId: number;
    // other comment properties...
  }
  
  // ...
  
 const Dashboard = () => {
    const { data: posts } = usePosts();
    const { data: comments } = useComments();
  
    // Assuming you have a state to manage the current page
    const [currentPage, setCurrentPage] = React.useState(1);
    const postsPerPage = 10;
  
    // Calculate pagination
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts?.slice(indexOfFirstPost, indexOfLastPost);
  
    return (
      <>
        <h1>Posts</h1>
        {currentPosts?.map((post: Post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <p>Comments: {comments?.filter((comment: Comment) => comment.postId === post.id).length}</p>
          </div>
        ))}
  
        {/* Pagination */}
        <div>
          <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
            Previous
          </button>
          <span>{currentPage}</span>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPosts && currentPosts.length < postsPerPage}
          >
            Next
          </button>
        </div>
      </>
    );
  };
  

  export default Dashboard;