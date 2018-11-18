import axios from 'axios';
import { BASE_URL } from '../constants';

/* ACTIONS */

/* eslint-disable no-param-reassign */
export const actions = [
  'FETCH_START',
  'FETCHED_BOOKINGS_SUCCESSFULLY',
  'FETCHED_BOOKINGS_FAILED',
].reduce((result, key) => {
  result[key] = key;
  return result;
}, {});

/* REDUCER */
export const bookings = (
  state = {
    loading: false,
    bookings: undefined,
  },
  action = {},
) => {
  switch (actions.type) {
    case actions.FETCH_START:
      return { ...state, loading: true };
    case actions.FETCHED_BOOKINGS_SUCCESSFULLY:
      return {
        ...state,
        loading: false,
        bookings: action.payload,
      };
    case actions.FETCHED_BOOKINGS_FAILED:
      return {
        ...state,
        loading: false,
        bookings: undefined,
      };
    default: return state;
  }
};

/* ACTION CREATORS */
export const getBookings = () => (dispatch) => {
  dispatch({
    type: actions.FETCH_START,
  });

  axios.get(`${BASE_URL}/api/bookings`)
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

