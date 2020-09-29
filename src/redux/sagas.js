import { takeEvery, all, call, put, select } from 'redux-saga/effects';
import { ActionCreator } from './reducer';
import { getSearchStr, getCurrentFilmID, getSearchPage } from './selectors';
import { fetchFilms, fetchFilm } from '../api';

export default function* rootSaga() {
  yield all([
    watchSetSerchString(),
    watchLoadFilm(),
    watchChangePage(),
  ]);
}

function* watchSetSerchString() {
  yield takeEvery(`SET_SEARCH_STR`, setSerchStringWorker);
}

function* setSerchStringWorker() {
  try {
    const str = yield select(getSearchStr);
    const page = yield select(getSearchPage);
    const { Search, totalResults } = yield call(fetchFilms, str, page);
    yield put(ActionCreator.setPagesAmount(totalResults));
    yield put(ActionCreator.loadFilms(Search));
  } catch (e) {
    yield put(ActionCreator.loadFilms([]));
    yield put(ActionCreator.resetPagesAmount());
    yield put(ActionCreator.resetSearchPage());
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
  }
}

function* watchChangePage() {
  yield takeEvery(`SET_SEARCH_PAGE`, changePageWorker);
}

function* changePageWorker() {
  try {
    const str = yield select(getSearchStr);
    const page = yield select(getSearchPage);
    const { Search } = yield call(fetchFilms, str, page);
    yield put(ActionCreator.loadFilms(Search));
  } catch (e) {
    yield put(ActionCreator.loadFilms([]));
    yield put(ActionCreator.resetPagesAmount());
    yield put(ActionCreator.resetSearchPage());
  }
}
