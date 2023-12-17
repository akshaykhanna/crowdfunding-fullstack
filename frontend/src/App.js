import "./App.css";
import ProjectList from "./compoenents/ProjectList";
import Layout from "./compoenents/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateProject from "./compoenents/CreateProject";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopNav from "./compoenents/TopNav";

function App() {
  return (
    <div>
      <Layout>
        <Router>
          <TopNav></TopNav>
          <Routes>
            <Route path="/" element={<ProjectList />} />
            <Route path="/create" element={<CreateProject />}/>
          </Routes>
        </Router>
      </Layout>
    </div>
  );
}

export default App;
