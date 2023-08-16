const PickerItem = ({ item, onPress }) => {
    return (
        <div className="data-selector-cont">
            <input id={item} className='data-selector selector' type="radio" name='data-s-input' onChange={() => onPress(item)} defaultChecked />
            <label htmlFor={item} className='s-label'>{item}</label>
        </div>
    );
}