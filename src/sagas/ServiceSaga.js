import {
    fetchUserDetailsSuccess,
    fetchUserDetailsFailure,
    
  } from '../Actions/ServiceAction'
  import {
    FETCH_USER_DETAILS_START,
  } from '../Actions/ActionConstant'
  import axios from 'axios'
  import { call, select, put, takeLatest, all } from 'redux-saga/effects'


  const postAPI = axios.create({
    baseURL: 'https://gorest.co.in/public/v2/',
    timeout: 10000,
    headers: {'Authorization': 'Bearer 4c170d08314287840b38d2a60504ceea9eaaf53870870f5d6009c6c4d1e8e09d'}
});

  function* getUserDetailsAPI() {
    try {
      const response =  yield postAPI.get('posts')
  
      if (response) {
        yield put(fetchUserDetailsSuccess(response.data))
        console.log('data',response.data)
       
      } else {
        yield put(fetchUserDetailsFailure(response.data.error))
      }
    } catch (error) {
      yield put(fetchUserDetailsFailure(error))
    }
  }

  export default function* ServiceSaga() {
    yield all([
      yield takeLatest(FETCH_USER_DETAILS_START, getUserDetailsAPI),
      
    ])
  }