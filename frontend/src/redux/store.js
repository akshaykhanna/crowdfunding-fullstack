// src/redux/store.js
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import projectReducer from './reducers';

const store = createStore(projectReducer, applyMiddleware(thunk));

export default store;
