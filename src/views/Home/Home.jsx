import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Input, Button } from 'reactstrap';
import Select from 'react-select';

import './index.scss';
import { validateForm } from '../../utils/helpers';

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
      departureCity: options[0],
      arrivalCity: options[1],
      departureDate: '2019-02-01',
      returnDate: '2019-02-14',
      isRoundtrip: true,
      ticketQty: 1,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleDepartureChange = this.handleDepartureChange.bind(this);
    this.handleArrivalChange = this.handleArrivalChange.bind(this);
    this.searchFlights = this.searchFlights.bind(this);
  }

  componentWillReceiveProps(newProps) {
    const { history } = this.props;
    if (newProps.flights) {
      history.push('/flights');
    }
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

  async searchFlights() {
    const { searchFlights } = this.props;
    const {
      departureCity,
      arrivalCity,
      departureDate,
      isRoundtrip,
      returnDate,
      ticketQty,
    } = this.state;

    const errors = validateForm(this.state);

    if (errors.length > 0) {
      this.setState({ errors });
    } else {
      /* eslint-disable max-len */
      await searchFlights(departureCity.value, arrivalCity.value, departureDate, isRoundtrip ? returnDate : undefined, ticketQty);
    }
  }

  render() {
    const {
      isRoundtrip,
      arrivalCity,
      departureCity,
      departureDate,
      errors,
      returnDate,
    } = this.state;
    return (
      <div className="app-main">
        <div className="app-main-wrapper">
          <h4 className="app-main-h4">
            Book a flight
          </h4>
          <form onSubmit={() => {}} className="app-main-form app-main-col_1">
            <div className="app-main-col_2 dropdown-container">
              { errors && errors.map(error => (
                <li>
                {error}
                </li>
              ))}
            </div>
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
                  value={departureDate}
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
                    value={returnDate}
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
