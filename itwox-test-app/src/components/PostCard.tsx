import React from "react";
import Card from "react-bootstrap/Card";

interface PostCardProps{
    post: {
        id:number;
        userId:number;
        title:string;
        body:string
    },
    commentsLength:number
  }

const PostCard: React.FC<PostCardProps> = ({post, commentsLength}) => {
    
  return (
    <>
      <Card style={{ width: "18rem", height:'auto' }}>
        <Card.Body>
          <Card.Title>{post.id}</Card.Title>
          <Card.Title>{post.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {post.body}
          </Card.Subtitle>
          <Card.Text>
            {`Comments : ${commentsLength}`}
          </Card.Text>
          {/* <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link> */}
        </Card.Body>
      </Card>
    </>
  );
};

export default PostCard;
