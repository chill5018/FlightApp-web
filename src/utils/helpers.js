import remove from 'lodash/remove';
import moment from 'moment';

const filterDropdownOptions = (options, prevSelected) => (
  remove(options, el => el !== prevSelected)
);

const calculateDuration = (departureDateTime, arrivalDateTime) => {
  const departureDate = moment(departureDateTime);
  const arrivalDate = moment(arrivalDateTime);

  const duration = moment.duration(arrivalDate.diff(departureDate)).asMinutes();

  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;

  if (hours < 0) {
    throw new Error(`Invalid Departure / Arrival Dates: Departure: ${departureDateTime}, Arrival: ${arrivalDateTime}`);
  }

  return `${hours}h ${minutes}m`;
};

const convertToTime = dateTimeString => moment(dateTimeString).utcOffset(0).format('HH:mm');

const generatePrice = () => Math.floor(Math.random() * (10000 - 2000) + 2000);


/* eslint-disable import/prefer-default-export */
export {
  calculateDuration,
  convertToTime,
  filterDropdownOptions,
  generatePrice,
};
