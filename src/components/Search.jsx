import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { ActionCreator } from '../redux/reducer';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

import { DEBOUNCE_TIME } from '../const';
import { useDebounce } from '../utils';

const Search = props => {
  const { collection, searchString, withRedirection, history } = props;

  const dispatch = useDispatch();
  const [searchStr, setSearchStr] = useState(searchString);

  const handleChange = evt => {
    setSearchStr(evt.target.value);
  };

  const debouncedString = useDebounce(searchStr.trim().replace(/\s+/g, ' '), DEBOUNCE_TIME);

  useEffect(() => {
    dispatch(ActionCreator.setSearchStr(debouncedString));
  }, [debouncedString]);

  const titlesCollection = collection.length === 0 ? [] : collection.map(it => it.Title);

  const goToHomePage = id => {
    history.push({
      pathname: `/film/${id}`
    });
  };

  return (
    <>
      <div style={{ width: 300, margin: '0 auto' }}>
        <Autocomplete
          disableClearable
          options={titlesCollection}
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
              if (withRedirection) {
                const id = collection.find((it) => it.Title === newValue).imdbID;
                goToHomePage(id);
              }
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
  history: PropTypes.shape({
    push: PropTypes.func
  }),
  collection: PropTypes.arrayOf(PropTypes.shape({
    Title: PropTypes.string,
    Year: PropTypes.string,
    imdbID: PropTypes.string
  })).isRequired,
  withRedirection: PropTypes.bool.isRequired,
  searchString: PropTypes.string.isRequired
};

export default withRouter(Search);
