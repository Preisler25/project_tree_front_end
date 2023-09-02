import Line from "../elements/line";
import TaskItem from "./taskItem";

const TeamCard = (params) => {
    const team = params.team;
    return (
        <div className="team-card"> {/* Move key here */}
            <div className="team-card-cont">
                <div className="team-card-info">{team.data}</div>
                <div className="team-card-rank">{team.rank}</div>
                <Line />
                {team.tasks_for_day.map((task) => (
                    <TaskItem key={task.id} task={task} socket={params.socket}/>
                ))}
            </div>
        </div>
    );
}
export default TeamCard;