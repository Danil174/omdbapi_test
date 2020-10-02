import { useEffect, useState } from 'react';
import { StatusCodes } from './const.js';

const checkStatus = (response) => {
  if (response.status >= StatusCodes.SUCCESS && response.status < StatusCodes.REDIRECTION) {
    return response;
  } else {
    throw new Error(response.status);
  }
};

const checkError = (response) => {
  console.log(response);
  if (response.Response !== "False") {
    return response;
  } else {
    throw new Error(response.Error);
  }
};

export const fetchData = (endpoint) => {
  return fetch(endpoint)
    .then(checkStatus)
    .then((res) => {
      return res.json();
    })
    .then(checkError);
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
