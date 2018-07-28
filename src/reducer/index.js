import { combineReducers } from 'redux';
import { auth } from '../redux/login.redux.js';
import { counter } from '../redux/counter.redux.js';

export default combineReducers({ counter, auth});