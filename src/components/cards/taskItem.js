const TaskItem = (params) => {

    const task = params.task;
    const socket = params.socket;

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
            //websocket sending back shit
        };
        if (max_points >= new_points) {
            //TODO: send new_points to backend
        };
    };

    console.log(task);

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