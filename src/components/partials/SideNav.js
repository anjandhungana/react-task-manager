import './SideNav.scss';

export const SideNav = ()=>{
    return <div className="side-nav">
        <div className='logo'>
            <i className='fab fa-500px'></i>
        </div>
        <div className='icon-group'>
            <i className='fa fa-home active'> </i>
            <i className='far fa-clock'> </i>
            <i className='fa fa-gear'> </i>
            <i className='far fa-compass'> </i>
            {/* <i className='fas chart-area'> </i> */}
        </div>
        <div className='side-footer'>
            <i className='far fa-user'></i>
            <i className='fa fa-sign-out-alt'></i>
        </div>
    </div>
}