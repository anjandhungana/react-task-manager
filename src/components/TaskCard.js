import "./TaskCard.scss";

export const TaskCard = (props) => {
  return (
    <div className="task-card" draggable>
      <div className="card-head">
        <p className="card-title">{props.task.taskTitle}</p>{" "}
        <div className="card-icons">
          <i className="fa fa-ellipsis-h"></i>
          <i className="fa fa-multiply" onClick={() => props.remove(props.task.id)}></i>
        </div>
      </div>
      <div className="categories">{props.task.tag}</div>
      <p>{props.task.description}</p>
    </div>
  );
};
