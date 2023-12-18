import axios from 'axios';
import API_BASE_URL from '../../config/apiConfig';

export const FETCH_PROJECTS_REQUEST = 'FETCH_PROJECTS_REQUEST';
export const FETCH_PROJECTS_SUCCESS = 'FETCH_PROJECTS_SUCCESS';
export const FETCH_PROJECTS_FAILURE = 'FETCH_PROJECTS_FAILURE';
export const CREATE_PROJECT_REQUEST = 'CREATE_PROJECT_REQUEST';
export const CREATE_PROJECT_SUCCESS = 'CREATE_PROJECT_SUCCESS';
export const CREATE_PROJECT_FAILURE = 'CREATE_PROJECT_FAILURE';
// Action Types
export const FETCH_PROJECT_REQUEST = 'FETCH_PROJECT_REQUEST';
export const FETCH_PROJECT_SUCCESS = 'FETCH_PROJECT_SUCCESS';
export const FETCH_PROJECT_FAILURE = 'FETCH_PROJECT_FAILURE';

// Action Creators
export const fetchProjectRequest = () => ({
  type: FETCH_PROJECT_REQUEST,
});

export const fetchProjectSuccess = (project) => ({
  type: FETCH_PROJECT_SUCCESS,
  payload: project,
});

export const fetchProjectFailure = (error) => ({
  type: FETCH_PROJECT_FAILURE,
  payload: error,
});

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

export const fetchProjects = (username) => {
  const queryParam = username ? `?username=${username}` : '';
  return (dispatch) => {
    dispatch(fetchProjectsRequest());
    axios.get(`${API_BASE_URL}/api/projects${queryParam}`)
      .then((response) => {
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
  return (dispatch, getState) => {
    const state = getState();
    const username = state.auth.username;
    projectData.createdBy = username;
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

// Async Action Creator
export const fetchProjectById = (projectId) => {
  return async (dispatch) => {
    dispatch(fetchProjectRequest());

    try {
      const response = await axios.get(`${API_BASE_URL}/api/projects/${projectId}`);
      const project = response.data;

      dispatch(fetchProjectSuccess(project));
    } catch (error) {
      dispatch(fetchProjectFailure(error.message));
    }
  };
};