import { Outlet } from 'react-router-dom';
import { useState } from 'react';


import DayPicker from './navbar/dayPicker';
import ViewPicker from './navbar/viewPicker';

const Navbar = () => {

    return (
        <div className="main-body">
            <div className="navbar">
                <DayPicker days={days} setDays={setDays} />
                <ViewPicker view={view} setView={setView} />

            </div>
            <Outlet />
        </div>
    );
}

export default Navbar;

