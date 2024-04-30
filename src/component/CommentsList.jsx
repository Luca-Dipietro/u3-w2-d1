import React from "react";
import SingleComment from "./SingleComment";
import { ListGroup } from "react-bootstrap";

const CommentsList = ({ comments }) => {
  return (
    <ListGroup>
      <h3 className="text-center">Recensioni</h3>
      {comments.map((comment) => (
        <SingleComment key={comment._id} comment={comment} />
      ))}
    </ListGroup>
  );
};

export default CommentsList;
