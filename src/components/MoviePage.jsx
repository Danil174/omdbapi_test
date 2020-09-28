import React from 'react';
import { Redirect } from 'react-router-dom';

const MoviePage = (props) => {
  console.log(props);
  if (props.match.params.id === undefined) {
    return <Redirect to={'/'} />;
  }
  return <h2>Movie</h2>;
};

export default MoviePage;
