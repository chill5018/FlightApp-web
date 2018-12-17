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


const validateForm = (formData) => {
  const errors = [];

  const {
    departureDate,
    departureCity,
    arrivalCity,
    returnDate,
  } = formData;

  if (departureDate.length > 10) {
    errors.push(`invalid date ${departureDate}`);
  }

  if (returnDate.length > 10) {
    errors.push(`invalid date ${returnDate}`);
  }

  if (!returnDate.includes('-') || !departureDate.includes('-')) {
    errors.push('invalid date format');
  }

  if (departureCity.length > 3) {
    errors.push(`invalid departure city ${departureCity}`);
  }

  if (!departureCity) {
    errors.push('must select a departure city');
  }

  if (arrivalCity.length > 3) {
    errors.push(`invalid departure city ${arrivalCity}`);
  }

  if (!departureCity) {
    errors.push('must select a departure city');
  }

  if (errors.length > 0) {
    return errors;
  }

  return true;
};

/* eslint-disable import/prefer-default-export */
export {
  calculateDuration,
  convertToTime,
  filterDropdownOptions,
  generatePrice,
  validateForm,
};
