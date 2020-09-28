import { takeEvery, call, put, select } from 'redux-saga/effects';
import { ActionCreator } from './reducer';
import { getSearchStr } from './selectors';

export function* sagaWatcher() {
  yield takeEvery(`SET_SEARCH_STR`, sagaWorker);
}

function* sagaWorker() {
  try {
    yield put(ActionCreator.startLoading());
    const str = yield select(getSearchStr);
    const { Search, totalResults } = yield call(fetchFilms, str);
    yield put(ActionCreator.setPagesAmount(totalResults));
    yield put(ActionCreator.loadFilms(Search));
  } catch (e) {
    console.log(e);
  } finally {
    yield put(ActionCreator.endLoading());
  }
}

import { fetchData } from '../utils';
import { MY_API_KEY } from '../const';

const fetchFilms = async (searchStr, page = 1) => {
  const FilmsData = await fetchData(`http://www.omdbapi.com/?apikey=${MY_API_KEY}&s=${searchStr}&page=${page}`);
  return FilmsData;
};
