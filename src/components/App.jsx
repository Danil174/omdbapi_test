import React from 'react';
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

const App = () => {

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
        <FilmList filmList={[1, 2, 3, 4, 5, 6, 7, 8]} />
      </Grid>
    </Container>
  );
};

export default App;
