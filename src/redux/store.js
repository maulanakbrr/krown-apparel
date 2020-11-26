import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

// cause we're not using thunk we're using saga
// import thunk from 'redux-thunk';

import rootReducer from './root-reducer';

import createSagaMiddleware from 'redux-saga';

import rootSaga from './root-saga';

// create saga middleware
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

// remove any middlewares from production env
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// run Sagas only after the applyMiddleware phase
sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store);

