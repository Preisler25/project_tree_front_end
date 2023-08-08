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
                { id: 0, name: 'TeamAlma', day: 0 },
                { id: 1, name: 'TeamKorte', day: 1 },
                { id: 2, name: 'TeamBarack', day: 2}
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

