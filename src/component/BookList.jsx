import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SingleBook from "./SingleBook";

class BookList extends Component {
  render() {
    const { books } = this.props;
    return (
      <Container fluid="xl">
        <h1 className="text-center mb-4">Lista Libri</h1>
        <Row>
          {books.map((book) => (
            <SingleBook key={book.asin} book={book} />
          ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
