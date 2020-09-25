import { useEffect, useState } from 'react';
import { StatusCodes } from './const.js';

const checkStatus = (response) => {
  if (response.status >= StatusCodes.SUCCESS && response.status < StatusCodes.REDIRECTION) {
    return response;
  } else {
    throw new Error(response.status);
  }
};

export const fetchData = (endpoint) => {
  return fetch(endpoint)
    .then(checkStatus)
    .then((res) => res.json());
};

export const useDebounce = (value, debounceTime) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, debounceTime);

      return () => {
        clearTimeout(handler);
      };
    }, [value]);

  return debouncedValue;
};
