import { useState } from "react";
import "./DialogBox.scss";
import { TASKS } from "../../utils/mockdata/tasks";

export const DialogBox = (props) => {
  const options = [
    { label: "To Do", value: "todo" },
    { label: "In Progress", value: "inProgress" }, 
    { label: "Completed", value: "completed" },
  ];

  const [task, setTask] = useState({
    id:0,
    taskTitle: "",
    description: "",
    status: "todo",
    tag:""
  });

  const taskHandler = (e) =>{
    setTask({...task, [e.target.name]:e.target.value})
  }


  const createTask = (e)=>{
    e.preventDefault();
    props.addTask(task);
    // console.log(task)
  }

  return (
    <div className="dialog-box">
      <div className="card">
        <form onSubmit={createTask}>
          <input type="text" placeholder="Task Title" name="taskTitle" onChange={taskHandler}/>
          <input
            type="text"
            placeholder="Task Description"
            name="description"
            onChange={taskHandler}
          />
          <input
            type="text"
            placeholder="Tag"
            name="tag"
            onChange={taskHandler}
          />
          
          <label>Select Status</label>
          <select name="status" onChange={taskHandler}>
            <option value="todo"> To Do </option>
            <option value="in progress"> In Progress</option>
            <option value="completed"> Completed </option>
          </select>
          <span>
            <button type="button" onClick={createTask} >
              Add
            </button>
            <button onClick={props.closeDialog}>Close</button>
          </span>
        </form>
      </div>
      <div className="backdrop" onClick={props.closeDialog} />
    </div>
  );
};
