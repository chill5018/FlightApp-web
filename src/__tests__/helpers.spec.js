import {
  calculateDuration,
  convertToTime,
  filterDropdownOptions,
  generatePrice,
  validateForm,
  validateRoundTrip,
} from '../utils/helpers';

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

  it('calculates price within valid range', () => {
    const expectedMax = 10000;
    const expectedMin = 2000;

    const result = generatePrice();

    expect(result).toBeLessThan(expectedMax);
    expect(result).toBeGreaterThan(expectedMin);
  });

  it('validates round trip dates', () => {
    const departureDate = '2019-02-02';
    const returnDate = '2019-02-12';

    const result = validateRoundTrip(departureDate, returnDate);

    expect(result).toEqual(true);
  });

  it('catches when return date is before depart date', () => {
    const departureDate = '2019-02-02';
    const returnDate = '2019-02-12';

    const expectedError = new Error('Invalid Return Date, return date must be after departure date');

    expect(() => validateRoundTrip(returnDate, departureDate)).toThrowError(expectedError);
  });


  describe('Search Form Validation', () => {
    it('validates search form properly', () => {
      const formData = {
        departureCity: 'CPH',
        arrivalCity: 'JFK',
        departureDate: '2019-02-01',
        returnDate: '2019-02-14',
        isRoundtrip: true,
        ticketQty: 1,
      };

      const result = validateForm(formData);

      expect(result).toEqual(true);
    });

    it('catches invalid city in search form properly', () => {
      const formData = {
        departureCity: 'Copenhagen',
        arrivalCity: 'JFK',
        departureDate: '2019-02-01',
        returnDate: '2019-02-14',
        isRoundtrip: true,
        ticketQty: 1,
      };

      const result = validateForm(formData);
      const expectedResult = ['invalid departure city Copenhagen'];

      expect(result).toEqual(expectedResult);
    });

    it('catches invalid departure date in search form properly', () => {
      const formData = {
        departureCity: 'CPH',
        arrivalCity: 'JFK',
        departureDate: '20190201',
        returnDate: '2019-02-14',
        isRoundtrip: true,
        ticketQty: 1,
      };

      const result = validateForm(formData);
      const expectedResult = ['invalid date format'];

      expect(result).toEqual(expectedResult);
    });

    it('catches invalid return date in search form properly', () => {
      const formData = {
        departureCity: 'CPH',
        arrivalCity: 'JFK',
        departureDate: '2019-02-01',
        returnDate: '20190214',
        isRoundtrip: true,
        ticketQty: 1,
      };

      const result = validateForm(formData);
      const expectedResult = ['invalid date format'];

      expect(result).toEqual(expectedResult);
    });

    it('catches multiple errors', () => {
      const formData = {
        departureCity: 'Copenhagen',
        arrivalCity: 'JFK',
        departureDate: '20190201',
        returnDate: '2019-02-14',
        isRoundtrip: true,
        ticketQty: 1,
      };

      const result = validateForm(formData);
      const expectedResult = ['invalid date format', 'invalid departure city Copenhagen'];

      expect(result).toEqual(expectedResult);
    });

    it('can book one-way flight', () => {
      const formData = {
        departureCity: 'CPH',
        arrivalCity: 'JFK',
        departureDate: '2019-02-01',
        ticketQty: 1,
      };

      const result = validateForm(formData);
      const expectedResult = true;
      expect(result).toEqual(expectedResult);
    });

    describe('Boundary Value Analysis', () => {
      it('catches return date that is 1 day before departure date', () => {
        const formData = {
          departureCity: 'CPH',
          arrivalCity: 'JFK',
          departureDate: '2019-02-14',
          returnDate: '2019-02-13',
          isRoundtrip: true,
          ticketQty: 1,
        };

        const result = validateForm(formData);
        const expectedResult = ['return Date cannot be before departure date'];

        expect(result).toEqual(expectedResult);
      });

      it('catches return date that same day as departure date', () => {
        const formData = {
          departureCity: 'CPH',
          arrivalCity: 'JFK',
          departureDate: '2019-02-02',
          returnDate: '2019-02-02',
          isRoundtrip: true,
          ticketQty: 1,
        };

        const result = validateForm(formData);
        const expectedResult = ['return Date cannot be before departure date'];

        expect(result).toEqual(expectedResult);
      });

      it('passes when return date that is one day after departure date', () => {
        const formData = {
          departureCity: 'CPH',
          arrivalCity: 'JFK',
          departureDate: '2019-02-02',
          returnDate: '2019-02-03',
          isRoundtrip: true,
          ticketQty: 1,
        };

        const result = validateForm(formData);
        const expectedResult = true;

        expect(result).toEqual(expectedResult);
      });
    });
  });
});
