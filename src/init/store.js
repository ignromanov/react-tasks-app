import { applyMiddleware, compose, createStore } from 'redux'

import { logger } from 'redux-logger'
import thunk      from 'redux-thunk'
import tasksApi   from '../changers/tasks/tasksApi'
import { actors } from './actors'

import { reducer } from './reducer'


const configureStore = () => {
  const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  const composeEnhancers =
          (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') && devtools ? devtools : compose
  
  const middleware = [
    thunk,
    tasksApi,
  ]
  if( !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ) {
    middleware.push( logger )
  }
  
  const enhancedStore = composeEnhancers( applyMiddleware( ...middleware ) )
  const store = createStore( reducer, enhancedStore )
  
  store.subscribe( () =>
    actors.forEach( actor => actor( store.getState(), store.dispatch ) ),
  )
  
  if( process.env.NODE_ENV !== 'production' ) {
    if( module.hot ) {
      module.hot.accept( './reducer', () => {
        store.replaceReducer( reducer )
      } )
    }
  }
  
  return store
}

export default configureStore