import React from 'react';
import { useSelector } from "react-redux";

import Search from './Search';
import FilmList from './FilmsList';
import SmartPagination from './SmartPagination';

import { Container, makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles({
  h1: {
    textTransform: 'uppercase'
  },
});

const App = () => {
  const films = useSelector((state) => {
    return state.films;
  });

  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Grid
        container
        direction="column"
        alignItems="center"
      >
        <h1 className={classes.h1}>Film app</h1>
        <Search />
        <FilmList filmList={films} />
      </Grid>
      <SmartPagination />
    </Container>
  );
};

export default App;
