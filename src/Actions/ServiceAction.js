import {
    FETCH_USER_DETAILS_START,
    FETCH_USER_DETAILS_SUCCESS,
    FETCH_USER_DETAILS_FAILURE,
} from "./ActionConstant";


export function fetchuserPost(data){
  
}

export function fetchUserDetailsStart(data) {
    return {
      type: FETCH_USER_DETAILS_START,
      data,
    };
  }
  
  export function fetchUserDetailsSuccess(data) {
    // console.log(data,'hsvsgv')

    return {
      type: FETCH_USER_DETAILS_SUCCESS,
      data,
    };
  }
  
  export function fetchUserDetailsFailure(error) {
    return {
      type: FETCH_USER_DETAILS_FAILURE,
      error,
    };
  }
  