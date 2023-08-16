import { NavLink } from 'react-router-dom';

const DayPicker = (days) => {
    return (
        <div className="day-selector">
            {days.map((day) => {
                return (
                    <NavLink key={day} className="data-selector-item" to={`:${day}`}>{day}</NavLink>
                );
            })
            }
        </div>
    );
}

export default DayPicker;
