import { TaskCard } from "../components/TaskCard";
import "./TaskColumn.scss";

export const TaskColumn = (props) => {
  
  
  
  return (
    <div className="task-column">
      <p className="task-column-title">{props.title} </p>
      {(props.tasks.length > 0) ? props.tasks.map((v, key) => {
        return <TaskCard task = { v } key = { key } remove = {props.deleteCard} />
}) : <p>No items available</p>}
    </div>
  );
};
