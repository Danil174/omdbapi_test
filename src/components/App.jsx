import React from 'react';
import { Link } from 'react-router-dom';
import { Switch, Route } from "react-router-dom";
import { AppRoutes } from '../const';

import MainPage from './MainPage';
import MoviePage from './MoviePage';

const App = () => {
  return (
    <Switch>
      <Route path={AppRoutes.ROOT} exact component={MainPage} />
      <Route exact path={`${AppRoutes.FILM_PAGE}/:id?`} component={MoviePage} />
      <Route render={() => <h1 style={{ color: 'red', textAlign: 'center' }}>404 not found, move  <Link to={AppRoutes.ROOT}>home</Link></h1>} />
    </Switch>
  );
};

export default App;
