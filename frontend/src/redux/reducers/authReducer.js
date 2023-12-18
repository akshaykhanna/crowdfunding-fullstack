// redux/reducers/authReducer.js

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "../actions/authActions";

const initialState = {
  isAuthenticated: localStorage.getItem('username') ? true : false,
  username: localStorage.getItem('username'),
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case LOGIN_SUCCESS:
      localStorage.setItem('username', action.payload.username);
      return {
        ...state,
        isAuthenticated: true,
        username: action.payload.username,
        loading: false,
        error: null,
      };

    case LOGIN_FAILURE:
      localStorage.removeItem('username');
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        error: action.payload.error,
      };

    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        username: null,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};

export default authReducer;
