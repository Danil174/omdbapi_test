const initialState = {
  films: [],
  searchStr: '',
  searchPage: 1,
  pageAmount: 0,
  errorMessage: null,
  currentFilmID: null,
  film: null
};

const ActionType = {
  SET_SEARCH_STR: `SET_SEARCH_STR`,
  SET_PAGE_AMOUNT: `SET_PAGE_AMOUNT`,
  SET_SEARCH_PAGE: `SET_SEARCH_PAGE`,
  RESET_PAGE_AMOUNT: `RESET_PAGE_AMOUNT`,
  RESET_SEARCH_PAGE: `RESET_SEARCH_PAGE`,
  SET_CURRENT_FILM_ID: `SET_CURRENT_FILM_ID`,
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_FILM: `LOAD_FILM`,
};

const ActionCreator = {
  setSearchStr: (string) => ({
    type: ActionType.SET_SEARCH_STR,
    payload: string,
  }),
  setSearchPage: (number) => ({
    type: ActionType.SET_SEARCH_PAGE,
    payload: number,
  }),
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films,
  }),
  setCurrentFilmID: (id) => ({
    type: ActionType.SET_CURRENT_FILM_ID,
    payload: id,
  }),
  loadFilm: (film) => ({
    type: ActionType.LOAD_FILM,
    payload: film,
  }),
  setPagesAmount: (amount) =>({
    type: ActionType.SET_PAGE_AMOUNT,
    payload: amount,
  }),
  resetPagesAmount: () =>({
    type: ActionType.RESET_PAGE_AMOUNT,
  }),
  resetSearchPage: () =>({
    type: ActionType.RESET_SEARCH_PAGE,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

  case ActionType.SET_SEARCH_STR:

    return {
      ...state,
      searchStr: action.payload
    };

  case ActionType.SET_PAGE_AMOUNT:

    return {
      ...state,
      pageAmount: Math.ceil(Number(action.payload) / 10)
    };

  case ActionType.SET_SEARCH_PAGE:

    return {
      ...state,
      searchPage: action.payload
    };

  case ActionType.SET_CURRENT_FILM_ID:

    return {
      ...state,
      currentFilmID: action.payload
    };

  case ActionType.LOAD_FILMS:

    return {
      ...state,
      films: action.payload
    };

  case ActionType.LOAD_FILM:

    return {
      ...state,
      film: action.payload
    };

  case ActionType.RESET_PAGE_AMOUNT:

    return {
      ...state,
      pageAmount: 0
    };

  case ActionType.RESET_SEARCH_PAGE:

    return {
      ...state,
      searchPage: 1
    };

  }

  return state;
};

export { reducer, ActionType, ActionCreator };
