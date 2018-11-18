import React from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import { Input, Button } from 'reactstrap';
import FlightCard from '../../components/FlightCard/index'

class App extends React.Component {
  state = {}

  onChange = date => this.setState({ date })

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
            />
            <Input
              className="app-main-col app-main-col_6 app-main-form-input"
              placeholder="New York City(JFK)"
            />
            <DateRangePicker
              className="app-main-col app-main-col_6 app-main-form-date_range_picker"
              onChange={this.onChange}
              value={date}
            />
            <Input
              className="app-main-col app-main-col_6 app-main-form-input"
              type="number"
              placeholder="1 adult economy"
            />
            <Button className="app-main-col app-main-col_6 app-main-form-btn_flights app-main-form-button_color">
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
           <FlightCard />
           <FlightCard />
           <FlightCard />
        </div>
      </div>
    </div>
    );
  }
}

export default App;
