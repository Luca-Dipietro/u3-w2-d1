import { Alert, Container } from "react-bootstrap";

const Welcome = function () {
  return (
    <Container fluid className="mt-3">
      <Alert variant="light">
        <Alert.Heading>Benvenuto nel nostro negozio!</Alert.Heading>
        <p>Grazie per averci scelto. Speriamo che tu trovi ciò che stai cercando.</p>
      </Alert>
    </Container>
  );
};

export default Welcome;
