import './TopSecondNav.scss'
export const TopSecondNav = () =>{
    return <div className="top-second-nav">
        <div className="left">
            <i className="fa fa-bars"></i>
            <i className="fas fa-th-large active"></i>

        </div>
        <div className="right">
            <button type='button' className='btn'>Add Task</button>
        </div>
    </div>
}