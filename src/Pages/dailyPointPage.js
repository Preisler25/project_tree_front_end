import { useState } from "react";

import Body from "../components/body";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const DailyPointPage = () => {

    //initing states
    const [all_days, setAllDays] = useState(["day1", "day2", "day3", "day4", "day5", "day6", "day7"]);
    const [day, setDay] = useState(all_days[0]);
    const [all_views, setAllViews] = useState(["by_id", "by_points"]);
    const [view, setView] = useState(all_views[0]);
    const [all_data, setAllData] = useState(["team_name", "team_leader", "team_mentor", "team_points"]);
    const [data, setData] = useState(all_data[0]);


    return (
        <div className="main-cont">
            <Navbar day={day} setDay={setDay} all_days={all_days} view={view} setView={setView} all_views={all_views} data={data} setData={setData} all_data={all_data} />
            <Body day={day} />
            <Footer />
        </div>
    );
}

export default DailyPointPage;