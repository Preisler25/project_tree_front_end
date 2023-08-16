import { useState } from "react";

import Body from "../components/body";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const DailyPointPage = () => {

    //initing states
    const [day, setDay] = useState();
    const [all_days, setAllDays] = useState(["day1"]);
    const [view, setView] = useState('by_id');
    const [all_views, setAllViews] = useState(["by_id", "by_points"]);
    const [data, setData] = useState([]);
    const [all_data, setAllData] = useState(["team_name", "team_leader", "team_mentor", "team_points"]);


    return (
        <div className="main-cont">
            <Navbar day={day} setDay={setDay} all_days={all_days} view={view} setView={setView} all_views={all_views} data={data} setData={setData} all_data={all_data} />
            <Body />
            <Footer />
        </div>
    );
}

export default DailyPointPage;