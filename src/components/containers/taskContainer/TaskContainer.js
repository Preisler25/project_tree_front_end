import React, { useState, useEffect } from "react"; // Import useEffect

import DailyTask from '../../task/dailyTask/DailyTask'
import './TaskContainer.css'

const TaskContainer = (team_id, day) => {
    const [is_loading, setIsLoading] = useState(true);
    const [list, setList] = useState([]); // Use state for list

    useEffect(() => {
        const fetchList = async () => {
            setIsLoading(true);
            //TODO: fetch list from back and at /api/teams/:team_id/:day
            //const response = await fetch(`http://localhost:3000/api/teams/${team_id}/${day}`);
            //list = await response.json();
            const data = [
                { name: 'alma', is_done: true, task_id: 0, max_points: 100, points: 5 },
                { name: 'korte', is_done: false, task_id: 1, max_points: 100, points: 5 }
            ];
            setTimeout(() => {
                setList(data); // Update state with fetched data
                setIsLoading(false);
            }, 1000);
        };

        fetchList();
    }, [day]); // Add team_id and day as dependencies to re-fetch when they change

    if (is_loading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }

    return (
        <div className="day-cont">
            {list.map((item) => (
                <DailyTask key={item.task_id} {...item} />
            ))}
        </div>
    );
}

export default TaskContainer;
