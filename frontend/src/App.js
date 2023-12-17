import { Routes, Route } from "react-router-dom";

import "./App.css";
import ProjectList from "./compoenents/ProjectList";
import "bootstrap/dist/css/bootstrap.min.css";
import TopNav from "./compoenents/TopNav";

function App() {
  return (
    <div>
      <TopNav />
      <Routes>
        <Route path="/" element={<ProjectList />}>
          <Route index element={<ProjectList />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
