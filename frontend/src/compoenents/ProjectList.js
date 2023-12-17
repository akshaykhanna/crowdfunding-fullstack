// src/components/ProjectList.js
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from '../redux/actions';
import ProjectItem from './ProjectItem';


const ProjectList = ({ projects, loading, error, fetchProjects }) => {
  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>List of Projects</h2>
      <ul>
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
          // <li key={project.id}>
          //   <strong>{project.name}</strong>
          //   <p>{project.description}</p>
          //   <p>Requested Amount: ${project.requestedAmount}</p>
          //   <p>Collected Amount: ${project.collectedAmount}</p>
          //   {/* Add other project details as needed */}
          // </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  projects: state.projects,
  loading: state.loading,
  error: state.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProjects: () => dispatch(fetchProjects()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
