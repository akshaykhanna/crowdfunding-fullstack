import axios from 'axios';
import API_BASE_URL from '../../config/apiConfig';

export const SUBMIT_DONATION_SUCCESS = 'SUBMIT_DONATION_SUCCESS';
export const SUBMIT_DONATION_FAIL = 'SUBMIT_DONATION_FAIL';


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
