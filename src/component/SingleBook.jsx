import { Component } from "react";
import Card from "react-bootstrap/Card";
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
    return (
      <>
        <Card className={this.state.selected ? "selected-card" : ""}>
          <Card.Img variant="top" src={this.props.book.img} className="card-img" onClick={this.handleClick} />
          <Card.Body className="card-body">
            <Card.Title className="card-title">{this.props.book.title}</Card.Title>
            <Card.Text className="card-category">Category: {this.props.book.category}</Card.Text>
            <Card.Text className="card-price">{this.props.book.price}$</Card.Text>
            <Button variant="primary" className="card-button">
              Buy It
            </Button>
          </Card.Body>
        </Card>
        {this.state.selected && <CommentArea asin={this.props.book.asin} />}
      </>
    );
  }
}

export default SingleBook;
