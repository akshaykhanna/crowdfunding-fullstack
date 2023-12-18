import axios from 'axios';
import API_BASE_URL from '../../config/apiConfig';

export const SUBMIT_DONATION_SUCCESS = 'SUBMIT_DONATION_SUCCESS';
export const SUBMIT_DONATION_FAIL = 'SUBMIT_DONATION_FAIL';
// Action Types
export const FETCH_DONATIONS_REQUEST = 'FETCH_DONATIONS_REQUEST';
export const FETCH_DONATIONS_SUCCESS = 'FETCH_DONATIONS_SUCCESS';
export const FETCH_DONATIONS_FAILURE = 'FETCH_DONATIONS_FAILURE';

// Action Creators
export const fetchDonationsRequest = () => ({
  type: FETCH_DONATIONS_REQUEST,
});

export const fetchDonationsSuccess = (donations) => ({
  type: FETCH_DONATIONS_SUCCESS,
  payload: donations,
});

export const fetchDonationsFailure = (error) => ({
  type: FETCH_DONATIONS_FAILURE,
  payload: error,
});

// Async Action Creator
export const fetchDonationsByProjectId = (projectId) => {
  return async (dispatch) => {
    dispatch(fetchDonationsRequest());

    try {
      const response = await axios.get(`${API_BASE_URL}/api/donations?projectId=${projectId}`);
      const donations = response.data;

      dispatch(fetchDonationsSuccess(donations));
    } catch (error) {
      dispatch(fetchDonationsFailure(error.message));
    }
  };
};

export const submitDonation = (donationData) => async (dispatch) => {
  try {
    const res = await axios.post(`${API_BASE_URL}/api/donations`, donationData);

    dispatch({
      type: SUBMIT_DONATION_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: SUBMIT_DONATION_FAIL,
    });
  }
};
