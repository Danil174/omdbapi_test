import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import FilmCard from './FilmCard';

const FilmsList = ({ filmList }) => {
  return (
    <Grid container spacing={1}>
      {filmList.map((it, index) =>
        <Grid item xs={3} key={index}>
          <FilmCard film={it} />
        </Grid>
      )}
    </Grid>
  );
};

FilmsList.propTypes = {
  filmList: PropTypes.arrayOf(
    PropTypes.shape({
      Title: PropTypes.string,
      Year: PropTypes.string,
      imdbID: PropTypes.string
    })
  )
};

export default FilmsList;
