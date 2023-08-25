class Team {
    constructor(id, data, tasks_for_day, rank) {
        this.team_id = id; //int
        this.data = data; // Sting
        this.tasks_for_day = tasks_for_day; //array of Task
        this.rank = rank; //int
    }
}

export default Team;