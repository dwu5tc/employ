// jshint esversion: 6

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../rootReducer';

const logger = createLogger();

const configureStore = (preloadedState) => {
	return createStore(
		rootReducer,
		preloadedState, // ???
		applyMiddleware(
			thunk,
			logger
		)
	);
};

export default configureStore;