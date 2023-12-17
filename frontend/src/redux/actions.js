// src/redux/actions.js
import axios from 'axios';

export const FETCH_PROJECTS_REQUEST = 'FETCH_PROJECTS_REQUEST';
export const FETCH_PROJECTS_SUCCESS = 'FETCH_PROJECTS_SUCCESS';
export const FETCH_PROJECTS_FAILURE = 'FETCH_PROJECTS_FAILURE';

export const fetchProjectsRequest = () => ({
  type: FETCH_PROJECTS_REQUEST,
});

export const fetchProjectsSuccess = (projects) => ({
  type: FETCH_PROJECTS_SUCCESS,
  payload: projects,
});

export const fetchProjectsFailure = (error) => ({
  type: FETCH_PROJECTS_FAILURE,
  payload: error,
});

export const fetchProjects = () => {
  return (dispatch) => {
    dispatch(fetchProjectsRequest());
    axios.get('http://localhost:8080/api/projects') // Replace with your actual API endpoint
      .then((response) => {
        console.log(response.data);
        const projects = response.data;
        dispatch(fetchProjectsSuccess(projects));
      })
      .catch((error) => {
        dispatch(fetchProjectsFailure(error.message));
      });
  };
};

