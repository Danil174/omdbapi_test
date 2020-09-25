import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { getFilms } from '../redux/selectors';

import Search from './Search';
import FilmList from './FilmsList';

import { Container, makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles({
  h1: {
    textTransform: 'uppercase'
  },
  container: {
    height: '100vh'
  },
});

const App = ({ films }) => {

  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid
        container
        direction="column"
        alignItems="center"
      >
        <h1 className={classes.h1}>Film app</h1>
        <Search />
        <FilmList filmList={films} />
      </Grid>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  films: getFilms(state),
});

App.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      Title: PropTypes.string,
      Year: PropTypes.string,
      imdbID: PropTypes.string
    })
  )
};

export { App };
export default connect(mapStateToProps)(App);
