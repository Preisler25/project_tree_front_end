import Line from "../elements/line";
import TaskItem from "./taskItem";

const TeamCard = ({ team }) => {
    console.log(team);
    return (
        <div className="team-card">
            <div className="team-card-cont">
                <div className="team-card-info">{team.team_name}</div>
                <div className="team-card-rank">{team.rank}</div>
                <Line />
                {team.tasks.map((task) => (
                    <TaskItem key={task.id} task={task} />
                ))}
            </div>
        </div>
    );
}

// <div key={id} className="team-card">
//<div className="team-card-cont">
// <div className="team-card-info">{data}</div>
//  <div className="team-card-rank">{rank}</div>
// <Line />
// <TaskItem task={{ name: "alma", points: 10 }} />
// </div>
// </div >
export default TeamCard;