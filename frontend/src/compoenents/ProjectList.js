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
        {projects && projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  projects: state.project.projects,
  loading: state.project.loading,
  error: state.project.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProjects: () => dispatch(fetchProjects()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
