import { filterDropdownOptions, calculateDuration, convertToTime } from '../utils/helpers';

describe('Helpers', () => {
  it('filter dropdown options', () => {
    const expectedResult = [{ label: 'New York City (JFK)', value: 'JFK' }];
    const options = [
      { label: 'Copenhagen', value: 'CPH' },
      { label: 'New York City (JFK)', value: 'JFK' },
    ];

    const result = filterDropdownOptions(options, options[0]);

    expect(result).toEqual(expectedResult);
  });

  it('calculates duration properly', () => {
    const expectedResult = '10h 21m';
    const arrivalDateTime = '2018-12-01T16:32:11.012Z';
    const departureDateTime = '2018-12-01T06:11:11.012Z';

    const result = calculateDuration(departureDateTime, arrivalDateTime);

    expect(result).toEqual(expectedResult);
  });

  it('calculates really long durations properly', () => {
    const expectedResult = '34h 21m';
    const arrivalDateTime = '2018-12-02T16:32:11.012Z';
    const departureDateTime = '2018-12-01T06:11:11.012Z';

    const result = calculateDuration(departureDateTime, arrivalDateTime);

    expect(result).toEqual(expectedResult);
  });

  it('if duration is negative throw error', () => {
    const arrivalDateTime = '2018-12-01T16:32:11.012Z';
    const departureDateTime = '2018-12-02T06:11:11.012Z';
    const expectedResult = new Error(`Invalid Departure / Arrival Dates: Departure: ${departureDateTime}, Arrival: ${arrivalDateTime}`);

    expect(() => calculateDuration(departureDateTime, arrivalDateTime))
      .toThrowError(expectedResult);
  });

  it('converts dates to time properly', () => {
    const expectedResult = '16:32';
    const arrivalDateTime = '2018-12-01T16:32:11.012Z';

    const result = convertToTime(arrivalDateTime);

    expect(result).toEqual(expectedResult);
  });
});
