import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getBooking } from '../../reducers/bookings';
import Booking from './Booking';

/* eslint-disable arrow-body-style */
const mapStateToProps = (state) => {
  return {
    booking: state.bookings.booking,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators({
      getBooking,
    }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Booking);
