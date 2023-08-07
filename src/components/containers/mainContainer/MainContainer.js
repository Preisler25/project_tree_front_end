import { useState } from 'react';
import './MainContainer.css'
import TaskContainer from '../taskContainer/TaskContainer';

const MainContainer = () => {
    const [is_loading, setIsLoading] = useState(true);
    const [teams, setTeams] = useState(null);



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

