import { useEffect, useState } from 'react';
import './MainContainer.css'
import TaskContainer from '../taskContainer/TaskContainer';

const MainContainer = () => {
    const [is_loading, setIsLoading] = useState(true);
    const [teams, setTeams] = useState(null);

    useEffect(() => {
        const fetchTeams = async () => {
            setIsLoading(true);
            //it would be better to restart! :D

            //const response = await fetch(`http://localhost:3000/api/teams/${team_id}/${day}`);
            //list = await response.json();
            const data = [
                { id: 0, name: 'TeamAlma', day: 0 },
                { id: 1, name: 'TeamKorte', day: 1 },
                { id: 2, name: 'TeamBarack', day: 2 }
            ];
            setTimeout(() => {
                setTeams(data); // Update state with fetched data
                setIsLoading(false);
            }, 1000);
        };
        fetchTeams();
    }, []);

    if (is_loading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }
    return (
        <div className="main-cont">
            <div className="main-cont-color-effect">
                <div className="navbar">
                    <div className="data-selector">
                        <div className="data-selector-cont">
                            <input id='team-name-s' className='data-selector selector' type="radio" name='data-s-input' defaultChecked />
                            <label htmlFor="team-name-s" className='s-label'>TeamName</label>
                        </div>

                        <div className="data-selector-cont">
                            <input id='team-leader-s' className='data-selector selector' type="radio" name='data-s-input' />
                            <label htmlFor="team-leader-s" className='s-label'>TeamLeader</label>
                        </div>

                        <div className="data-selector-cont">
                            <input id='team-mentor-s' className='data-selector selector' type="radio" name='data-s-input' />
                            <label htmlFor="team-mentor-s" className='s-label'>TeamMentor</label>
                        </div>

                        <div className="data-selector-cont">
                            <input id='team-max-point-s' className='data-selector selector' type="radio" name='data-s-input' />
                            <label htmlFor="team-max-point-s" className='s-label'>TeamMaxPoints</label>
                        </div>

                    </div>
                    <div className="day-selector">

                        <div className="day-selector-cont">
                            <input id='day1' className='day-selector selector' type="radio" name='day-s-input' defaultChecked />
                            <label htmlFor="day1" className='s-label'>Day1</label>
                        </div>

                        <div className="day-selector-cont">
                            <input id='day2' className='day-selector selector' type="radio" name='day-s-input' />
                            <label htmlFor="day2" className='s-label'>Day2</label>
                        </div>

                        <div className="day-selector-cont">
                            <input id='day3' className='day-selector selector' type="radio" name='day-s-input' />
                            <label htmlFor="day3" className='s-label'>Day3</label>
                        </div>

                    </div>
                </div>
                <div className="main-body">
                    <div className="task-cont">
                        <h1 className='cont-header-title'>Tasks</h1>
                        <div className="task-item-const">
                            <h3>TaskName</h3>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="teams-cont">
                        <div className="team-cont">
                            <h1 className='cont-header-title'>Team1</h1>
                            <TaskContainer team_id={0} day={0} />
                        </div>
                        <div className="team-cont">
                            <h1 className='cont-header-title'>Team2</h1>
                            <TaskContainer team_id={1} day={1} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainContainer;

