import {
  SUBMIT_DONATION_SUCCESS,
  SUBMIT_DONATION_FAIL,
  FETCH_DONATIONS_REQUEST,
  FETCH_DONATIONS_SUCCESS,
  FETCH_DONATIONS_FAILURE,
} from "../actions/donationActions";

const initialState = {
  donationResult: null,
  error: null,
  donations: [],
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
        error: "Failed to submit donation",
      };
    case FETCH_DONATIONS_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };

    case FETCH_DONATIONS_SUCCESS:
      return {
        ...state,
        donations: action.payload,
        loading: false,
        error: "",
      };

    case FETCH_DONATIONS_FAILURE:
      return {
        ...state,
        donations: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default donationReducer;
