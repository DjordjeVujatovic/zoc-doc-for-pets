export const SET_BOOKING_STATE = 'SET_BOOKING_STATE';
export const SET_BOOKING_STATE_FALSE = 'SET_BOOKING_STATE_FALSE';

export const setBookingState = data => ({
  type: SET_BOOKING_STATE,
  payload: data,
});

export const setBookingStateFalse = data => ({
  type: SET_BOOKING_STATE_FALSE,
  payload: data,
});
