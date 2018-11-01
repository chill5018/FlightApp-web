import React from 'react';
import logo from './react.png';

class App extends React.Component {
  state = {}

  render() {
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
          <p>
            Show Previous Bookings
          </p>
        </div>
      </div>
    );
  }
}

export default App;
