import './TopNav.scss';

export const TopNav = () =>{
    return <nav className="top-nav">
        <div className="left">
            <i className='fas fa-arrow-right'></i>
            <div className='searchinput'> 
            <i className='fa fa-search'></i>
            <input type="text" placeholder='Search'></input> </div>
        </div>
        <div className="right">
            <i className='fa fa-user'></i>
            <i className='fa fa-angle-down'></i>
        </div>
    </nav>

}