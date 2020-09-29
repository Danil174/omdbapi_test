import React, { useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { ActionCreator } from '../redux/reducer';
import { useSelector, useDispatch } from "react-redux";
import { Container, Grid, Button } from '@material-ui/core';
import { AppRoutes } from '../const';
import Search from './Search';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

const MoviePage = ({ match }) => {
  if (match.params.id === undefined) {
    return <Redirect to={AppRoutes.ROOT} />;
  }

  const dispatch = useDispatch();

  const film = useSelector(state => state.film);
  const films = useSelector(state => state.films);
  const stateSearchStr = useSelector(state => state.searchStr);

  useEffect(() => {
    dispatch(ActionCreator.setCurrentFilmID(match.params.id));
  }, [match.params.id]);

  if (!film) {
    return (
      <Spinner />
    );
  }

  const stopper = film.Poster === 'N/A' ? './nf.png': film.Poster;
  const actors = film.Actors.split(', ');
  return (
    <Container maxWidth="lg" >
      <Grid
        container
        justify="center"
        spacing={3}
      >
        <Grid item xs={12}>
          <h2 style={{ textAlign: "center" }}>{film.Title}</h2>
        </Grid>
        <Grid item xs={12}>
          <Search
            collection={films}
            searchString={stateSearchStr}
            withRedirection={true}
          />
        </Grid>
        <Grid item xs={3}>
          <p>Released: {film.Released}</p>
          <hr />
          <p>Runtime: {film.Runtime}</p>
          <hr />
          <p>Genre: {film.Genre}</p>
          <hr />
          <p>Language: {film.Language}</p>
          <hr />
          <p>Country: {film.Country}</p>
          <hr />
          <p>imdbRating: {film.imdbRating}</p>
        </Grid>
        <Grid item xs={6}>
          <p>Plot: {film.Plot}</p>
          <hr />
          <p>Director: {film.Director}</p>
          <hr />
          <p>Writer: {film.Writer}</p>
          <hr />
          <p>Actors:</p>
          <ul>
            {actors.map(it => <li key={it}>{it}</li>)}
          </ul>
        </Grid>
        <Grid item xs={3}>
          <img
            alt={film.Title}
            width="150"
            height="222"
            src={stopper}
            title={film.Title}
          />
        </Grid>
        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
          <Link to={AppRoutes.ROOT} style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              color="primary"
            >
              Вернуться к списку
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

MoviePage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  }),
  film: PropTypes.shape({
    Title: PropTypes.string,
    Type: PropTypes.string,
    Poster: PropTypes.string,
    Year: PropTypes.string,
    imdbID: PropTypes.string
  })
};

export default MoviePage;
