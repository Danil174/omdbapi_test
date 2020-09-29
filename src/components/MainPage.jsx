import React from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { AppRoutes } from '../const';

import Search from './Search';
import FilmList from './FilmsList';
import SmartPagination from './SmartPagination';

import { Container, makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles({
  h1: {
    textTransform: 'uppercase'
  },
});

const MainPage = ({ history }) => {
  const classes = useStyles();
  const films = useSelector(state => state.films);
  const stateSearchStr = useSelector(state => state.searchStr);

  const MoveToFilmPage = id => {
    history.push({
      pathname: `${AppRoutes.FILM_PAGE}/${id}`
    });
  };

  return (
    <Container maxWidth="lg">
      <Grid
        container
        direction="column"
        alignItems="center"
      >
        <h1 className={classes.h1}>Film app</h1>
        <Search
          collection={films}
          searchString={stateSearchStr}
          withRedirection={false}
        />
        <FilmList filmList={films} onClickHandler={MoveToFilmPage} />
      </Grid>
      <SmartPagination />
    </Container>
  );
};

MainPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }),
};

export default withRouter(MainPage);
