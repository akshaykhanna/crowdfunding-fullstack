import { combineReducers } from 'redux';
import donationReducer from './donationReducer';
import projectReducer from './projectReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  donation: donationReducer,
  project: projectReducer,
  auth: authReducer,
});

export default rootReducer;
