import React, { Component } from "react";
import CommentsList from "./CommentsList";
import { Col } from "react-bootstrap";
// import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  componentDidMount() {
    this.fetchComments();
  }

  fetchComments = () => {
    const { bookId } = this.props;
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${bookId}`, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE4ZjQwNTdmMzA0NjAwMWFlNTlmOTAiLCJpYXQiOjE3MTQzOTQ0NzQsImV4cCI6MTcxNTYwNDA3NH0.5tdYXsd0yCaS_3hdUhPAK_zcNk_XQelQHVfW8Tj0Ezs",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ comments: data });
      })
      .catch((error) => console.error("Error fetching comments:", error));
  };

  render() {
    return (
      <Col sm={6} md={3} lg={3} xl={3}>
        <CommentsList comments={this.state.comments} />
        {/* <AddComment /> */}
      </Col>
    );
  }
}

export default CommentArea;
