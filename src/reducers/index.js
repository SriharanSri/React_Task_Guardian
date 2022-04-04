import {combineReducers} from 'redux';
import userReducer from './ServiceReducer';

export default combineReducers({

  userdata: userReducer,
  post : userReducer,
  
})