import React from "react";
import { useDispatch } from "react-redux";
import { TodoDelete, TodoUpdate } from "../sagas/Thunk/SeriviceThunk";
import { Radio, Modal } from "antd";

function TodoCURD(todo) {
  const [visibile, setVisibile] = React.useState(true);
  const [value, setValue] = React.useState(1);
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
    dispatch(TodoUpdate({ ...todo, title: textinput,status : value }));
    // const data = { title: todoRef.current.value, status: status };
    // dispatch(AddTodo(data));
    setModalVisible(false);
  };
  return (
    <>
      <div key={todo.todo.id} className="todoheader">
        <p className="todotitle">{"Title :" + todo.todo.title}</p>
        <p className="todotitle1">{"Status :" + todo.todo.status}</p>
      </div>

      <div style={{ flexDirection: "row", display: "flex" }}>
        <input
          value={textinput}
          onChange={(e) => handleText(e)}
          hidden={visibile}
        />
        <button
          onClick={() => handleSubmit()}
          className="btn btn-primary"
          hidden={visibile}
        >
          Update
        </button>
        <button onClick={() => handleEdit()} className="btn btn-primary">
          Edit
        </button>
        <button onClick={() => handleDelete()} className="btn btn-danger">
          Delete
        </button>
        <form onSubmit={(e) => EditTodo(e)}>
          <Modal
            okType="submit"
            title="Edit Todo"
            visible={ModalVisible}
            onOk={(e) => EditTodo(e)}
            onCancel={handleTodoCancel}
            okText='Update'
          >
            <div className="feildview">
              <input
                value={textinput}
                onChange={(e) => handleText(e)}
                // hidden={visibile}
              />
              <Radio.Group onChange={onChange} value={value}>
                <Radio value={'pending'}>Pending</Radio>
                <Radio value={'completed'}>Completed</Radio>
              </Radio.Group>
            </div>
          </Modal>
        </form>
      </div>
    </>
  );
}

export default TodoCURD;
