import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddPost, fetchData, fetchUserData } from "../sagas/Thunk/SeriviceThunk";
import PostCURD from "./postCURD";

function PostList() {
  useEffect(() => {
    dispatch(fetchUserData());
  }, []);
  const dispatch = useDispatch();
  const [textinput, settextinput] = React.useState();
  const postData = useSelector((state) => state.userdata).userdata;
  // console.log("fggngf", postData);
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {title:titleRef.current.value ,body : bodyRef.current.value}
    dispatch(AddPost(data))
  };
  const titleRef = React.useRef(null)
  const bodyRef = React.useRef(null)


  return (
    <div className="headercontainer">
     <p className="postpage">Post Page</p> 
      <form onSubmit={(e)=>handleSubmit(e)}>
        {" "}
        <div style={{ flexDirection: "column", display: "flex" }}>
          <input className="input" ref={titleRef}  />
          <input className="input" ref={bodyRef}  />
        </div>
        <button type="submit" className="newbtn">
          Add new post
        </button>
      </form>
      {postData.map((post) => (
        <PostCURD post={post} key={post.id} />
      ))}
    </div>
  );
}

export default PostList;
