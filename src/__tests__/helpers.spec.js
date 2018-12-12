import { filterDropdownOptions } from '../utils/helpers';

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
});
