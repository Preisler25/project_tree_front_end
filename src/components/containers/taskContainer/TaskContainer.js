import DailyTask from '../../task/dailyTask/DailyTask'
import { useState } from "react";

const taskContainer = (team_id) => {
    
    //TODO: fetch list from back and at /api/teams/:team_id/:day


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