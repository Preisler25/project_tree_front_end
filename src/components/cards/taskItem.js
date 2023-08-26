const TaskItem = (params) => {

    const task = params.task;
    const socket = params.socket;

    console.log(task);

    const id = task.id;
    const day_id = task.day_id;
    const team_id = task.team_id;
    const name = task.name;
    const is_done = task.is_done;
    const max_points = task.max_points;
    const points = task.points;

    const classNameConverter = (val) => {
        return val ? 'task-done' : 'task-is-in-progress';
    };

    const handleChange = (event) => {
        let new_points = parseInt(event.target.value);
        if (event.target.value === '') {
            socket.send('/app/points', {}, JSON.stringify({
                "id": id,
                "day_id": day_id,
                "team_id": team_id,
                "name": name,
                "is_done": false,
                "max_points": max_points,
                "points": 0
            }));
        };
        if (max_points >= new_points) {
            console.log("sending message:" + new_points);
            socket.send('/app/points', {}, JSON.stringify({
                "id": id,
                "day_id": day_id,
                "team_id": team_id,
                "name": name,
                "is_done": true,
                "max_points": max_points,
                "points": new_points
            }));
        };
    };
    console.log(points);

    return (
        <div key={id} className="task">
            <div className="task_name">
                <h3 className={classNameConverter(is_done)} >{name}</h3>
            </div>
            <input type="text" className="task_points" value={points} onChange={handleChange} />
        </div>
    );

};

export default TaskItem;