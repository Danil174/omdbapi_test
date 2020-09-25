const initialState = {
  films: [
    { Title: "Beta Test", Year: "2016", imdbID: "tt4244162" },
    { Title: "Johnny Test", Year: "2005–2014", imdbID: "tt0454349" },
    { Title: "Test Pilot", Year: "1938", imdbID: "tt0030848" },
    { Title: "The Test: A New Era for Australia's Team", Year: "2020–", imdbID: "tt11347692" },
    { Title: "Test", Year: "2013", imdbID: "tt2407380" },
  ],
  searchStr: '',
  searchPage: 1
};

const ActionType = {
  GET_FILMS: `GET_FILMS`,
  SET_SEARCH_STR: `SET_SEARCH_STR`,
};

const ActionCreator = {
  getFilms: (films) => ({
    type: ActionType.GET_FILMS,
    payload: films,
  }),
  setSeatchStr: (string) => ({
    type: ActionType.SET_SEARCH_STR,
    payload: string,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case ActionType.GET_FILMS:

    return {
      ...state,
      film: action.payload
    };
  case ActionType.SET_SEARCH_STR:

    return {
      ...state,
      searchStr: action.payload
    };
  }

  return state;
};

export { reducer, ActionType, ActionCreator };
