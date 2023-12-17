import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import ProjectList from "./compoenents/ProjectList";
import "bootstrap/dist/css/bootstrap.min.css";
import TopNav from "./compoenents/TopNav";

function App() {
  return (
    <div>
      <TopNav />
      <ProjectList />
    </div>
  );
}

export default App;
