import { useEffect, useState } from 'react';
import './MainContainer.css'
import TaskContainer from '../taskContainer/TaskContainer';

const MainContainer = () => {
    const [is_loading, setIsLoading] = useState(true);
    const [teams, setTeams] = useState(null);

    useEffect(() => {
        const fetchTeams = async () => {
            setIsLoading(true);
            //const response = await fetch(`http://localhost:3000/api/teams/${team_id}/${day}`);
            //list = await response.json();
            const data = [

            ];
            setTimeout(() => {
                setTeams(data); // Update state with fetched data
                setIsLoading(false);
            }, 1000);
        };
    }, [teams]);

    return (
        <div className="main-cont">
            <div className="main-cont-effect">
                {
                    TaskContainer()
                }
            </div>
        </div>
    );
}

export default MainContainer;

