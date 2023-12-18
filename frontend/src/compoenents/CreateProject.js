// src/components/CreateProject.js
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from 'react-redux';
import { createProject, fetchProjects } from '../redux/actions';
import { useNavigate } from 'react-router-dom';

const CreateProject = ({ createProject }) => {
  const navigate = useNavigate();
  const [projectData, setProjectData] = useState({
    name: '',
    description: '',
    requestedAmount: 0,
    collectedAmount: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData({
      ...projectData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createProject(projectData);
    // Reset the form after submission
    setProjectData({
      name: '',
      description: '',
      requestedAmount: 0,
      collectedAmount: 0,
    });
    fetchProjects();
    navigate('/');
  };

  return (
    <div className="mt-3">
      <h4>Create a New Project</h4>
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
            type="text"
            name="requestedAmount"
            value={projectData.requestedAmount}
            onChange={handleChange}
          />
        </Form.Group>

        {/* <Form.Group controlId="collectedAmount">
          <Form.Label>Collected Amount</Form.Label>
          <Form.Control
            type="text"
            name="collectedAmount"
            value={projectData.collectedAmount}
            onChange={handleChange}
          />
        </Form.Group> */}

        <Button className="mt-3" variant="primary" type="submit">
          Create Project
        </Button>
      </Form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  createProject: (projectData) => dispatch(createProject(projectData)),
  fetchProjects: () => dispatch(fetchProjects()),
});

export default connect(null, mapDispatchToProps)(CreateProject);
