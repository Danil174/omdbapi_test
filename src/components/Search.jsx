import React, { useEffect, useState } from 'react';
import TextInput from './TextInput';
import { DEBOUNCE_TIME, MY_API_KEY } from '../const';
import { useDebounce , fetchData } from '../utils';

const getFilms = async (searchStr, page = 1) => {
  const FilmsData = await fetchData(`http://www.omdbapi.com/?apikey=${MY_API_KEY}&s=${searchStr}&page=${page}`);
  console.log(FilmsData);
  return FilmsData;
};

const Search = () => {
  const [searchStr, setSearchStr] = useState('');

  const debouncedString = useDebounce(searchStr, DEBOUNCE_TIME);

  const handleChange = evt => {
    setSearchStr(evt.target.value);
  };

  useEffect(() => {
    if (debouncedString) {
      getFilms(debouncedString);
    } else {
      console.log('do nothing');
    }
  }, [debouncedString]);

  return (
    <>
      <TextInput str={searchStr} onChange={handleChange} />
    </>
  );
};


{/* { films.map((film) =>
  <li key={film.imdbID}>
    <h4>{film.Title}</h4>
    <img src={film.Poster} alt=""/>
    <span>{film.Year}</span>
  </li>
)} */}

export default Search;
