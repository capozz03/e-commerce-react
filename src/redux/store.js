import { createStore, combineReducers, applyMiddleware } from 'redux';
import gamesReducer from './gamesReducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    gamesPage: gamesReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;