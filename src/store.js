import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import logger from 'redux-logger';
import getReducers from './modules';

export default (apolloClient) => {
  // reducers
  const reducers = getReducers(apolloClient.reducer());

  // middlewares
  const middlewares = [
    apolloClient.middleware(),
    logger
  ];

  // add devtools
  const composeEnhancers = typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  // config store
  const store = createStore(
    reducers,
    composeEnhancers(
      applyMiddleware(...middlewares)
    )
  );

  return store;
};
