import React from 'react';
import logo from './react.png';
import './index.scss';


const doIncrement = (prevState) => ({
  counter: prevState.counter + 1,
});

const doDecrement = (prevState) => ({
  counter: prevState.counter - 1,
});

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
    };

    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
  }

  onIncrement() {
    this.setState(doIncrement);
  }

  onDecrement() {
    this.setState(doDecrement);
  }

  render() {
    const { counter } = this.state;
    const { title } = this.props;

    return (
      <div>
        <div className="app-header">
          <h1>{title}</h1>
          <img className="app-header-image" src={logo} height="30px" width="auto" alt="logo"/>
        </div>

        <hr/>

        <div className="app-content">
          <p>{counter}</p>

          <button type="button" onClick={this.onIncrement}>Increment</button>
          <button type="button" onClick={this.onDecrement}>Decrement</button>
        </div>
      </div>
    );
  }
}

export {
  doIncrement,
  doDecrement,
};

export default App;