import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  input: {
    width: '30%',
    height: '22px',
    fontSize: '22px',
    margin: 0,
    padding: '8px 10px',
    boxSizing: 'content-box',
    backgroundColor: '#fff',
    borderRadius: '5px',
    border: '2px solid #a7aebd',
    '&:focus': {
      outline: 'none',
      border: '2px solid #789cea',
    }
  }
});

const TextInput = ({ str, onChange }) => {

  const classes = useStyles();

  return (
    <input
      type="text"
      className={classes.input}
      value={str}
      onChange={onChange}
    />
  );
};

TextInput.propTypes = {
  str: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TextInput;
