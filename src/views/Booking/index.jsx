import React from 'react';

class App extends React.Component {
  state = {}

  render() {
    return (
      <div>
        <div className="app-header">
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
