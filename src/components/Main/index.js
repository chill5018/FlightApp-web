import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../views/Home';
import Booking from '../../views/Booking';
import Flight from '../../views/Flights';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /flights or /bookings. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/bookings" component={Booking} />
      <Route path="/flights" component={Flight} />
    </Switch>
  </main>
);

export default Main;
