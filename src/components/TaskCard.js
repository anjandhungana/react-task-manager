import './TaskCard.scss';

export const TaskCard = () =>{
    return <div className='task-card' draggable>
        <div className='card-head'><p className='card-title'>Title</p> <i className='fa fa-ellipsis-h'></i></div>
        <span>Categories</span>
        <p>description</p>
        <div> date </div>
    </div>
}