import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducers/index';

const combinedReducers = combineReducers({ root: rootReducer });

export type AppState = ReturnType<typeof combinedReducers>;

export default createStore(combinedReducers, applyMiddleware(thunkMiddleware));