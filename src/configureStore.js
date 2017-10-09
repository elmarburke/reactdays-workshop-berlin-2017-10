import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducer';
import promiseMiddleWare from 'redux-promise-middleware';
import thunk from 'redux-thunk' 

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, promiseMiddleWare())));
}
