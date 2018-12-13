import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { searchFlights } from '../../reducers/flights';
import { getBooking } from '../../reducers/bookings';
import Home from './Home';

/* eslint-disable arrow-body-style */
const mapStateToProps = (state) => {
  return {
    flights: state.flights.flights,
    loading: state.flights.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators({
      searchFlights,
      getBooking,
    }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
