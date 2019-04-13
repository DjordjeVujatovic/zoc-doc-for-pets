
import { combineReducers } from 'redux';
import bookingStateReducer from './bookingStateReducer';

const combinedReducers = combineReducers({
  bookingState: bookingStateReducer,
});

export default combinedReducers;
