import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Input, Button } from 'reactstrap';
import './index.scss';

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
    this.searchFlights = this.searchFlights.bind(this);
  }

  onChange = date => this.setState({ date })

  handleChange = (e) => {
    e.preventDefault();

    const change = {};
    change[e.target.name] = e.target.value;

    this.setState(change);
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

    searchFlights(departureCity, arrivalCity, departureDate, ticketQty);
  }

  render() {
    const { isRoundtrip } = this.state;
    return (
      <div className="app-main">
        <div className="app-main-wrapper">
          <h4 className="app-main-h4">
            Book a flight
          </h4>
          <form onSubmit={() => {}} className="app-main-form app-main-col_1">
            <div className="app-main-col_2">
              <label className="app-main-form-label">
                From
              </label>
              <Input
                className="app-main-form-input"
                placeholder="København(CPH)"
                name="departureCity"
                onChange={this.handleChange}
              />
            </div>

            <div className="app-main-col_2">
              <label className="app-main-form-label">
                To
              </label>
              <Input
                className="app-main-form-input"
                placeholder="New York City(JFK)"
                name="arrivalCity"
                onChange={this.handleChange}
              />
            </div>

            <div className="app-main-col_2">

              <div className="app-main-col app-main-col_2">
                <input
                  type="checkbox"
                  className="app-main-form-checkbox"
                  id="roundtrip"
                  name="isRoundtrip"
                  onChange={this.handleChange}
                />
                <label className="app-main-form-label" htmlFor="roundtrip">
                  One way trip
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
