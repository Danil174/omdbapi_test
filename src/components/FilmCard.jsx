import React from 'react';
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  article: {
    width: '160px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textAlign: 'center',
    border: '2px solid #4d75c8',
    padding: '10px',
    borderRadius: '12px',
    backgroundColor: '#aac8eb',
  },
  title: {
    whiteSpace: 'nowrap',
  },
  imgWrapper: {
    cursor: 'pointer'
  }
});

const FilmCard = ({ film }) => {
  const classes = useStyles();
  const stopper = film.Poster === 'N/A' ? './nf.png': film.Poster;
  return (
    <article className={classes.article}>
      <span className={classes.title}>{film.Title}</span>
      <div className={classes.imgWrapper}>
        <img
          alt={film.Title}
          width="150"
          height="222"
          src={stopper}
          title={film.Title}
        />
      </div>
    </article>
  );
};

FilmCard.propTypes = {
  film: PropTypes.shape({
    Title: PropTypes.string,
    Type: PropTypes.string,
    Poster: PropTypes.string,
    Year: PropTypes.string,
    imdbID: PropTypes.string
  })
};

export default FilmCard;
