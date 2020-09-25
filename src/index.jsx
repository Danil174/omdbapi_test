import React from 'react';
import ReactDOM from "react-dom";
import App from './components/App';

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from "react-redux";
import { reducer } from './redux/reducer.js';

const store = createStore(
  reducer,
  composeWithDevTools()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector(`#root`)
);
