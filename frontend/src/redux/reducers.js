// src/redux/reducers.js
import {
  FETCH_PROJECTS_REQUEST,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAILURE,
  CREATE_PROJECT_REQUEST,
  CREATE_PROJECT_SUCCESS,
  CREATE_PROJECT_FAILURE,
} from "./actions";

const initialState = {
  projects: [],
  loading: false,
  error: "",
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROJECTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PROJECTS_SUCCESS:
      return {
        ...state,
        loading: false,
        projects: action.payload,
        error: "",
      };
    case FETCH_PROJECTS_FAILURE:
      return {
        ...state,
        loading: false,
        projects: [],
        error: action.payload,
      };
    case CREATE_PROJECT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        projects: [...state.projects, action.payload],
        error: "",
      };
    case CREATE_PROJECT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default projectReducer;
