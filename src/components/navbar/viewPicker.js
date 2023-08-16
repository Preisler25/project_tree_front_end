const ViewPicker = ({ view, setView }) => {
    return (
        <div className="view-picker">
            <div className="view-picker-cont">
                <input id='by-points' className='view-picker selector' type="radio" name='view-s-input' defaultChecked />
                <label htmlFor="by-points" className='s-label' onClick={() => setView('most_points')}>Points</label>
            </div>
            <div className="view-picker-cont">
                <input id='by-order' className='view-picker selector' type="radio" name='view-s-input' />
                <label htmlFor="by-order" className='s-label' onClick={() => setView('order')}>TeamId</label>
            </div>
        </div>
    );

}
export default ViewPicker;