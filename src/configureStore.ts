import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { connectRoutes } from 'redux-first-router';

import { page } from './reducers';
import RoutesMap from './routesMap';

export default function configureStore(preloadedState = {}): any {
  const { reducer, middleware, enhancer } = connectRoutes(RoutesMap);

  const rootReducer = combineReducers({ location: reducer, page });
  const middlewares = applyMiddleware(middleware);
  const enhancers = compose(enhancer, middlewares);

  return createStore(rootReducer, preloadedState, enhancers);
}
