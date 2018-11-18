import React from 'react';
import { Input, Button } from 'reactstrap';
import FlightCard from '../../components/FlightCard/index'

class App extends React.Component {
  state = {}

  render() {
    return (
      <div className="app-main">
        <div className="app-main-form-background app-main-form-background-bookings">
          <form onSubmit={() => {}} className="app-main-form app-main-col_1">
            <div className="app-main-col_1">
              <h4 className="app-main-h4">
                View a booking
              </h4>
            </div>

            <div className="app-main-col">
              <Input
                className="app-main-form-input"
                placeholder="Booking reference"
              />
            </div>

            <div className="app-main-col">
              <Button className="app-main-form-button_color">
                Search
              </Button>
            </div>
          </form>
        </div>

        <div className="app-main-wrapper">
        <div className="app-main-col_1 app-main-bookings">
          <h4 className="app-main-h4">
            Booking id: 23345HDGFA34
          </h4>
          <FlightCard />
        </div>
        </div>
      </div>
    );
  }
}

export default App;
