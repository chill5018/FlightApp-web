import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';


const propTypes = {
  flight: PropTypes.shape({
    departureFlight: PropTypes.shape({
      airline: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired,
      arrivalDateTime: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      departureDateTime: PropTypes.string.isRequired,
      destination: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        code: PropTypes.string.isRequired,
      }).isRequired,
      id: PropTypes.number.isRequired,
      flightNumber: PropTypes.string.isRequired,
      origin: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        code: PropTypes.string.isRequired,
      }).isRequired,
      updatedAt: PropTypes.string.isRequired,
    }).isRequired,
    returnFlight: PropTypes.shape({
      airline: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired,
      arrivalDateTime: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      departureDateTime: PropTypes.string.isRequired,
      destination: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        code: PropTypes.string.isRequired,
      }).isRequired,
      id: PropTypes.number.isRequired,
      flightNumber: PropTypes.string.isRequired,
      origin: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        code: PropTypes.string.isRequired,
      }).isRequired,
      updatedAt: PropTypes.string.isRequired,
    }),
  }),
};

const defaultProps = {
  flight: {
    returnFlight: undefined,
  },
};

const FlightCard = ({ flight }) => (
  <section className="app-main-flightCard">
    <div className="app-main-col app-main-flightCard-icon app-main-flightCard-icon-plane" />
      <h6 className="app-main-col app-main-flightCard-icon-title">
        { flight.departureFlight.airline.name }
      </h6>
    <div className="app-main-col app-main-flightCard-icon app-main-flightCard-icon-ticket" />
      <h6 className="app-main-col app-main-flightCard-icon-title">
        Economy
      </h6>
    <div className="app-main-flightCard-hr" />

    <div className="app-main-flightCard-segment">
    <div className="app-main-col app-main-col_1 app-main-flightCard-legRow">
      <div className="app-main-col">
        <h5 className="app-main-col app-main-flightCard-airportCode">
          { flight.departureFlight.origin.code.toUpperCase() }
        </h5>
        <h5 className="app-main-col app-main-flightCard-time">
          18:30
        </h5>
        <br />
        <h6 className="app-main-col app-main-flightCard-airport">
          { flight.departureFlight.origin.name }
        </h6>
      </div>

      <div className="app-main-col">
        <p className="app-main-flightCard-leg-time">
          8h 30m
        </p>
        <div className="app-main-flightCard-leg" />
        <p className="app-main-flightCard-leg-type">
          Direct
        </p>
      </div>

      <div className="app-main-col">
        <h5 className="app-main-col app-main-flightCard-time">
          21:00
        </h5>
        {' '}
        <h5 className="app-main-col app-main-flightCard-airportCode">
          { flight.departureFlight.destination.code.toUpperCase() }
        </h5>
        <br />
        <h6 className="app-main-col app-main-flightCard-airport">
          { flight.departureFlight.destination.name }
        </h6>
      </div>
    </div>

    { flight.returnFlight && (
      <div className="app-main-col app-main-col_1 app-main-flightCard-legRow">
        <div className="app-main-col">
          <h5 className="app-main-col app-main-flightCard-airportCode">
            { flight.returnFlight.origin.code.toUpperCase() }
          </h5>
          <h5 className="app-main-col app-main-flightCard-time">
            23:00
          </h5>
          <br />
          <h6 className="app-main-col app-main-flightCard-airport">
          { flight.returnFlight.origin.name }
          </h6>
        </div>

        <div className="app-main-col">
          <p className="app-main-flightCard-leg-time">
            7h 10m
          </p>
          <div className="app-main-flightCard-leg" />
          <p className="app-main-flightCard-leg-type">
          Direct
          </p>
        </div>

        <div className="app-main-col">
          <h5 className="app-main-col app-main-flightCard-time">
            12:10
          </h5>
          {' '}
          <h5 className="app-main-col app-main-flightCard-airportCode">
          { flight.returnFlight.destination.code.toUpperCase() }
          </h5>
          <br />
          <h6 className="app-main-col app-main-flightCard-airport">
          { flight.returnFlight.destination.name }
          </h6>
        </div>
      </div>
    )}

    </div>

    <div className="app-main-flightCard-pass">
      <h3 className="app-main-flightCard-pass-price">
        2.236 DKK
      </h3>
      <p className="app-main-flightCard-pass-p">
        Flight
      </p>
      <Button className="w-100 mt-5 app-main-flightCard-pass-btn">
        Book
      </Button>
    </div>

  </section>
);

export default FlightCard;

FlightCard.propTypes = propTypes;
FlightCard.defaultProps = defaultProps;
