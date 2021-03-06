import axios from "axios";
import { FETCH_USER_COMMENT_SUCCESS, FETCH_USER_DETAILS_SUCCESS ,FETCH_USER_POST_SUCCESS, FETCH_USER_TODO_SUCCESS} from "../../Actions/ActionConstant";
import { ToastContainer, toast } from 'react-toastify';

const postAPI = "users/2896/posts";
const todoAPI = "users/2896/todos";
const updatePost = 'posts/'
const updateTodo = 'todos/'
const deletePost = 'posts/'
const user ='users/'
const getTodo = 'users/2896/todos'
const getCmt = 'posts/2192/comments'
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
  export const fetchTodo = (data) => {
    return {
      type: FETCH_USER_TODO_SUCCESS,
      data,
    };
  };
  export const fetchComment = (data) => {
    return {
      type: FETCH_USER_COMMENT_SUCCESS,
      data,
    };
  };
  export const fetchUserComment = (post) => {
    return async (dispatch) => {
      try {
        const response = await API.get(getCmt,post);
        // toast("Updated!")
        dispatch(fetchComment(response.data));
        // console.log("res", response.data);
      } catch (error) {
        console.log('err',error)
        throw error;
      }
     
    };
  };

  export const fetchUserTodo = () => {
    return async (dispatch) => {
      try {
        const response = await API.get(getTodo);
        dispatch(fetchTodo(response.data));
        // console.log("res", response.data);
      } catch (error) {
        throw error;
      }
    };
  };

export const fetchUserData = () => {
  return async (dispatch) => {
    try {
      const response = await API.get(postAPI);
      dispatch(fetchData(response.data));
      // console.log("res", response.data);
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
       await API.delete(deletePost+id);
        dispatch(fetchUserData())
        toast("Post Deleted!")
      } catch (error) {
        throw error;
      }
    };
  };
  export const TodoDelete = (id) => {
    return async (dispatch) => {
      try {
        await API.delete(updateTodo+id);
        dispatch(fetchUserTodo())
        toast("Todo Deleted!")
      } catch (error) {
        throw error;
      }
    };
  };
  export const AddPost = (data) => {
    return async (dispatch) => {
      try {
       await API.post(postAPI,data);
        dispatch(fetchUserData())
        toast("Post Added!")
      } catch (error) {
        throw error;
      }
    };
  };
  export const AddTodo = (data) => {
    return async (dispatch) => {
      try {
        await API.post(todoAPI,data);
        dispatch(fetchUserTodo())
        toast("New Todo Added!")
      } catch (error) {
        throw error;
      }
    };
  };
  export const TodoUpdate = (todo) => {
    return async (dispatch) => {
      try {
        await API.patch(updateTodo+todo.todo.id,todo);
        dispatch(fetchUserTodo())
        toast('Updated !!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          
          });
      } catch (error) {
        throw error;
      }
    };
  };