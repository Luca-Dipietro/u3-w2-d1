import { Component } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  handleClick = () => {
    this.setState((prevState) => ({
      selected: !prevState.selected,
    }));
  };

  render() {
    const { book } = this.props;
    return (
      <Col sm={6} md={3} lg={3} xl={3} className="mb-5">
        <Col>
          <Card className={this.state.selected ? "selected-card" : ""} onClick={this.handleClick}>
            <Card.Img variant="top" src={book.img} className="card-img" />
            <Card.Body className="card-body">
              <Card.Title className="card-title">{book.title}</Card.Title>
              <Card.Text className="card-category">Category: {book.category}</Card.Text>
              <Card.Text className="card-price">{book.price}$</Card.Text>
              <Button variant="primary" className="card-button">
                Buy It
              </Button>
            </Card.Body>
          </Card>
        </Col>
        {this.state.selected && <CommentArea bookId={book.asin} />}
      </Col>
    );
  }
}

export default SingleBook;