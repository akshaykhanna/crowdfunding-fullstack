// src/components/ProjectList.js
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import { fetchProjects } from "../redux/actions";
import ProjectItem from "./ProjectItem";

const ProjectList = ({
  showMyProjectsOnly = false,
  projects,
  loading,
  error,
  fetchProjects,
}) => {
  const username = useSelector((state) => state.auth.username);
  useEffect(() => {
    showMyProjectsOnly ? fetchProjects(username) : fetchProjects();
  }, [username, showMyProjectsOnly, fetchProjects]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="mt-3">
      {projects && projects.length > 0 ? (
        <ul className="product-list">
          {projects.map((project) => (
            <ProjectItem key={project.id} project={project} username={username} />
          ))}
        </ul>
      ) : (
        <div
          className="m-2"
          style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "0.25rem"}}
        >
          <span>No projects found !!</span>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  projects: state.project.projects,
  loading: state.project.loading,
  error: state.project.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProjects: (username) => dispatch(fetchProjects(username)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
