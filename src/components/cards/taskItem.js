import { useState } from 'react';

const TaskItem = (item) => {

    const name = item.name;
    const is_done = item.is_done;
    const max_points = item.max_points;
    const task_id = item.task_id;
    const points = item.points;
    const setPoints = item.setPoints;

    const classNameConverter = (val) => {
        return val ? 'task-done' : 'task-is-in-progress';
    };

    const handleChange = (event) => {
        console.log(event.target.value);
        let new_points = parseInt(event.target.value);
        if (event.target.value === '') {
            setPoints(0);
        };
        if (max_points >= new_points) {
            setPoints(new_points);
            //TODO: send new_points to backend
        };
    };

    return (
        <div className="task">
            <div className="task_name">
                <h3 className={classNameConverter(is_done)} >{name}</h3>
            </div>
            <input type="text" className="task_points" value={points} onChange={handleChange} />
        </div>
    );

};

export default TaskItem;