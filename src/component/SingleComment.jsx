import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

const SingleComment = ({ comment }) => {
  return (
    <ListGroup className="mb-2 mt-3">
      <ListGroupItem>Comment: {comment.comment}</ListGroupItem>
      <ListGroupItem>Rate: {comment.rate}</ListGroupItem>
    </ListGroup>
  );
};

export default SingleComment;
