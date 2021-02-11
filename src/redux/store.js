import {createStore, combineReducers, applyMiddleware} from 'redux';
//import {themeReducer} from './index';
import {themeReducer} from './themeReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
const middleWares = [thunk, logger];

 const reducers = combineReducers({
  myDarMode:themeReducer,
});

const store = createStore(reducers, applyMiddleware(...middleWares));

export default store;
