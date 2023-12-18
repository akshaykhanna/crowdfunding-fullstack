import axios from 'axios'
import API_BASE_URL from '../../config/apiConfig';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// Example action creators
export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (username) => ({
  type: LOGIN_SUCCESS,
  payload: { username },
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: { error },
});

;

export const login = (username, password) => {
  return (dispatch) => {
    dispatch(loginRequest());

    // Make API call to Spring login endpoint
    axios.post(`${API_BASE_URL}/api/users/login`, { username, password })
      .then((response) => {
        if (response.data) {
          dispatch(loginSuccess(username));
        } else {
          dispatch(loginFailure('Invalid username or password'));
        }
      })
      .catch((error) => {
        console.error('Login API error:', error);
        dispatch(loginFailure('Login failed. Please try again.'));
      });
  };
};
