// ProjectList.js
import React from 'react';

const ProjectList = ({ projects = [] }) => {
  return (
    <div>
      <h2>List of Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <strong>{project.name}</strong>
            <p>{project.description}</p>
            <p>Requested Amount: ${project.requestedAmount}</p>
            <p>Collected Amount: ${project.collectedAmount}</p>
            {/* Add other project details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
