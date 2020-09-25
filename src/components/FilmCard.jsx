import React from 'react';
import PropTypes from 'prop-types';

const FilmCard = ({ film }) => {
  return (
    <div>{film.Year}</div>
  );
};

FilmCard.propTypes = {
  film: PropTypes.shape({
    Title: PropTypes.string,
    Year: PropTypes.string,
    imdbID: PropTypes.string
  })
};

export default FilmCard;
