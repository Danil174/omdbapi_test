import React from 'react';
import PropTypes from 'prop-types';
import { Grid, makeStyles, Container } from '@material-ui/core';
import FilmCard from './FilmCard';

const useStyles = makeStyles({
  container: {
    margin: '20px 0'
  },
});

const FilmsList = ({ filmList, onClickHandler }) => {

  if (filmList.length === 0) {
    return (
      <Container maxWidth="lg">
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ height: '50vh' }}
        >
          <h2>Совпадений не найдено</h2>
        </Grid>
      </Container>
    );
  }

  const classes = useStyles();

  return (
    <Grid
      className={classes.container}
      container
      spacing={1}
      justify="center"
    >
      {filmList.map((it, index) =>
        <Grid item xs={3} key={index}>
          <FilmCard film={it} onClickHandler={onClickHandler} />
        </Grid>
      )}
    </Grid>
  );
};

FilmsList.propTypes = {
  onClickHandler: PropTypes.func.isRequired,
  filmList: PropTypes.arrayOf(
    PropTypes.shape({
      Title: PropTypes.string,
      Year: PropTypes.string,
      imdbID: PropTypes.string
    })
  )
};

export default FilmsList;
