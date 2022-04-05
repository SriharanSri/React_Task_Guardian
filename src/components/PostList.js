import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AddPost,
  fetchData,
  fetchUserData,
} from "../sagas/Thunk/SeriviceThunk";
import PostCURD from "./postCURD";
import { Modal, Button } from "antd";
import 'antd/dist/antd.css';
function PostList() {
  useEffect(() => {
    dispatch(fetchUserData());
  }, []);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();
  const [textinput, settextinput] = React.useState();
  const postData = useSelector((state) => state.userdata).userdata;
  // console.log("fggngf", postData);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { title: titleRef.current.value, body: bodyRef.current.value };
    dispatch(AddPost(data));
    setIsModalVisible(false);
  };
  const titleRef = React.useRef(null);
  const bodyRef = React.useRef(null);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {};

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="headercontainer">
      <p className="postpage">Post Page</p>
      {/* <form onSubmit={(e) => handleSubmit(e)}>
        {" "}
        <div style={{ flexDirection: "column", display: "flex" }}>
          <input className="input" ref={titleRef} />
          <input className="input" ref={bodyRef} />
        </div>
        <button type="submit" className="newbtn">
          Add new post
        </button>
      </form> */}

      <Button type="primary" onClick={showModal}>
        Create Post
      </Button>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Modal
          okType="submit"
          title="Create New Post"
          visible={isModalVisible}
          onOk={(e) => handleSubmit(e)}
          onCancel={handleCancel}
        >
          <div className="feildview">
            <input placeholder="Title" className="input" ref={titleRef} />
            <input placeholder="Body" className="input" ref={bodyRef} />
          </div>
        </Modal>
      </form>
      {postData.map((post) => (
        <PostCURD post={post} key={post.id} />
      ))}
    </div>
  );
}

export default PostList;
