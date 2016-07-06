import React from 'react';
import ReactDOM from 'react-dom';
import App from './layout/App';
import {applyMiddleware,  createStore} from 'redux';
import thunk from 'redux-thunk';
// import promise from 'redux-promise'
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import Reducers from './core/Reducers';
import loadData from './core/Actions';


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
)

loadData(store);