import { fetchData } from './utils';
import { MY_API_KEY } from './const';

export const fetchFilms = async (searchStr, page = 1) => {
  const changeString = string => encodeURIComponent(string).split('%20').join('+');
  const newString = changeString(searchStr);
  const FilmsData = await fetchData(`http://www.omdbapi.com/?apikey=${MY_API_KEY}&s=${newString}&page=${page}`);
  return FilmsData;
};

export const fetchFilm = async (imdbID) => {
  const FilmData = await fetchData(`http://www.omdbapi.com/?apikey=${MY_API_KEY}&i=${imdbID}&plot=full`);
  return FilmData;
};
