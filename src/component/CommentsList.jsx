import React from "react";
import SingleComment from "./SingleComment";

const CommentsList = ({ comments }) => {
  return (
    <>
      <h2>Comments</h2>
      {comments.map((comment) => (
        <SingleComment key={comment._id} comment={comment} />
      ))}
    </>
  );
};

export default CommentsList;
