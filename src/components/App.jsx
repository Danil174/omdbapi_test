import React from 'react';
import { Switch, Route, Router } from "react-router-dom";
import history from "../history";

import MainPage from './MainPage';
import MoviePage from './MoviePage';

const App = () => {
  return (
    <Router
      history={history}
    >
      <Switch>
        <Route exact path={`/`}>
          <MainPage />
        </Route>
        <Route exact path={`/film/:id?`} component={MoviePage} />
        {/* <Route>
          <NotFound />
        </Route> */}
      </Switch>
    </Router>
  );
};

export default App;
