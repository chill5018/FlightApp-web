import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Input, Button } from 'reactstrap';
import Select from 'react-select';

import './index.scss';

const options = [
  { label: 'Copenhagen', value: 'CPH' },
  { label: 'New York City (JFK)', value: 'JFK' },
];

const optionStyles = {
  control: styles => ({ ...styles, backgroundColor: 'white' }),
  option: (styles) => {
    const color = '#000';
    return {
      ...styles,
      color,
    };
  },
};

/* eslint-disable jsx-a11y/label-has-for */
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRoundtrip: true,
      ticketQty: 1,
    };

    this.bookFlight = this.bookFlight.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDepartureChange = this.handleDepartureChange.bind(this);
    this.handleArrivalChange = this.handleArrivalChange.bind(this);
    this.searchFlights = this.searchFlights.bind(this);
  }

  handleChange = (event) => {
    /* eslint-disable prefer-destructuring */
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleArrivalChange = (selectedOption) => {
    this.setState({ arrivalCity: selectedOption });
  }

  handleDepartureChange = (selectedOption) => {
    this.setState({ departureCity: selectedOption });
  }

  bookFlight(event) {
    const { bookFlight } = this.props;

    bookFlight(event.target.value);
  }

  searchFlights(event) {
    const { searchFlights, history } = this.props;
    const {
      departureCity,
      arrivalCity,
      departureDate,
      ticketQty,
    } = this.state;

    history.push('/flights');

    searchFlights(departureCity.value, arrivalCity.value, departureDate, ticketQty);
  }

  render() {
    const { isRoundtrip, arrivalCity, departureCity } = this.state;
    return (
      <div className="app-main">
        <div className="app-main-wrapper">
          <h4 className="app-main-h4">
            Book a flight
          </h4>
          <form onSubmit={() => {}} className="app-main-form app-main-col_1">
            <div className="app-main-col_2 dropdown-container">
              <label className="app-main-form-label">
                From
              </label>
              <Select
                className="app-main-form-input"
                name="departureCity"
                onChange={this.handleDepartureChange}
                options={options}
                placeholder="Departure City"
                styles={optionStyles}
                value={departureCity}
              />
            </div>

            <div className="app-main-col_2 dropdown-container">
              <label className="app-main-form-label">
                To
              </label>
              <Select
                className="app-main-form-input"
                name="arrivalCity"
                onChange={this.handleArrivalChange}
                options={options}
                placeholder="Arrival City"
                styles={optionStyles}
                value={arrivalCity}
              />
            </div>

            <div className="app-main-col_2">
              <div className="app-main-col app-main-col_2">
                  <input
                    checked={isRoundtrip}
                    className="app-main-form-checkbox"
                    id="roundtrip"
                    name="isRoundtrip"
                    onChange={this.handleChange}
                    type="checkbox"
                  />
                <label className="app-main-form-label" htmlFor="roundtrip">
                  Round Trip
                </label>
              </div>

              <div className="app-main-col app-main-col_2">
                <input
                  type="number"
                  className="app-main-form-number"
                  placeholder="1"
                  name="ticketQty"
                  onChange={this.handleChange}
                />
                <label className="app-main-form-label" htmlFor="roundtrip">
                  Traveller(s)
                </label>
              </div>

            </div>

            <div className="app-main-col_2">
              <div className="app-main-col app-main-col_2">
                <label className="app-main-form-label">
                  Depart
                </label>
                <br />
                <Input
                  type="date"
                  className="app-main-form-date_picker"
                  name="departureDate"
                  onChange={this.handleChange}
                />
              </div>

              { isRoundtrip && (
                <div className="app-main-col app-main-col_2">
                  <label className="app-main-form-label">
                    Return
                  </label>
                  <br />
                  <Input
                    type="date"
                    className="app-main-form-date_picker"
                    name="returnDate"
                    onChange={this.handleChange}
                  />
                </div>
              )}
            </div>

            <div className="app-main-form-button">
              <Button
                className="w-100 mt-5 app-main-form-button_color"
                onClick={this.searchFlights}
              >
                Search
              </Button>
            </div>
          </form>

            <hr className="app-main-hr" />

          <h4 className="app-main-h4">
            View a booking
          </h4>
          <form onSubmit={() => {}} className="app-main-form app-main-col_1">
              <div className="app-main-col_2">
                <Input className="app-main-form-input" placeholder="Booking reference" />
              </div>

            <div className="app-main-form-button">
              <Button className="w-100 mt-5 app-main-form-button_color">
                Search
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
