import {
  FETCH_USER_DETAILS_START,
  FETCH_USER_DETAILS_SUCCESS,
  FETCH_USER_DETAILS_FAILURE,
  FETCH_USER_POST_SUCCESS,
  FETCH_USER_TODO_SUCCESS,
  FETCH_USER_COMMENT_SUCCESS
} from "../Actions/ActionConstant";

export const initialState = {
  userdata: [],
  post : [],
  usertodo:[],
  usercomments:[],

};
// console.log('shjddsh',initialState.userdata)

const userReducer = (state = initialState, action) => {
  // switch (action.type) {
  //   case FETCH_USER_DETAILS_SUCCESS:
  //     return action.data;
  // }
  switch (action.type) {
  
    case FETCH_USER_DETAILS_SUCCESS:
      return {
        ...state,
        userdata : action.data
      };
    
    
  
    case  FETCH_USER_POST_SUCCESS :
      return {
        ...state,
        post : action.data
      };
      case  FETCH_USER_TODO_SUCCESS :
      return {
        ...state,
        usertodo : action.data
      };
      case  FETCH_USER_COMMENT_SUCCESS :
        return {
          ...state,
          usercomments : action.data
        };
  
  default:
      return state;
  }
};

export default userReducer;
