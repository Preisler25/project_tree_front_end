import TeamCard from '../components/cards/teamCard';

const Body = (params) => {

    return (
        <div>//body content
            <div></div> //tasks
            <div>//teams
                {params.teams.map((team) => (
                    <TeamCard key={team.team_id} team={team} pointHandler={params.setTeams} />
                ))}
            </div>
        </div>
    );
}

export default Body