import React, { Component } from 'react';
import FlightCard from '../../components/FlightCard/index';


/* eslint-disable jsx-a11y/label-has-for */
class Flights extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.bookFlight = this.bookFlight.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { flights, history } = this.props;

    if (!flights) {
      history.push('/');
    }
  }

  static getDerivedStateFromProps(props) {
    if (!props.flights) {
      props.history.push('/');
      return {};
    }

    return {
      flights: props.flights,
    };
  }

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

  render() {
    const { flights } = this.state;
    return (
    <div className="app-main">
      <div className="app-main-wrapper">
        <div className="app-main-col_1">
         <p className="app-main-p">
          Total results:
          {' '}
          { flights.length }
         </p>
          { flights ? flights.map(flight => (
            <FlightCard key={flight.id} flight={flight} bookFlight={this.bookFlight} />
          )) : (
            <div>
              Loading...
            </div>
          )}
        </div>
      </div>
    </div>
    );
  }
}

export default Flights;
