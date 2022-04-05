import React from "react";
import { useDispatch } from "react-redux";
import { PostUpdate,PostDelete } from "../sagas/Thunk/SeriviceThunk";
function PostCURD({ post }) {
  const [visibile, setVisibile] = React.useState(true);
  const [textinput, settextinput] = React.useState(post.title)

  const dispatch = useDispatch()
  const handleEdit = () => {
    setVisibile(!visibile);

  };
  const handleDelete = () => {
    dispatch(PostDelete(post.id))

  };
  const handleSubmit = () => {
    dispatch(PostUpdate({...post,title:textinput}))

  };
  const handleText = (e) => {
   settextinput(e.target.value) 
  };
  return (
    <div key={post.id} className="card">
      <div className="newpost">{post.title}</div>
      <div className="tittle">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>

        <input value={textinput}  onChange={(e)=>handleText(e)} hidden={visibile} />
        <button onClick={() => handleSubmit()} className="btn btn-primary" hidden={visibile} >Update</button>
        <button onClick={() => handleEdit()} className="btn btn-primary">
          Edit
        </button>
        <button onClick={() => handleDelete()} className="btn btn-danger">
          Delete
        </button>
        
      </div>
    </div>
  );
}

export default PostCURD;
