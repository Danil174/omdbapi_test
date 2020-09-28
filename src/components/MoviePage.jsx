import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const MoviePage = ({ match }) => {
  if (match.params.id === undefined) {
    return <Redirect to={'/'} />;
  }
  return <h2>Movie {match.params.id}</h2>;
};

MoviePage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  }),
};

export default MoviePage;
