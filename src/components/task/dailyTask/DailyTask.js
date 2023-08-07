import { useState } from "react";

const DailyTask = (item) => {

    const name = item.name;
    const max_points = parseInt(item.max_points);
    const [points, setPoints] = useState(ParseInt(item.points));

    const handleChange = (event) => {
        let new_points = parseInt(event.target.value);
        if (max_points >= new_points) {
            setPoints(new_points);
            //TODO: send new_points to backend
        };
    };

    return (
        <div>
            <div className="task">
                <div className="task_name">
                    <h3>{name}</h3>
                </div>
                <input type="text" className="task_points" value={points} onChange={handleChange} />
            </div>
        </div>
    );

};