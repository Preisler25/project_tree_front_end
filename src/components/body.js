import TeamCard from '../components/cards/teamCard';
import Team from '../props/Team';
import { useEffect, useState } from "react";

const Body = (params) => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {

        try {
            fetch(params.url)
            .then((res) => res.json())
            .catch((error) => console.log(error) )
            .then((data) => {
                data = data.map((team) => {
                    return new Team(team.id, team.data, team.tasks_for_day, team.rank);
                });
                setTeams(data);
            })
            .catch((error) => console.log(error) );
        } catch (error) {
            console.log(error);
        }
        
    }, [params.url]);
 
    return (
        <div>
            <div>{/* body content */}</div>
            <div>{/* tasks */}</div>
            <div className='team-cont'>
                {teams.map((team) => (
                    <TeamCard key={team.id} team={team} />
                ))}
            </div>
        </div>
    );
}

export default Body;
