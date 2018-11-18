import axios from 'axios';
import { BASE_URL } from '../constants';

/* ACTIONS */

/* eslint-disable no-param-reassign */
export const actions = [
  'FETCH_START',
  'FETCHED_FLIGHTS_SUCCESSFULLY',
  'FETCHED_FLIGHTS_FAILED',
].reduce((result, key) => {
  result[key] = key;
  return result;
}, {});

/* REDUCER */
export const flights = (
  state = {
    loading: false,
    flights: undefined,
  },
  action = {},
) => {
  switch (actions.type) {
    case actions.FETCH_START:
      return { ...state, loading: true };
    case actions.FETCHED_FLIGHTS_SUCCESSFULLY:
      return {
        ...state,
        loading: false,
        flights: action.payload,
      };
    case actions.FETCHED_FLIGHTS_FAILED:
      return {
        ...state,
        loading: false,
        flights: undefined,
      };
    default: return state;
  }
};

/* ACTION CREATORS */
export const getFlights = () => (dispatch) => {
  dispatch({
    type: actions.FETCH_START,
  });

  axios.get(`${BASE_URL}/api/flights`)
    .then((response) => {
      dispatch({
        type: actions.FETCHED_FLIGHTS_SUCCESSFULLY,
        payload: response.data,
      });
    })
    .catch(() => {
      dispatch({
        type: actions.FETCHED_FLIGHTS_FAILED,
      });
    });
};

export const searchFlights = (departCity, arriveCity, departDate, returnDate) => (dispatch) => {
  dispatch({
    type: actions.FETCH_START,
  });

  axios.post(`${BASE_URL}/api/flights`, {
    departCity,
    arriveCity,
    departDate,
    returnDate,
  })
    .then((response) => {
      dispatch({
        type: actions.FETCHED_FLIGHTS_SUCCESSFULLY,
        payload: response.data,
      });
    })
    .catch(() => {
      dispatch({
        type: actions.FETCHED_FLIGHTS_FAILED,
      });
    });
};
