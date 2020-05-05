import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { connectRoutes } from 'redux-first-router';
import { createEpicMiddleware } from 'redux-observable';

import rootEpic from './epics';
import { State } from './interfaces';
import { election, page, user, votes } from './reducers';
import RoutesMap from './routesMap';

/**
 * Configure Redux store with redux-observable and redux-first-router
 *
 * @param {State} initialState initial state to store
 */
export default function configureStore(initialState: State): any {
  const { reducer, middleware, enhancer } = connectRoutes(RoutesMap);

  const epicMiddleware = createEpicMiddleware();
  const rootReducer = combineReducers({ election, location: reducer, page, user, votes });
  const middlewares = applyMiddleware(epicMiddleware, middleware);
  const composeEnhancers = (window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose) || compose;
  const enhancers = composeEnhancers(enhancer, middlewares);
  const store = createStore(rootReducer, initialState, enhancers);

  epicMiddleware.run(rootEpic);

  return store;
}
