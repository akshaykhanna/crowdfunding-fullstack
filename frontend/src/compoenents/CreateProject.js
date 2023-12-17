// src/components/CreateProject.js
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const CreateProject = () => {
  const [projectData, setProjectData] = useState({
    name: "",
    description: "",
  });

  const handleChange = (e) => {
    setProjectData({
      ...projectData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle the project creation (e.g., API call)
    console.log("Project Data:", projectData);
    // Reset the form after submission
    setProjectData({
      name: "",
      description: "",
    });
  };

  return (
    <div>
      <h2>Create a New Project</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="projectName">
          <Form.Label>Project Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={projectData.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="projectDescription">
          <Form.Label>Project Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            value={projectData.description}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="requestedAmount">
          <Form.Label>Requested Amount</Form.Label>
          <Form.Control
            type="number"
            name="requestedAmount"
            value={projectData.requestedAmount}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="collectedAmount">
          <Form.Label>Collected Amount</Form.Label>
          <Form.Control
            type="number"
            name="collectedAmount"
            value={projectData.collectedAmount}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Create Project
        </Button>
      </Form>
    </div>
  );
};

export default CreateProject;
