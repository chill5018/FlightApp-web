import React, { Component } from 'react';
import Select from 'react-select';
import { Input, Button } from 'reactstrap';
import FlightCard from '../../components/FlightCard/index';

import { flightResponse } from '../../data/flight-response';

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
  input: styles => (
    {
      ...styles,
      'min-height': '30px',
    }
  ),
};

/* eslint-disable jsx-a11y/label-has-for */
class Flights extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.bookFlight = this.bookFlight.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    e.preventDefault();

    const change = {};
    change[e.target.name] = e.target.value;

    this.setState(change);
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

  searchFlight() {
    const { searchFlights } = this.props;
    const {
      departureCity,
      arrivalCity,
      departureDate,
      ticketQty,
    } = this.state;

    searchFlights(departureCity, arrivalCity, departureDate, ticketQty);
  }

  render() {
    const { departureCity, arrivalCity } = this.state;
    return (
    <div className="app-main">
      <div className="app-main-form-background">
        <div className="app-main-col_1 app-main-form-flights">
          <form onSubmit={() => {}} className="app-main-form app-main-col_1">
            <div className="app-main-col app-main-col_6 app-main-form-input dropdown-container">
              <Select
                className="app-main-form-input"
                name="departureCity"
                onChange={this.handleDepartureChange}
                options={options}
                placeholder="Departure"
                styles={optionStyles}
                value={departureCity}
              />
            </div>
            <div className="app-main-col app-main-col_6 app-main-form-input dropdown-container">
              <Select
                className="app-main-form-input"
                name="arrivalCity"
                onChange={this.handleArrivalChange}
                options={options}
                placeholder="Arrival"
                styles={optionStyles}
                value={arrivalCity}
              />
            </div>
            <div className="app-main-col app-main-col_6 app-main-form-input">
              <Input
                type="date"
                className="app-main-form-date_picker search-bar-input"
                name="departureDate"
                onChange={this.handleChange}
              />
            </div>
            <div className="app-main-col app-main-col_6 app-main-form-input">

              <Input
                type="date"
                className="app-main-form-date_picker search-bar-input"
                name="returnDate"
                onChange={this.handleChange}
              />
            </div>
            <div className="app-main-col app-main-col_8 app-main-form-input">
              <input
                type="number"
                style={{ marginTop: 0 }}
                className="app-main-form-number search-bar-input"
                placeholder="1"
                name="ticketQty"
                onChange={this.handleChange}
              />
            </div>
            <Button
              className="app-main-col app-main-col_6 app-main-form-btn_flights app-main-form-button_color"
              onClick={this.searchFlight}
            >
              Search
            </Button>
          </form>
        </div>
      </div>
      <div className="app-main-wrapper">
        <div className="app-main-col_1">
         <p className="app-main-p">
          Total results: 20
         </p>
          { flightResponse.map(flight => (
            <FlightCard flight={flight} bookFlight={this.bookFlight} />
          ))}
        </div>
      </div>
    </div>
    );
  }
}

export default Flights;
