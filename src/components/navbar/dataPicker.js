const DataPicker = () => {
    return (
        <div className="dataPicker">
            <div className="data-selector">
                <div className="data-selector-cont">
                    <input id='team-name-s' className='data-selector selector' type="radio" name='data-s-input' onChange={() => setData('team_name')} defaultChecked />
                    <label htmlFor="team-name-s" className='s-label'>TeamName</label>
                </div>

                <div className="data-selector-cont">
                    <input id='team-leader-s' className='data-selector selector' type="radio" name='data-s-input' />
                    <label htmlFor="team-leader-s" className='s-label'>TeamLeader</label>
                </div>

                <div className="data-selector-cont">
                    <input id='team-mentor-s' className='data-selector selector' type="radio" name='data-s-input' />
                    <label htmlFor="team-mentor-s" className='s-label'>TeamMentor</label>
                </div>

                <div className="data-selector-cont">
                    <input id='team-max-point-s' className='data-selector selector' type="radio" name='data-s-input' />
                    <label htmlFor="team-max-point-s" className='s-label'>TeamMaxPoints</label>
                </div>

            </div>
        </div>
    );
}

export default DataPicker;