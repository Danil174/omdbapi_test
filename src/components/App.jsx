import React from 'react';
import { Switch, Route } from "react-router-dom";

import MainPage from './MainPage';
import MoviePage from './MoviePage';

const App = () => {
  return (
    <Switch>
      <Route path={`/`} exact component={MainPage} />
      <Route exact path={`/film/:id?`} component={MoviePage} />
      <Route render={() => <h1 style={{ color: 'red', textAlign: 'center' }}>404 not found</h1>} />
    </Switch>
  );
};

export default App;
