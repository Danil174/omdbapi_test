import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { ActionCreator } from '../redux/reducer';

import TextInput from './TextInput';

import { DEBOUNCE_TIME } from '../const';
import { useDebounce } from '../utils';

const Search = () => {
  const dispatch = useDispatch();
  const [searchStr, setSearchStr] = useState('');

  const debouncedString = useDebounce(searchStr.trim().replace(/\s+/g, ' '), DEBOUNCE_TIME);

  const handleChange = evt => {
    setSearchStr(evt.target.value);
  };

  useEffect(() => {
    if (debouncedString) {
      dispatch(ActionCreator.setSeatchStr(debouncedString));
    } else {
      console.log('do nothing');
    }
  }, [debouncedString]);

  return (
    <>
      <TextInput str={searchStr} onChange={handleChange} />
    </>
  );
};

export default Search;
