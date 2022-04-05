import axios from "axios";
import { FETCH_USER_DETAILS_SUCCESS ,FETCH_USER_POST_SUCCESS} from "../../Actions/ActionConstant";
import { ToastContainer, toast } from 'react-toastify';

const postAPI = "users/4253/posts";
const updatePost = 'posts/'
const deletePost = 'posts/'
const user ='users/'
const API = axios.create({
    baseURL: 'https://gorest.co.in/public/v2/',
    timeout: 10000,
    headers: {'Authorization': 'Bearer 4c170d08314287840b38d2a60504ceea9eaaf53870870f5d6009c6c4d1e8e09d'}
});

export const fetchData = (data) => {
  return {
    type: FETCH_USER_DETAILS_SUCCESS,
    data,
  };
};
export const fetchPost = (data) => {
    return {
      type: FETCH_USER_POST_SUCCESS,
      data,
    };
  };

export const fetchUserData = () => {
  return async (dispatch) => {
    try {
      const response = await API.get(postAPI);
      dispatch(fetchData(response.data));
      console.log("res", response.data);
    } catch (error) {
      throw error;
    }
  };
};
export const fetchUserPost = () => {
    return async (dispatch) => {
      try {
        const response = await API.get(user);
        dispatch(fetchData(response.data));
        console.log("res", response.data);
      } catch (error) {
        throw error;
      }
    };
  };
export const PostUpdate = (post) => {
    return async (dispatch) => {
      try {
        const response = await API.patch(updatePost+post.id,post);
        dispatch(fetchUserData())
        toast("Updated!")
      } catch (error) {
        throw error;
      }
    };
  };
  
  export const PostDelete = (id) => {
    return async (dispatch) => {
      try {
        const response = await API.delete(deletePost+id);
        dispatch(fetchUserData())
        toast("Post Deleted!")
      } catch (error) {
        throw error;
      }
    };
  };
  export const AddPost = (data) => {
    return async (dispatch) => {
      try {
        const response = await API.post(postAPI,data);
        dispatch(fetchUserData())
        toast("Post Added!")
      } catch (error) {
        throw error;
      }
    };
  };