import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost, fetchUserData ,fetchUserPost} from "../sagas/Thunk/SeriviceThunk";

function Discard() {
  const dispatch = useDispatch();
  const [userPost, setUserPost] = useState();
  const [usercomment, setUsercomment] = useState();

  React.useEffect(() => {
    getdata();
    getCommentdata();
    dispatch(fetchUserData())
    dispatch(fetchPost())
  
  }, []);
  const userData = useSelector(state=>state.userData)
   const userPostdetails = useSelector(state=>state.post)

  const getdata = () => {
    axios
      .get("https://gorest.co.in/public/v2/posts")

      .then((res) => {
        setUserPost(res.data.length);
      })
      .catch((err) => {
        console.log("error", err.message);
      });
  };
  const getCommentdata = () => {
    axios
      .get("https://gorest.co.in/public/v2/comments")

      .then((res) => {
        setUsercomment(res.data.length);
      })
      .catch((err) => {
        console.log("error", err.message);
      });
  };
  

  return (
    <div className="headercontainer">
      <p className="header"> Dashboard</p>
      
      <div className="listgroup">
        <p className="post">Total number of Posts</p>
        <ul className="textcount">{userPost ? userPost : "Getting Data"}</ul>
      </div>
      <div className="listgroup">
        <p className="post">Total number of Comment</p>
        <ul className="count">{usercomment ? usercomment : "Getting Data"}</ul>
      </div>
      <div className="listgroup">
        <p className="post">Total number of Todos</p>
        <ul className="textcount">{userPost ? userPost : "Getting Data"}</ul>
      </div>

      
    </div>
  );
}

export default Discard;
