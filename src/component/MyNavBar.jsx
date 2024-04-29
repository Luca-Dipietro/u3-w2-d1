import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const MyNavBar = (props) => {
  return (
    <>
      <Navbar expand="lg" className="bg-dark" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="/">{props.brandName}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/">About</Nav.Link>
              <Nav.Link href="/">Browser</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavBar;
