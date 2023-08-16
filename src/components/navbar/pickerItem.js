const PickerItem = ({ item, active, onPress, type }) => {

    const class_cont = type + '-selector-cont';
    const class_item = type + '-selector selector';
    const name_item = type + '-s-input';

    if (item === active) {
        return (
            <div className={class_cont}>
                <input id={item} className={class_item} type="radio" name={name_item} onChange={() => onPress(item)} defaultChecked />
                < label htmlFor={item} className='s-label' > {item}</label >
            </div >
        );
    }
    return (
        <div className={class_cont}>
            <input id={item} className={class_item} type="radio" name={name_item} onChange={() => onPress(item)} />
            < label htmlFor={item} className='s-label' > {item}</label >
        </div >
    );
}

export default PickerItem;