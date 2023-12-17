import axios from 'axios';
import API_BASE_URL from '../../config/apiConfig';

export const FETCH_PROJECTS_REQUEST = 'FETCH_PROJECTS_REQUEST';
export const FETCH_PROJECTS_SUCCESS = 'FETCH_PROJECTS_SUCCESS';
export const FETCH_PROJECTS_FAILURE = 'FETCH_PROJECTS_FAILURE';
export const CREATE_PROJECT_REQUEST = 'CREATE_PROJECT_REQUEST';
export const CREATE_PROJECT_SUCCESS = 'CREATE_PROJECT_SUCCESS';
export const CREATE_PROJECT_FAILURE = 'CREATE_PROJECT_FAILURE';

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
    axios.get(`${API_BASE_URL}/api/projects`)
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

export const createProjectRequest = () => ({
  type: CREATE_PROJECT_REQUEST,
});

export const createProjectSuccess = (project) => ({
  type: CREATE_PROJECT_SUCCESS,
  payload: project,
});

export const createProjectFailure = (error) => ({
  type: CREATE_PROJECT_FAILURE,
  payload: error,
});

export const createProject = (projectData) => {
  console.log(projectData);
  return (dispatch) => {
    dispatch(createProjectRequest());
    axios
      .post(`${API_BASE_URL}/api/projects`, projectData) // Adjust the API endpoint
      .then((response) => {
        dispatch(createProjectSuccess(response.data));
      })
      .catch((error) => {
        dispatch(createProjectFailure(error.message));
      });
  };
};

