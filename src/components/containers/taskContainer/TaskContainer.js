import DailyTask from '../../task/dailyTask/DailyTask'
import { useState } from "react";

const taskContainer = (team_id) => {

    //TODO: fetch list from back and at /api/teams/:team_id/:day

    list = [{ name: 'alma', max_points: 10, points: 5 }, { name: 'korte', max_points: 10, points: 5 }]

    return (
        <div>
            {list.map((item) => {
                return (
                    DailyTask(item)
                );
            })}
        </div>
    );
}

export default TaskContainer;
