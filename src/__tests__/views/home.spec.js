import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';

import Home from '../../views/Home';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Home Snapshot', () => {
  it('renders correctly', () => {
    const initialState = {
      flights: {
        flights: undefined,
      },
    };

    const component = renderer.create(
    <Provider store={mockStore(initialState)}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </Provider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
