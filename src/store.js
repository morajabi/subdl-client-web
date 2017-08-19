import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import logger from 'redux-logger';
import rootReducer from './modules/counter';

export default (apolloClient) => {
  // reducers
  const reducers = combineReducers({
    rootReducer,
    apollo: apolloClient.reducer(),
  });

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
