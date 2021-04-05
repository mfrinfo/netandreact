import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import mult from 'redux-multi'
import promise from 'redux-promise'
import { Provider } from 'react-redux'
import reducers from './main/reducers'
import Routes from './routes'

//Cria a Store
const store = createStore(
  reducers,
  applyMiddleware(thunk, mult, promise)
);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>
  , document.getElementById('root'));

serviceWorker.unregister();
