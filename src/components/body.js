import TeamCard from '../components/cards/teamCard';
import { useState } from "react";

const Body = (params) => {
    const [teams, setTeams] = useState([]);

    if (teams.length === 0) {
        fetch(params.url)
            .then((res) => res.json())
            .then((data) => {
                setTeams(data);
            });
    }
    return (
        <div>
            <div>{/* body content */}</div>
            <div>{/* tasks */}</div>
            <div className='team-cont'>
                {teams.map((team) => (
                    <TeamCard key={team.team_id} teams={teams} />
                ))}
            </div>
        </div>
    );
}

export default Body;
