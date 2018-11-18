import { combineReducers } from 'redux';
import { flights } from './flights';
import { bookings } from './bookings';

const rootReducer = combineReducers({
  flights,
  bookings,
});

export default rootReducer;
