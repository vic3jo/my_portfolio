/**
 * Author: Victor Trejo
 * Description: This is the entry file of the react application.
 */
import { applyMiddleware, createStore } from 'redux';
import App from './layout/App';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import Reducers from './core/Reducers';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(
    thunk
);
const store = createStore(
    Reducers,
    middleware
);

ReactDOM.render(
    (<Provider store={store}>
      <App />
    </Provider>),
    document.getElementById('app')
);
