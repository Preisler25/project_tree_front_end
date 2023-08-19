import Line from "../elements/line";
import TaskItem from "./taskItem";

const TeamCard = ({ team }) => {
    return (
        <div className="team-card" key={team.team_id}> {/* Move key here */}
            <div className="team-card-cont">
                <div className="team-card-info">{team.team_name}</div>
                <div className="team-card-rank">{team.rank}</div>
                <Line />
                {team.tasks.map((task) => (
                    <TaskItem key={task.task_id} task={task} />
                ))}
            </div>
        </div>
    );
}

export default TeamCard;