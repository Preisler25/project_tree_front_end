import { useState } from "react";

import Body from "../components/body";
import Footer from "../components/footer";
import Navbar from "../components/navbar";


//this is the  main page
const DailyPointPage = () => {

    //Defining the states for the navbar

    //this state is needed for the navbar to get the current day
    //TODO: feching backend for all the days in the project
    const [all_days, setAllDays] = useState(["day1", "day2", "day3", "day4", "day5", "day6", "day7"]);
    //setting the current day to the first day in the project
    const [day, setDay] = useState(all_days[0]);

    //this state is needed for the navbar to get the current view
    //feching backend for all the views in the project
    const [all_views, setAllViews] = useState(["by_id", "by_points"]);
    //setting the current view to the first view in the project
    const [view, setView] = useState(all_views[0]);

    //this state is needed for the navbar to get the current data
    //feching backend for all the data in the project
    const [all_data, setAllData] = useState(["team_name", "team_leader", "team_mentor", "team_points"]);
    //setting the current data to the first data in the project
    const [data, setData] = useState(all_data[0]);


    // SockJS kapcsolat állapotának tárolása
    const [socket, setSocket] = useState(null); 

    //this is the url for the fetch
    const url = `http://localhost:8080/getTeams?day=${day}&view=${view}&data=${data}`;


    useEffect(() => {
        // SockJS kapcsolat létrehozása a komponens mountolásakor
        const socket = new SockJS("http://localhost:8080/ws");
    
        socket.onopen = () => {
          console.log("WebSocket connected");
          // Feliratkozás a témára
          socket.send(
            JSON.stringify({
              type: "subscribe",
              destination: "/topic/points",
            })
          );
        };
    
        socket.onmessage = (event) => {
          console.log("Received message:", event.data);
          // Itt tudsz valamit tenni a kapott üzenettel
        };
    
        socket.onclose = () => {
          console.log("WebSocket disconnected");
        };
    
        // Lezárás a komponens unmountolásakor
        return () => {
          socket.send(
            JSON.stringify({
              type: "unsubscribe",
              destination: "/topic/points",
            })
          );
          socket.close();
        };
      }, []);

      useEffect(() => {
        // Mentse a socket állapotot, hogy a gomb eseménykezelő hozzáférjen hozzá
        setSocket(newSocket);
      }, [newSocket]);

    //returning the page
    return (
        <div className="main-cont">
            <Navbar day={day} setDay={setDay} all_days={all_days} view={view} setView={setView} all_views={all_views} data={data} setData={setData} all_data={all_data} />
            <Body url={url} socket={socket}/>
            <Footer />
        </div>
    );
}

export default DailyPointPage;