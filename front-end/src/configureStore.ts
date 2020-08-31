import { Store, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { ApplicationState, createRootReducer } from './store';
import { composeWithDevTools } from 'redux-devtools-extension';
// eslint-disable-next-line no-redeclare
import { rootSaga } from './store/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(history, initialState: ApplicationState): Store<ApplicationState> {
  const middlewares = [sagaMiddleware, routerMiddleware(history)];
  const enhancers = [applyMiddleware(...middlewares)];
  const store = createStore(createRootReducer, initialState, composeWithDevTools(...enhancers));
  sagaMiddleware.run(rootSaga);

  return store;
}
