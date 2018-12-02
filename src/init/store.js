import { createStore } from 'redux';

import { reducer } from './reducer';
import { saga } from './saga';

// // Middleware
// import { enhancedStore, sagaMiddleware } from './middleware/core';

// Core
import { applyMiddleware, compose } from 'redux';

// Middleware
import { createLogger } from 'redux-logger';
// import { customThunk } from './custom';
// import createSagaMiddleware from 'redux-saga';

const logger = createLogger({
  duration: true,
  collapse: true,
  colors:   {
    title:     () => '#139BFE',
    prevState: () => '#1C5FAF',
    action:    () => '#149945',
    nextState: () => '#A47104',
    error:     () => '#FF0005',
  },
});
// const sagaMiddleware = createSagaMiddleware();
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = !process.env.NODE_ENV || process.env.NODE_ENV === 'development' && devtools ? devtools : compose;

// const middleware = [ sagaMiddleware, customThunk  ];
const middleware = []// sagaMiddleware ];

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const enhancedStore = composeEnhancers(applyMiddleware(...middleware));

export const store = createStore(reducer, enhancedStore);

// sagaMiddleware.run(saga);