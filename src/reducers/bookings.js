import axios from 'axios';
import { BASE_URL } from '../constants';

/* ACTIONS */

/* eslint-disable no-param-reassign */
export const actions = [
  'FETCH_START',
  'FETCHED_BOOKINGS_SUCCESSFULLY',
  'FETCHED_BOOKINGS_FAILED',
  'BOOKED_FLIGTH_SUCCESSFULLY',
  'BOOKED_FLIGTH_FAILED',
].reduce((result, key) => {
  result[key] = key;
  return result;
}, {});

/* REDUCER */
export const bookings = (
  state = {
    loading: false,
    booking: undefined,
  },
  action = {},
) => {
  switch (actions.type) {
    case actions.FETCH_START:
      return { ...state, loading: true };
    case actions.FETCHED_BOOKINGS_SUCCESSFULLY:
    case actions.BOOKED_FLIGTH_SUCCESSFULLY:
      return {
        ...state,
        loading: false,
        booking: action.payload,
      };
    case actions.FETCHED_BOOKINGS_FAILED:
    case actions.BOOKED_FLIGHT_FAILED:
      return {
        ...state,
        loading: false,
        booking: undefined,
      };
    default: return state;
  }
};

/* ACTION CREATORS */
export const getBooking = reference => (dispatch) => {
  dispatch({
    type: actions.FETCH_START,
  });

  axios.get(`${BASE_URL}/api/bookings/${reference}`)
    .then((response) => {
      dispatch({
        type: actions.FETCHED_BOOKINGS_SUCCESSFULLY,
        payload: response.data,
      });
    })
    .catch(() => {
      dispatch({
        type: actions.FETCHED_BOOKINGS_FAILED,
      });
    });
};

export const bookFlight = flightId => (dispatch) => {
  dispatch({
    type: actions.FETCH_START,
  });

  axios.post(`${BASE_URL}/api/bookings`, {
    flightId,
  })
    .then((response) => {
      dispatch({
        type: actions.BOOKED_FLIGHT_SUCCESSFULLY,
        payload: response.data,
      });
    })
    .catch(() => {
      dispatch({
        type: actions.BOOKED_FLIGHT_FAILED,
      });
    });
};
