import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavBar from "./component/MyNavBar";
import MyFooter from "./component/MyFooter";
import Welcome from "./component/Welcome";
import BookList from "./component/BookList";
import fantasy from "./data/fantasy.json";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <MyNavBar brandName="EpiBooks" />
      <Container>
        <Welcome />
        <BookList books={fantasy} />
      </Container>
      <MyFooter />
    </div>
  );
}

export default App;
