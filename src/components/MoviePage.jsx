import React, { useEffect, useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
// import { useSelector, useDispatch } from "react-redux";
import { Container, Grid, CircularProgress, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import { fetchData } from '../utils';
import { MY_API_KEY } from '../const';

const fetchFilm = async (imdbID) => {
  const FilmData = await fetchData(`http://www.omdbapi.com/?apikey=${MY_API_KEY}&i=${imdbID}&plot=full`);
  return FilmData;
};

const MoviePage = ({ match }) => {
  if (match.params.id === undefined) {
    return <Redirect to={'/'} />;
  }

  const [film, setFilm] = useState(null);

  // const loading = useSelector(state => state.loading);
  // const film = useSelector(state => state.currentFilm);

  useEffect(() => {
    // загрузка фильма
    //dispatch(ActionCreator.loadFilm(match.params.id));
    fetchFilm(match.params.id).then(data => setFilm(data));
  }, []);

  if (!film) {
    return (
      <Container maxWidth="lg">
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ height: '100vh' }}
        >
          <CircularProgress size={100}/>
        </Grid>
      </Container>
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
          <Link to={'/'} style={{ textDecoration: 'none' }}>
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
