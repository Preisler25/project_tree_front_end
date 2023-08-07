import DailyTask from '../../task/dailyTask/DailyTask'
import { useState } from "react";

const taskContainer = (team_id) => {
    


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