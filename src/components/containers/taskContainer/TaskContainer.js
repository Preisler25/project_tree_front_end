import DailyTask from '../../task/dailyTask/DailyTask'

const taskContainer = (list) => {
    return (
        <div>
            {list.map((item) => {
                return (
                    DailyTask(item)
                );
            })}
        </div>
    );
}