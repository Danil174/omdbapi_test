const initialState = {
  films: [],
  searchStr: '',
  searchPage: 1,
  pageAmount: 0,
  errorMessage: null,
  loading: false
};

const ActionType = {
  SET_SEARCH_STR: `SET_SEARCH_STR`,
  SET_PAGE_AMOUNT: `SET_PAGE_AMOUNT`,
  SET_SEARCH_PAGE: `SET_SEARCH_PAGE`,
  LOAD_FILMS: `LOAD_FILMS`,
  START_LOADING: `START_LOADING`,
  END_LOADING: `END_LOADING`,
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
  setPagesAmount: (amount) =>({
    type: ActionType.SET_PAGE_AMOUNT,
    payload: amount,
  }),
  startLoading: () => ({
    type: ActionType.START_LOADING,
  }),
  endLoading: () => ({
    type: ActionType.END_LOADING,
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

  case ActionType.LOAD_FILMS:

    return {
      ...state,
      films: action.payload
    };

  case ActionType.START_LOADING:

    return {
      ...state,
      loading: true
    };

  case ActionType.END_LOADING:

    return {
      ...state,
      loading: false
    };

  }

  return state;
};

export { reducer, ActionType, ActionCreator };
