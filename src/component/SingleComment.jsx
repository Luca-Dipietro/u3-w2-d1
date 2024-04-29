import React from "react";

const SingleComment = ({ comment }) => {
  return (
    <>
      <p>{comment.comment}</p>
      <p>Rate: {comment.rate}</p>
    </>
  );
};

export default SingleComment;
