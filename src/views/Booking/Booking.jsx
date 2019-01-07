import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Input, Button } from 'reactstrap';
import FlightCard from '../../components/FlightCard/index';

const propTypes = {
  getBooking: PropTypes.func,
};

const defaultProps = {
  getBooking: () => {},
};

class Booking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      booking: undefined,
    };

    this.handleChange = this.handleChange.bind(this);
    this.searchBooking = this.searchBooking.bind(this);
  }

  componentDidMount() {
    const { getBooking } = this.props;
    const id = this.history.pathname().split('/bookings/')[1];

    getBooking(id);
  }

  static getDerivedStateFromProps(props) {
    if (props.booking) {
      this.setState({ booking: props.booking });
    }
  }

  handleChange = (e) => {
    e.preventDefault();

    const change = {};
    change[e.target.name] = e.target.value;

    this.setState(change);
  }

  searchBooking() {
    const { getBooking } = this.props;
    const { bookingReference } = this.state;

    getBooking(bookingReference);
  }

  render() {
    const { booking } = this.state;

    return (
      <div className="app-main">
        <div className="app-main-form-background app-main-form-background-bookings">
          <form onSubmit={() => {}} className="app-main-form app-main-col_1">
            <div className="app-main-col_1">
              <h4 className="app-main-h4">
                View a booking
              </h4>
            </div>

            <div className="app-main-col">
              <Input
                className="app-main-form-input"
                placeholder="Booking reference"
                name="bookingReference"
                onChange={this.handleChange}
              />
            </div>

            <div className="app-main-col">
              <Button
                className="app-main-form-button_color"
                onClick={this.searchBooking}
              >
                Search
              </Button>
            </div>
          </form>
        </div>

        <div className="app-main-wrapper">
        <div className="app-main-col_1 app-main-bookings">
          <h4 className="app-main-h4">
            Booking id: 23345HDGFA34
            {booking.reference}
          </h4>
          <FlightCard flight={booking.flight} />
        </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Booking);

Booking.propTypes = propTypes;
Booking.defaultProps = defaultProps;
