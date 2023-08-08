import { useEffect, useState } from 'react';
import './MainContainer.css'
import TaskContainer from '../taskContainer/TaskContainer';

const MainContainer = () => {
    const [is_loading, setIsLoading] = useState(true);
    const [teams, setTeams] = useState(null);

    /*useEffect(() => {
        const fetchTeams = async () => {
            setIsLoading(true);
            //const response = await fetch(`http://localhost:3000/api/teams/${team_id}/${day}`);
            //list = await response.json();
            const data = [
                { id: 0, name: 'TeamAlma', day: 0 },
                { id: 1, name: 'TeamKorte', day: 1 },
                { id: 2, name: 'TeamBarack', day: 2}
            ];
            setTimeout(() => {
                setTeams(data); // Update state with fetched data
                setIsLoading(false);
            }, 1000);
        };
    }, [teams]);*/

    return (
        <div className="main-cont">
            <div className="main-cont-color-effect">
                <div className="navbar">
                    <div className="data-selector">
                        <input type="radio" name='data-s-input' defaultChecked/>
                        <input type="radio" name='data-s-input'/>
                        <input type="radio" name='data-s-input'/>
                    </div>
                    <div className="day-selector">
                        <input type="radio" name='day-s-input' defaultChecked/>
                        <input type="radio" name='day-s-input'/>
                        <input type="radio" name='day-s-input'/>
                    </div>
                </div>
                <div className="main-body">
                    <div className="task-cont">
                        <h1>Tasks</h1>
                    </div>
                    <div className="teams-cont">
                        <div className="team-cont">
                            <h1>Team1</h1>
                            <TaskContainer team_id={0} day={0} />
                        </div>
                        <div className="team-cont">
                            <h1>Team2</h1>
                            <TaskContainer team_id={1} day={1} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainContainer;

