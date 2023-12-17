import "./App.css";
import ProjectList from "./compoenents/ProjectList";
import Layout from "./compoenents/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateProject from "./compoenents/CreateProject";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function App() {
  return (
    <div>
      <Layout>
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Home">
            <ProjectList />
          </Tab>
          <Tab eventKey="Create" title="Create">
            <CreateProject />
          </Tab>
          <Tab eventKey="contact" title="Contact" disabled>
            Tab content for Contact
          </Tab>
        </Tabs>
      </Layout>
    </div>
  );
}

export default App;
