import { SET_BOOKING_STATE, SET_BOOKING_STATE_FALSE }from './bookingStateActions';

const initialState = { bookingComplete: false };

export default ( state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKING_STATE:
      return { ...state, bookingComplete: true };
    case SET_BOOKING_STATE_FALSE:
      return { ...state, bookingComplete: false };
    default:
      return state;
  }
}
