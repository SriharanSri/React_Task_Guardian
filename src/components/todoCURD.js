import React from "react";
import { useDispatch } from "react-redux";
import { TodoDelete, TodoUpdate } from "../sagas/Thunk/SeriviceThunk";
function TodoCURD(todo) {
  const [visibile, setVisibile] = React.useState(true);
  const [textinput, settextinput] = React.useState(todo.todo.title);

  const dispatch = useDispatch();
  const handleEdit = () => {
    setVisibile(!visibile);
  };
  const handleDelete = () => {
    dispatch(TodoDelete(todo.todo.id))
  };
  const handleSubmit = () => {
    dispatch(TodoUpdate({ ...todo, title: textinput }));
  };
  const handleText = (e) => {
    settextinput(e.target.value);
  };
  console.log("to", todo);
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
      </div>
    </>
  );
}

export default TodoCURD;
