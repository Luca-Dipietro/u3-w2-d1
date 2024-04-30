import { Alert } from "react-bootstrap";

const Welcome = function () {
  return (
    <Alert variant="light" className="mt-3">
      <Alert.Heading>Benvenuto nel nostro negozio!</Alert.Heading>
      <p>Grazie per averci scelto. Speriamo che tu trovi ciò che stai cercando.</p>
    </Alert>
  );
};

export default Welcome;
