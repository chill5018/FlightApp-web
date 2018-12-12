import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';

import Flights from '../../views/Flights';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Flight Snapshot', () => {
  it('renders correctly', () => {
    const initialState = {
      flights: {
        flights: undefined,
      },
    };

    const component = renderer.create(
    <Provider store={mockStore(initialState)}>
      <BrowserRouter>
        <Flights />
      </BrowserRouter>
    </Provider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
