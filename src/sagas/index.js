import {all, fork} from 'redux-saga/effects';
import ServiceSaga from './ServiceSaga'


export default function* rootSaga() {
  yield all([fork(ServiceSaga)]);
 
}
