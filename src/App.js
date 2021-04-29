import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router";
import Todo from "./features/Todo";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/" component={Todo}></Route>
    </div>
  );
}

export default App;
