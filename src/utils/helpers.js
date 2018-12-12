import remove from 'lodash/remove';

const filterDropdownOptions = (options, prevSelected) => (
  remove(options, el => el !== prevSelected)
);

/* eslint-disable import/prefer-default-export */
export {
  filterDropdownOptions,
};
