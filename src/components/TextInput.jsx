import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ str, onChange }) => {
  return (
    <input
      type="text"
      className="form-control"
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
