import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AddPost,
  AddTodo,
  fetchUserData,
  fetchUserTodo,
} from "../sagas/Thunk/SeriviceThunk";
import PostCURD from "./postCURD";
import { Tabs } from "antd";
import { Modal, Button } from "antd";
import "antd/dist/antd.css";
import TodoCURD from "./TodoCURD";

const { TabPane } = Tabs;
function PostList() {
  useEffect(() => {
    dispatch(fetchUserData());
    dispatch(fetchUserTodo());
  }, []);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [ModalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch();
  const [textinput, settextinput] = React.useState();
  const postData = useSelector((state) => state.userdata).userdata;
  const todoData = useSelector((state) => state.usertodo).usertodo;

  console.log("todo", todoData);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { title: titleRef.current.value, body: bodyRef.current.value };
    dispatch(AddPost(data));
    setIsModalVisible(false);
  };
  const createTodo = (e) => {
    e.preventDefault();
    const data = { title: todoRef.current.value, status: status };
    dispatch(AddTodo(data));
    setIsModalVisible(false);
  };
  const titleRef = React.useRef(null);
  const bodyRef = React.useRef(null);
  const todoRef = React.useRef(null);
  const status = "pending";
  const showModal = () => {
    setIsModalVisible(true);
  };
  const showTodoModal = () => {
    setModalVisible(true);
  };

  const handleOk = () => {};

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleTodoCancel = () => {
    setModalVisible(false);
  };

  return (
    <div className="headercontainer">
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="Posts" key="1">
          <p className="postpage">Post Page</p>

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
        </TabPane>
        <TabPane tab="Todo" key="2">
          <>
            <p className="postpage">Todo Page</p>

            <Button type="primary" onClick={showTodoModal}>
              Create Todo
            </Button>
            <form onSubmit={(e) => createTodo(e)}>
              <Modal
                okType="submit"
                title="Create New Todo"
                visible={ModalVisible}
                onOk={(e) => createTodo(e)}
                onCancel={handleTodoCancel}
              >
                <div className="feildview">
                  <input placeholder="Title" className="input" ref={todoRef} />
                </div>
              </Modal>
            </form>
            {todoData.map((todo) => (
              <TodoCURD todo={todo} key={todo.id} />
            ))}
          </>
        </TabPane>
      </Tabs>
    </div>
  );
}

export default PostList;
