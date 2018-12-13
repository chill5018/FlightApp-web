import axios from 'axios';
import { BASE_URL } from '../constants';

/* ACTIONS */

/* eslint-disable no-param-reassign */
export const actions = [
  'FETCH_START',
  'FETCHED_FLIGHTS_SUCCESSFULLY',
  'FETCHED_FLIGHTS_FAILED',
  'STORED_FLIGHT_SEARCH_SUCCESSFULLY',
].reduce((result, key) => {
  result[key] = key;
  return result;
}, {});

/* REDUCER */
export const flights = (
  state = {
    loading: false,
    flights: undefined,
    searchParams: undefined,
  },
  action = {},
) => {
  switch (action.type) {
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
    case actions.STORED_FLIGHT_SEARCH_SUCCESSFULLY:
      return {
        ...state,
        searchParams: action.payload,
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

export const storeFlightSearchParams = (
  departureCity, arrivalCity, departureDate, returnDate,
) => (dispatch) => {
  dispatch({
    type: actions.FETCH_START,
  });

  const params = {
    departureCity,
    arrivalCity,
    departureDate,
    returnDate,
  };

  dispatch({
    type: actions.STORED_FLIGHT_SEARCH_SUCCESSFULLY,
    payload: params,
  });
};

export const searchFlights = (
  departureCity, arrivalCity, departureDate, returnDate,
) => (dispatch) => {
  dispatch({
    type: actions.FETCH_START,
  });

  const params = {
    departureCity,
    arrivalCity,
    departureDate,
    returnDate,
  };

  dispatch(storeFlightSearchParams(departureCity, arrivalCity, departureDate, returnDate));

  if (!returnDate) {
    delete params.returnDate;
  }

  axios.get(`${BASE_URL}/api/flights`, {
    params,
  }).then((response) => {
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
