import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { ActionCreator } from '../redux/reducer';
import PropTypes from 'prop-types';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

import { DEBOUNCE_TIME } from '../const';
import { useDebounce } from '../utils';

const Search = ({ options, searchString }) => {

  const dispatch = useDispatch();
  const [searchStr, setSearchStr] = useState(searchString);

  const handleChange = evt => {
    setSearchStr(evt.target.value);
  };

  const debouncedString = useDebounce(searchStr.trim().replace(/\s+/g, ' '), DEBOUNCE_TIME);

  useEffect(() => {
    dispatch(ActionCreator.setSearchStr(debouncedString));
  }, [debouncedString]);

  return (
    <>
      <div style={{ width: 300, margin: '0 auto' }}>
        <Autocomplete
          disableClearable
          options={options}
          value={debouncedString}
          getOptionLabel={(option) => option || '' }
          getOptionSelected={(option) => {
            return option.toLowerCase().includes(debouncedString.toLowerCase());
          }}
          onChange={(_, newValue, reason) => {
            if (reason === 'clear') {
              setSearchStr('');
            } else {
              setSearchStr(newValue);
            }
          }}
          renderInput={(params) => <TextField
            {...params}
            value={debouncedString}
            onChange={handleChange}
          />
          }
        />
      </div>
    </>
  );
};

Search.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  searchString: PropTypes.string.isRequired
};

export default Search;
