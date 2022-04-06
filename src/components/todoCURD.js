import React from "react";
import { useDispatch } from "react-redux";
import { PostUpdate,PostDelete } from "../sagas/Thunk/SeriviceThunk";
function TodoCURD(todo) {
//   const [visibile, setVisibile] = React.useState(true);
//   const [textinput, settextinput] = React.useState(post.title)

//   const dispatch = useDispatch()
//   const handleEdit = () => {
//     setVisibile(!visibile);

//   };
//   const handleDelete = () => {
//     dispatch(PostDelete(post.id))

//   };
//   const handleSubmit = () => {
//     dispatch(PostUpdate({...post,title:textinput}))

//   };
//   const handleText = (e) => {
//    settextinput(e.target.value) 
//   };
console.log('to',todo)
  return (
    
    <div key={todo.todo.id} className="todoheader">
      <p className="todotitle">{'Title :'     +todo.todo.title}</p>
      <p className="todotitle1">{'Status :'    +todo.todo.status}</p>
    </div>
    
  );
}

export default TodoCURD;
