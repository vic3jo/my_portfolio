/**
 * Author: Victor Trejo
 * Description: This is the entry file of the react application.
 */
import {applyMiddleware, createStore} from 'redux';
import App from './layout/App';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import Reducers from './core/Reducers';
import createLogger from 'redux-logger';
import loadData from './core/Actions';
import thunk from 'redux-thunk';

const logger = createLogger();
const middleware = applyMiddleware(
    thunk,
    logger
);
const store = createStore(
    Reducers,
    middleware
);

ReactDOM.render(
    (<Provider store={store}>
        <App/>
    </Provider>),
    document.getElementById('app')
);
loadData(store);
