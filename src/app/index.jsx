import React from 'react';
import { Input, Button } from 'reactstrap';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

import logo from './react.png';
import './index.scss';

class App extends React.Component {
  state = {}

  onChange = date => this.setState({ date })

  render() {
    const { date } = this.state;
    return (
      <div>
        <div className="app-header">
          <h1>
            Amazing Airlines
          </h1>
          <img className="app-header-image" src={logo} height="30px" width="auto" alt="logo"/>
        </div>

        <hr />

        <div className="app-content">
          <form onSubmit={() => {}}>
            <Input placeholder="departure" />
            <Input placeholder="arrival" />
            <DateRangePicker
              onChange={this.onChange}
              value={date}
            />
            <div>
              <Button className="w-100 mt-5" color="primary">
                Search
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
