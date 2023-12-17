import { combineReducers } from 'redux';
import donationReducer from './donationReducer';
import projectReducer from './projectReducer';

const rootReducer = combineReducers({
  donation: donationReducer,
  project: projectReducer,
});

export default rootReducer;
