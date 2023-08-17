import { useState } from "react";

import Body from "../components/body";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const DailyPointPage = () => {

    //initing states
    //fetching back end for real data
    const [all_teams, setAllTeams] = useState([
        {
            team_id: 1, team_name: "team1", team_leader: "leader1", team_mentor: "mentor1", tasks: [{ task_id: 1, task_point: 20, task_max: 30, task_is_done: false }, { task_id: 2, task_point: 30, task_max: 30, task_is_done: false }], team_points: "100"
        },
        {
            team_id: 2, team_name: "team2", team_leader: "leader2", team_mentor: "mentor2", tasks: [{ task_id: 1, task_point: 20, task_max: 30, task_is_done: false }, { task_id: 2, task_point: 30, task_max: 30, task_is_done: true }], team_points: "100"
        },
        {
            team_id: 3, team_name: "team3", team_leader: "leader3", team_mentor: "mentor3", tasks: [{ task_id: 1, task_point: 20, task_max: 30, task_is_done: true }, { task_id: 2, task_point: 30, task_max: 30, task_is_done: true }], team_points: "100"
        }
    ]);

    //feching back end for real data
    const [all_days, setAllDays] = useState(["day1", "day2", "day3", "day4", "day5", "day6", "day7"]);
    const [day, setDay] = useState(all_days[0]);

    //feching back end for real data
    const [all_views, setAllViews] = useState(["by_id", "by_points"]);
    const [view, setView] = useState(all_views[0]);

    //feching back end for real data
    const [all_data, setAllData] = useState(["team_name", "team_leader", "team_mentor", "team_points"]);
    const [data, setData] = useState(all_data[0]);


    return (
        <div className="main-cont">
            <Navbar day={day} setDay={setDay} all_days={all_days} view={view} setView={setView} all_views={all_views} data={data} setData={setData} all_data={all_data} />
            <Body teams={all_teams} setTeams={setAllTeams} />
            <Footer />
        </div>
    );
}

export default DailyPointPage;