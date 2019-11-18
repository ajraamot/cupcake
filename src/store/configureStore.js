import {createStore, applyMiddleware} from 'redux'; // what about combineReducers?
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/rootSaga';

export default function configureStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();

  // store variable was added for debugging purposes
  let store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware)
  );
  console.log('~~~~~~~~~~~~~~~~~ store = ' + JSON.stringify(store)); // empty object {}

  sagaMiddleware.run(rootSaga);

  return store;
}
