import React, {useState} from "react";


export default function AddTodo(props) {
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");

    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title Or Dscription is Not Blank");
        }
        else{
        props.addTodo(title,desc)
        settitle("")
        setdesc("")
      }

    }
  return (
    <div className="container my-3">
        <h3>Add a Todo</h3>
        <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            value = {title}
            onChange ={(e)=>{settitle(e.target.value)}}
            className="form-control"
            id="title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Todo Descripton
          </label>
          <input
            type="text"
            value = {desc}
            onChange ={(e)=>{setdesc(e.target.value)}}
            className="form-control"
            id="desc"
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          Add Todo
        </button>
      </form>
    </div>
  );
}
