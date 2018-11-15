import React from 'react';
import { Input, Button } from 'reactstrap';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

import './index.scss';
import { checked } from 'glamor';

class App extends React.Component {
  state = {}

  onChange = date => this.setState({ date })

  render() {
    const { date } = this.state;
    return (
  <div className="app-main">
   <div className="app-main-wrapper">
    <h4>Book a flight</h4>
     <form onSubmit={() => {}} className="app-main-form app-main-col_1">
        <div className="app-main-col_2">
          <label className="app-main-form-label">From</label>
          <Input className="app-main-form-input" placeholder="København(CPH)" />
        </div>

        <div className="app-main-col_2">
          <label className="app-main-form-label">To</label>
          <Input className="app-main-form-input"  placeholder="New York City(JFK)" />
        </div>

         <div className="app-main-col_2">
          <input type="checkbox" className="app-main-form-checkbox" id="roundtrip"/>
          <label className="app-main-form-label" for="roundtrip">Return flight</label>
        </div>

      <div className="app-main-col_2">
        <div className="app-main-col app-main-col_2">
          <label className="app-main-form-label">Depart</label><br/>
          <input type="date" className="app-main-form-date_picker"/>
      </div>

        <div className="app-main-col app-main-col_2">
          <label className="app-main-form-label">Return</label><br/>
          <input type="date" className="app-main-form-date_picker"/>
        </div>
      </div>

       <div className="app-main-form-button">
        <Button className="w-100 mt-5 app-main-form-button_color">Search</Button>
      </div>
     </form>

      <hr className="app-main-hr" />

    <h4 className="app-main-h4">View booking</h4>
     <form onSubmit={() => {}} className="app-main-form app-main-col_1">
        <div className="app-main-col_2">
          <Input className="app-main-form-input" placeholder="Booking reference" />
        </div>

       <div className="app-main-form-button">
        <Button className="w-100 mt-5 app-main-form-button_color">Search</Button>
      </div>
     </form>



   </div>

  </div>

    );
  }
}

export default App;
