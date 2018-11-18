import React, { Component } from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import { Input, Button } from 'reactstrap';
import FlightCard from '../../components/FlightCard/index'

class Flights extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.bookFlight = this.bookFlight.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
    const { date } = this.state;
    return (
    <div className="app-main">
      <div className="app-main-form-background">
        <div className="app-main-col_1 app-main-form-flights">
          <form onSubmit={() => {}} className="app-main-form app-main-col_1">
            <Input
              className="app-main-col app-main-col_6 app-main-form-input"
              placeholder="København(CPH)"
              name="departureCity"
              onChange={this.handleChange}
            />
            <Input
              className="app-main-col app-main-col_6 app-main-form-input"
              placeholder="New York City(JFK)"
              name="arrivalCity"
              onChange={this.handleChange}
            />
            <DateRangePicker
              className="app-main-col app-main-col_6 app-main-form-date_range_picker"
              name="departureDate"
              onChange={this.onChange}
              value={date}
            />
            <Input
              className="app-main-col app-main-col_6 app-main-form-input"
              type="number"
              name="ticketQty"
              onChange={this.handleChange}
              placeholder="1 adult economy"
            />
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
           <FlightCard bookFlight={this.bookFlight} />
           <FlightCard bookFlight={this.bookFlight} />
           <FlightCard bookFlight={this.bookFlight} />
        </div>
      </div>
    </div>
    );
  }
}

export default Flights;
