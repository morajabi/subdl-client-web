import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import rootReducer from './modules/counter';

export default () => {
  // middlewares 
  const middlewares = [logger];

  // add devtools
  const composeEnhancers = typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  // config store
  const store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(...middlewares)
    )
  );
  
  return store;
};
