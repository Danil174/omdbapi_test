import { takeEvery, all, call, put, select } from 'redux-saga/effects';
import { ActionCreator } from './reducer';
import { getSearchStr, getCurrentFilmID } from './selectors';
import { fetchFilms, fetchFilm } from '../api';

export default function* rootSaga() {
  yield all([
    watchSetSerchString(),
    watchLoadFilm()
  ]);
}

function* watchSetSerchString() {
  yield takeEvery(`SET_SEARCH_STR`, setSerchStringWorker);
}

function* setSerchStringWorker() {
  try {
    yield put(ActionCreator.startLoading());
    const str = yield select(getSearchStr);
    const { Search, totalResults } = yield call(fetchFilms, str);
    yield put(ActionCreator.setPagesAmount(totalResults));
    yield put(ActionCreator.loadFilms(Search));
  } catch (e) {
    yield put(ActionCreator.setPagesAmount(0));
    yield put(ActionCreator.loadFilms([]));
    console.log(e);
  } finally {
    yield put(ActionCreator.endLoading());
  }
}

function* watchLoadFilm() {
  yield takeEvery(`SET_CURRENT_FILM_ID`, loadFilmWorker);
}

function* loadFilmWorker() {
  try {
    const id = yield select(getCurrentFilmID);
    const film = yield call(fetchFilm, id);
    yield put(ActionCreator.loadFilm(film));
  } catch (e) {
    yield put(ActionCreator.loadFilm(null));
    console.log(e);
  }
}
