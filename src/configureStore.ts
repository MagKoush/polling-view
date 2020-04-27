import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { connectRoutes } from 'redux-first-router';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import { fetchElection } from './epics';
import { State } from './interfaces';
import { page, user } from './reducers';
import RoutesMap from './routesMap';

export default function configureStore(preloadedState: State): any {
  const { reducer, middleware, enhancer } = connectRoutes(RoutesMap);

  const rootEpic = combineEpics(fetchElection);
  const epicMiddleware = createEpicMiddleware();
  const rootReducer = combineReducers({ location: reducer, page, user });
  const middlewares = applyMiddleware(epicMiddleware, middleware);
  const composeEnhancers = (window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose) || compose;
  const enhancers = composeEnhancers(enhancer, middlewares);
  const store = createStore(rootReducer, preloadedState, enhancers);

  epicMiddleware.run(rootEpic);

  return store;
}
