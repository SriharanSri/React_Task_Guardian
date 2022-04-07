import React from "react";
import { useDispatch } from "react-redux";
import { TodoDelete, TodoUpdate } from "../sagas/Thunk/SeriviceThunk";
import { Radio, Modal, Popconfirm } from "antd";
import {
  DeleteOutlined,
  DeleteTwoTone,
  EditFilled,
  EditOutlined,
  EditTwoTone,
} from "@ant-design/icons";

function TodoCURD(todo) {
  const [visibile, setVisibile] = React.useState(true);
  const [value, setValue] = React.useState(todo.todo.status);
  const [textinput, settextinput] = React.useState(todo.todo.title);
  const [ModalVisible, setModalVisible] = React.useState(false);

  const dispatch = useDispatch();
  const handleEdit = () => {
    // setVisibile(!visibile);
    showEditModal();
  };
  const handleDelete = () => {
    dispatch(TodoDelete(todo.todo.id));
  };
  const handleSubmit = () => {
    dispatch(TodoUpdate({ ...todo, title: textinput }));
  };
  const showEditModal = () => {
    setModalVisible(true);
  };
  const handleText = (e) => {
    settextinput(e.target.value);
  };
  const handleTodoCancel = () => {
    setModalVisible(false);
  };
  // console.log("to", todo);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const EditTodo = (e) => {
    e.preventDefault();
    dispatch(TodoUpdate({ ...todo, title: textinput, status: value }));
    setModalVisible(false);
  };
  return (
    <div className="qwerty">
      <div className="subhead">
        <u className="newpost"></u>
        <div>
          <Popconfirm
            title="Are you sure delete this Task?"
            okText="Yes"
            cancelText="No"
            onConfirm={() => handleDelete()}
          >
            <DeleteOutlined style={{ fontSize: 20 }} />
          </Popconfirm>

          <EditOutlined
            style={{ fontSize: 22, marginLeft: 8 }}
            onClick={() => handleEdit()}
          />
        </div>
      </div>
      <div key={todo.todo.id} className="todoheader">
        <p className="todotitle">{"Title :   " + todo.todo.title}</p>
        <p className="todotitle1">{"Status :   " + todo.todo.status}</p>
      </div>

      <div style={{ flexDirection: "row", display: "flex", padding: 10 }}>
        <input
          value={textinput}
          onChange={(e) => handleText(e)}
          hidden={visibile}
        />
        <form onSubmit={(e) => EditTodo(e)}>
          <Modal
            okType="submit"
            title="Edit Todo"
            visible={ModalVisible}
            onOk={(e) => EditTodo(e)}
            onCancel={handleTodoCancel}
            okText="Update"
          >
            <div className="feildview">
              <input
                value={textinput}
                onChange={(e) => handleText(e)}
                // hidden={visibile}
              />
              <Radio.Group onChange={onChange} value={value}>
                <Radio value={"pending"}>Pending</Radio>
                <Radio value={"completed"}>Completed</Radio>
              </Radio.Group>
            </div>
          </Modal>
        </form>
      </div>
      </div>
    
  );
}

export default TodoCURD;
