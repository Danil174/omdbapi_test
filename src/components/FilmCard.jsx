import React from 'react';
import PropTypes from 'prop-types';

const FilmCard = ({ film }) => {
  return (
    <div>{film}</div>
  );
};

FilmCard.propTypes = {
  film: PropTypes.shape()
};

export default FilmCard;
