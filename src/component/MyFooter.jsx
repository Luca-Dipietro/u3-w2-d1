import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MyFooter = function () {
  return (
    <footer className="mt-auto py-3 bg-secondary">
      <Container fluid="sm">
        <Row className="d-flex align-items-center justify-content-between">
          <Col>
            <p className="mb-0 text-light">© 2024 Libreria Online</p>
          </Col>
          <Col>
            <nav>
              <ul className="list-unstyled d-flex justify-content-end mb-0">
                <li className="mx-2 text-light">
                  <a className="footer-link" href="/">
                    Chi Siamo
                  </a>
                </li>
                <li className="mx-2 text-light">
                  <a className="footer-link" href="/">
                    Contatti
                  </a>
                </li>
                <li className="mx-2 text-light">
                  <a className="footer-link" href="/">
                    Termini di Servizio
                  </a>
                </li>
              </ul>
            </nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MyFooter;
