import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { searchRobots, requestRobots } from './reducers.js';

const rootReducer = combineReducers({ searchRobots, requestRobots});
const logger = createLogger();

const middlewares = [thunkMiddleware];

if (process.env.NODE_ENV === 'development') {
	middlewares.push(logger);
};

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;