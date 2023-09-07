import { useState, useEffect } from "react";
import SockJS from "sockjs-client";
import Stomp from 'stompjs';
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


    //this is the url for the fetch
    const url = `http://localhost:8080/getTeams?day=${day}&view=${view}&data=${data}`;
    // SockJS kapcsolat és Stomp kliens állapotának tárolása


    const [stompClient, setStompClient] = useState(null);

    useEffect(() => {
        const socket = new SockJS("http://localhost:8080/stomp-endpoint");
        const client = Stomp.over(socket);

        socket.onopen = () => {
            client.connect({}, () => {
                console.log("Connected to WebSocket");
                client.subscribe('/ws/trieng', function (mess) {
                    let obj = JSON.parse(mess.body)
                    console.log(obj)
                });
            });
        };

        socket.onclose = () => {
            console.log("WebSocket disconnected");
            if (client.connected) {
                client.disconnect();
            }
        };

        setStompClient(client);

        return () => {
            if (client.connected) {
                client.disconnect();
            }
            socket.close();
        };
    }, []);
    //returning the page
    return (
        <div className="main-cont">
            <Navbar day={day} setDay={setDay} all_days={all_days} view={view} setView={setView} all_views={all_views} data={data} setData={setData} all_data={all_data} />
            <Body url={url} stompClient={stompClient} />
            <Footer />
        </div>
    );
}

export default DailyPointPage;