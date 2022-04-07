import {
  DeleteOutlined,
  DeleteTwoTone,
  EditFilled,
  EditOutlined,
  EditTwoTone,
} from "@ant-design/icons";
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

  return (
    <div key={post.id} className="card">
      <div className="subhead">
        <u className="newpost">{post.title}</u>
        <div>
          <Popconfirm
            title="Are you sure delete this Post?"
            okText="Yes"
            cancelText="No"
            onConfirm={() => handleDelete()}
          >
            <DeleteTwoTone style={{ fontSize: 20 }} />
          </Popconfirm>

          <EditTwoTone
            style={{ fontSize: 22, marginLeft: 8 }}
            onClick={() => handleEdit()}
          />
        </div>
      </div>

      <div className="tittle">
        <h5 className="card-title">{"Title :    " + post.title}</h5>
        <p className="card-text">{"Post :   " + post.body}</p>

        <input
          value={textinput}
          onChange={(e) => handleText(e)}
          hidden={visibile}
        />
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
            <input
              placeholder="Update Title"
              className="input"
              ref={titleRef}
            />
            <input
              placeholder="Update Content"
              className="input"
              ref={bodyRef}
            />
          </div>
        </Modal>
      </form>
    </div>
  );
}

export default PostCURD;
