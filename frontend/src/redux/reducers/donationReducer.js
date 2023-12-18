import { SUBMIT_DONATION_SUCCESS, SUBMIT_DONATION_FAIL } from '../actions/donationActions';

const initialState = {
  donationResult: null,
  error: null,
};

const donationReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SUBMIT_DONATION_SUCCESS:
      return {
        ...state,
        donationResult: payload,
        error: null,
      };
    case SUBMIT_DONATION_FAIL:
      return {
        ...state,
        donationResult: null,
        error: 'Failed to submit donation',
      };
    default:
      return state;
  }
};

export default donationReducer;
