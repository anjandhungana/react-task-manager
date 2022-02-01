import { TaskCard } from '../components/TaskCard';
import './TaskColumn.scss';

export const TaskColumn = (props) =>{
    return <div className="task-column">
        <p className='task-column-title'>{props.title} </p>
        <TaskCard/>
    </div>
}