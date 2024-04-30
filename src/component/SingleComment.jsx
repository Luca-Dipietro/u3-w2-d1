import { Button, ListGroup } from "react-bootstrap";

const SingleComment = ({ comment }) => {
  const deleteComment = (asin) => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + asin, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE4ZjQwNTdmMzA0NjAwMWFlNTlmOTAiLCJpYXQiOjE3MTQzOTQ0NzQsImV4cCI6MTcxNTYwNDA3NH0.5tdYXsd0yCaS_3hdUhPAK_zcNk_XQelQHVfW8Tj0Ezs",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("La recensione è stata eliminata!");
        } else {
          throw new Error("La recensione non è stata eliminata!");
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <ListGroup.Item>
      <div className="d-flex justify-content-between">
        <div className="d-flex flex-column">
          <p>{comment.comment}</p>
          <p>Rate: {comment.rate}</p>
        </div>
        <Button variant="danger" onClick={() => deleteComment(comment._id)}>
          Elimina
        </Button>
      </div>
    </ListGroup.Item>
  );
};

export default SingleComment;
