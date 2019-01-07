import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import FlightCard from '../../components/FlightCard';

const flight = {
  price: 1234.12,
  departureFlight:
  {
    id: 12,
    flightNumber: 'SAS-1006',
    departureDateTime: '2019-02-02T04:00:00.012Z',
    arrivalDateTime: '2019-02-02T16:00:00.012Z',
    createdAt: '2018-12-12T21:17:59.617Z',
    updatedAt: '2018-12-12T21:17:59.617Z',
    airline: {
      id: 3,
      name: 'SAS',
    },
    destination: {
      id: 5,
      name: 'New York City John F Kennedy',
      code: 'JFK',
    },
    origin: {
      id: 1,
      name: 'Copenhagen Airport',
      code: 'CPH',
    },
  },
  returnFlight: {
    id: 30,
    flightNumber: 'SAS-1024',
    departureDateTime: '2019-02-14T04:00:00.012Z',
    arrivalDateTime: '2019-02-14T16:00:00.012Z',
    createdAt: '2018-12-12T21:21:02.879Z',
    updatedAt: '2018-12-12T21:21:02.879Z',
    airline: {
      id: 3,
      name: 'SAS',
    },
    destination: {
      id: 1,
      name: 'Copenhagen Airport',
      code: 'CPH',
    },
    origin: {
      id: 5,
      name: 'New York City John F Kennedy',
      code: 'JFK',
    },
  },
};

describe('Flight Card Snapshot', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <FlightCard key={flight.id} flight={flight} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Flight Card', () => {
  const component = shallow(<FlightCard flight={flight} />);

  describe('Departure Flight', () => {
    it('Renders Correct Departure Airport Code', () => {
      const expectedValue = 'CPH';
      expect(component.find('.app-main-flightCard-airportCode').at(0).text()).toEqual(expectedValue);
    });

    it('Renders Correct Arrival Airport Code', () => {
      const expectedValue = 'JFK';
      expect(component.find('.app-main-flightCard-airportCode').at(1).text()).toEqual(expectedValue);
    });

    it('Renders Correct Departure Time', () => {
      const expectedValue = '04:00';
      expect(component.find('.app-main-flightCard-time').at(0).text()).toEqual(expectedValue);
    });

    it('Renders Correct Duration', () => {
      const expectedValue = '12h 0m';
      expect(component.find('.app-main-flightCard-leg-time').at(0).text()).toEqual(expectedValue);
    });
  });

  describe('Return Flight', () => {
    it('Renders Correct Departure Airport Code', () => {
      const expectedValue = 'JFK';
      expect(component.find('.app-main-flightCard-airportCode').at(2).text()).toEqual(expectedValue);
    });

    it('Renders Correct Arrival Airport Code', () => {
      const expectedValue = 'CPH';
      expect(component.find('.app-main-flightCard-airportCode').at(3).text()).toEqual(expectedValue);
    });

    it('Renders Correct Departure Time', () => {
      const expectedValue = '16:00';
      expect(component.find('.app-main-flightCard-time').at(1).text()).toEqual(expectedValue);
    });

    it('Renders Correct Duration', () => {
      const expectedValue = '12h 0m';
      expect(component.find('.app-main-flightCard-leg-time').at(1).text()).toEqual(expectedValue);
    });
  });

  it('Renders Correct Price', () => {
    const expectedValue = '1234.12 DKK';
    expect(component.find('.app-main-flightCard-pass-price').text()).toEqual(expectedValue);
  });

  it('Generates Price', () => {
    const newFlight = flight;
    delete newFlight.price;

    const priceComponent = shallow(<FlightCard flight={newFlight} />);
    const result = priceComponent.find('.app-main-flightCard-pass-price').text();
    const price = +result.split(' ')[0];

    expect(price).toBeGreaterThan(0);
  });
});
