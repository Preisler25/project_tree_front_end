import TeamCard from '../components/cards/teamCard';

const Body = (params) => {
    return (
        <div>
            <div>{/* body content */}</div>
            <div>{/* tasks */}</div>
            <div className='team-cont'>
                {params.url}
                {/*params.teams.map((team) => (
                    <TeamCard key={team.team_id} team={team} teamHandler={params.setTeams} />
                ))*/}
            </div>
        </div>
    );
}

export default Body;
