import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const FlightCard = () => (
  <section className="app-main-flightCard">
    <div className="app-main-col app-main-flightCard-icon app-main-flightCard-icon-plane"></div><h6 className="app-main-col app-main-flightCard-icon-title">Norwegian</h6>
    <div className="app-main-col app-main-flightCard-icon app-main-flightCard-icon-ticket"></div><h6 className="app-main-col app-main-flightCard-icon-title">Economy</h6>
    <div className="app-main-flightCard-hr"/>

    <div className="app-main-flightCard-segment">
    <div className="app-main-col app-main-col_1 app-main-flightCard-legRow">
      <div className="app-main-col">
        <h5 className="app-main-col app-main-flightCard-airportCode">CPH</h5><h5 className="app-main-col app-main-flightCard-time">18:30</h5><br/>
        <h6 className="app-main-col app-main-flightCard-airport">Kastrup</h6>
      </div>

      <div className="app-main-col">
        <p className="app-main-flightCard-leg-time">8h 30m</p>
        <div className="app-main-flightCard-leg"/>
        <p className="app-main-flightCard-leg-type">Direct</p>
      </div>

      <div className="app-main-col">
        <h5 className="app-main-col app-main-flightCard-time">21:00</h5> <h5 className="app-main-col app-main-flightCard-airportCode">JFK</h5><br/>
        <h6 className="app-main-col app-main-flightCard-airport">John F Kennedy</h6>
      </div>
    </div>

    <div className="app-main-col app-main-col_1 app-main-flightCard-legRow">
      <div className="app-main-col">
        <h5 className="app-main-col app-main-flightCard-airportCode">JFK</h5><h5 className="app-main-col app-main-flightCard-time">23:00</h5><br/>
        <h6 className="app-main-col app-main-flightCard-airport">John F Kennedy</h6>
      </div>

      <div className="app-main-col">
        <p className="app-main-flightCard-leg-time">7h 10m</p>
        <div className="app-main-flightCard-leg"/>
        <p className="app-main-flightCard-leg-type">Direct</p>
      </div>

      <div className="app-main-col">
        <h5 className="app-main-col app-main-flightCard-time">12:10</h5> <h5 className="app-main-col app-main-flightCard-airportCode">CPH</h5><br/>
        <h6 className="app-main-col app-main-flightCard-airport">Kastrup</h6>
      </div>
    </div>
  </div>

    <div className="app-main-flightCard-pass">
      <h3 className="app-main-flightCard-pass-price">2.236 DKK</h3>
      <p className="app-main-flightCard-pass-p">Flight</p>
      <Button className="w-100 mt-5 app-main-flightCard-pass-btn">Book</Button>
    </div>

  </section>
);

export default FlightCard;
