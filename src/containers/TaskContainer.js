import { TaskColumn } from "./TaskColumn";
import './TaskContainer.scss'

export const TaskContainer = () =>{
    return <div className="task-container">
        <TaskColumn title="To Do"/> 
        <TaskColumn title="In Progress"/>
        <TaskColumn title="Completed"/>
    </div>
}