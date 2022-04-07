import { Modal, Popconfirm } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { PostUpdate, PostDelete } from "../sagas/Thunk/SeriviceThunk";
function PostCURD({ post }) {
  const [visibile, setVisibile] = React.useState(true);
  const [textinput, settextinput] = React.useState(post.title);
  const [ModalVisible, setModalVisible] = React.useState(false);
  const titleRef = React.useRef(null);
  const bodyRef = React.useRef(null);
  const dispatch = useDispatch();
  const handleEdit = () => {
    setModalVisible(visibile);
  };
  const handleDelete = () => {
    dispatch(PostDelete(post.id));
  };
  const handleEditCancel = () => {
    setModalVisible(false);
  };
  const EditPost = () => {
    dispatch(
      PostUpdate({
        ...post,
        body: bodyRef.current.value,
        title: titleRef.current.value,
      })
    );
    setModalVisible(!visibile);
  };
  const handleText = (e) => {
    settextinput(e.target.value);
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const data = { title: titleRef.current.value, body: bodyRef.current.value };
  //   dispatch(AddPost(data));
  //   setModalVisible(false);
  // };
  return (
    <div key={post.id} className="card">
      <u className="newpost">{post.title}</u>
      <div className="tittle">
        <h5 className="card-title">{"Title :    " + post.title}</h5>
        <p className="card-text">{"Post :   " + post.body}</p>

        <input
          value={textinput}
          onChange={(e) => handleText(e)}
          hidden={visibile}
        />
        {/* <button
          onClick={() => handleSubmit()}
          className="btn btn-primary"
          hidden={visibile}
        >
          Update
        </button> */}
        <button onClick={() => handleEdit()} className="btn btn-primary">
          Edit
        </button>

        <Popconfirm
          title="Are you sure delete this Post?"
          okText="Yes"
          cancelText="No"
          onConfirm={() => handleDelete()}
        >
          <button className="btn btn-danger">Delete</button>
        </Popconfirm>
      </div>
      <form onSubmit={(e) => EditPost(e)}>
        <Modal
          okType="submit"
          title="Edit Post"
          visible={ModalVisible}
          onOk={(e) => EditPost(e)}
          onCancel={handleEditCancel}
          okText="Update"
        >
          <div className="feildview">
            {/* <input value={textinput} onChange={(e) => handleText(e)} /> */}
            <input placeholder="Update Title" className="input" ref={titleRef} />
            <input placeholder="Update Content" className="input" ref={bodyRef} />
          </div>
        </Modal>
      </form>
    </div>
  );
}

export default PostCURD;
