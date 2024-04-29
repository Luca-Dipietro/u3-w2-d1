import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavBar from "./component/MyNavBar";
import MyFooter from "./component/MyFooter";
import Welcome from "./component/Welcome";
import BookList from "./component/BookList";
import history from "./data/history.json";

function App() {
  return (
    <div className="App">
      <MyNavBar brandName="EpiBooks" />
      <Welcome />
      <BookList books={history} />
      <MyFooter />
    </div>
  );
}

export default App;
