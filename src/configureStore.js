import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducer'
import promiseMiddleWare from 'redux-promise-middleware'

export default function configureStore () {
  return createStore(
    rootReducer,
    applyMiddleware(promiseMiddleWare())
  )
}
