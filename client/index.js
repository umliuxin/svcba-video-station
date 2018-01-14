import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import ReduxPromise from 'redux-promise';

import App from './components/App.js';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);


require( './scss/application.scss');

ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers)}>
  <App />
</Provider>
  , document.getElementById('root'));
