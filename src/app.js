import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import AppRouter from './routers/app.router';
import rootReducer from './reducers/root.reducer';

import 'normalize.css/normalize.css';
import './css/semantic.scss';
import './css/styles.scss';

const store = createStore(rootReducer, applyMiddleware(thunk));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
