import _isEmpty from 'lodash.isempty';

// done for evading of typescript errors
export const isEmpty = <T>(value: T | undefined) : value is undefined => _isEmpty(value);
