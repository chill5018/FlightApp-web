import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { searchFlights } from '../../reducers/flights';
import { bookFlight } from '../../reducers/bookings';
import Flights from './Flights';

/* eslint-disable arrow-body-style */
const mapStateToProps = (state) => {
  return {
    flights: state.flights.flights,
    booking: state.bookings.booking,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators({
      searchFlights,
      bookFlight,
    }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Flights);
