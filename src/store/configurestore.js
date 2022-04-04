import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
// import { getData } from '../components/asyncStorageComponent';

import rootReducer from '../reducers/index';

import rootSaga from '../sagas/index';

const thunkMiddleware = require('redux-thunk').default
const sagaMiddleware = createSagaMiddleware();
const axios = require('axios')



// const store = createStore(rootReducer, applyMiddleware(...middlewares));
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// thunkMiddleware.run(rootSaga);

export {store};
