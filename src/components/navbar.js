import { NavLink, Outlet } from 'react-router-dom';

const Navbar = (params) => {
    return (
        <div className="main-body">
            <div className="navbar">
                <div className="day-selector">
                    {params.days.map((day, index) => {
                        return (
                            <NavLink key={index} className="data-selector-item" to={`:${day}`}>{day}</NavLink>
                        );
                    })
                    }
                </div>
            </div>
            <Outlet />
        </div>
    );
}

export default Navbar;

