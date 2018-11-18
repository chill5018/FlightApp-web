import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import Home from '../../views/Home';
import Booking from '../../views/Booking/index';
import Flight from '../../views/Flights/index';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /flights or /bookings. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
   <HashRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/bookings" exact component={Booking} />
      <Route path="/flights" exact component={Flight} />
    </Switch>
    </HashRouter>
  </main>
);

export default Main;
