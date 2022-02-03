import { SideNav } from "./components/partials/SideNav";
import "./components/partials/TopNav";
import "./components/partials/TopNav.scss";
import "./components/partials/TopSecondNav.scss";
import "./containers/MainContainer.scss";
import { DialogBox } from "./components/partials/DialogBox";
import { useState } from "react";
import { TaskColumn } from "./containers/TaskColumn";
import { TASKS } from "./utils/mockdata/tasks";
import "./containers/TaskContainer.scss";
import { TopNav } from "./components/partials/TopNav";

export const Landing = () => {
  //   let dialogDisplay = false;

  const [tasks, setTasks] = useState([...TASKS]);

  const [displayDialogBox, setIsDisplayed] = useState(true);

  const toggleDisplay = () => {
    setIsDisplayed(!displayDialogBox);
  };

  const taskFilterHandler = (value) => {
    let taskData = tasks.filter((val) => val.status === value);
    console.log("x", taskData);
    return taskData;
  };

  const addTask = (task) => {
    let newTask = task;
    newTask.id = tasks.length + 1;
    setTasks([...tasks, newTask]);
    toggleDisplay();
    // console.log(task);
    console.log(tasks);
  };

  const deleteCard = (id) => {
    const tempTasks = tasks.filter(v=>v.id !== id)
    setTasks([...tempTasks])
  }

  return (
    <div className="Landing">
      <SideNav />
      <div className="main-container">
        <TopNav />

        <div className="top-second-nav">
          <div className="left">
            <i className="fa fa-bars"></i>
            <i className="fas fa-th-large active"></i>
          </div>
          <div className="right">
            <button type="button" className="btn" onClick={toggleDisplay}>
              Add Task
            </button>
          </div>
        </div>



        <div className="task-container">
          <TaskColumn title="To Do" tasks={taskFilterHandler("todo")} deleteCard = {deleteCard} />
          <TaskColumn
            title="In Progress"
            tasks={taskFilterHandler("in progress")}
            deleteCard= {deleteCard}
          />
          <TaskColumn
            title="Completed"
            tasks={taskFilterHandler("completed")}
            deleteCard= {deleteCard}
          />
        </div>
        {displayDialogBox ? (
          <DialogBox closeDialog={toggleDisplay} addTask={addTask} deleteCard= {deleteCard}/>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
