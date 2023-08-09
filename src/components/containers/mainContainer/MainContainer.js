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
                        <label htmlFor="team-name-s">TeamName</label>
                        <input id='team-name-s' className='data-selector selector' type="radio" name='data-s-input' defaultChecked />
                        <label htmlFor="team-leader-s">TeamLeader</label>
                        <input id='team-leader-s' className='data-selector selector' type="radio" name='data-s-input' />
                        <label htmlFor="team-mentor-s">TeamMentor</label>
                        <input id='team-mentor-s' className='data-selector selector' type="radio" name='data-s-input' />
                        <label htmlFor="team-max-point-s">TeamMaxPoints</label>
                        <input id='team-max-point-s' className='data-selector selector' type="radio" name='data-s-input' />
                    </div>
                    <div className="day-selector">
                        <label htmlFor="day1">Day1</label>
                        <input id='day1' className='day-selector selector' type="radio" name='day-s-input' defaultChecked />
                        <label htmlFor="day2">Day2</label>
                        <input id='day2' className='day-selector selector' type="radio" name='day-s-input' />
                        <label htmlFor="day3">Day3</label>
                        <input id='day3' className='day-selector selector' type="radio" name='day-s-input' />
                    </div>
                </div>
                <div className="main-body">
                    <div className="task-cont">
                        <h1>Tasks</h1>
                        <div className="task-item-const">
                            <h3>TaskName</h3>
                            <input type="text" />
                        </div>
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

