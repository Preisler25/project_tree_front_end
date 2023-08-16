import PickerItem from './pickerItem';

const DayPicker = ({ day, setDay, all_days }) => {
    return (
        <div className="day-selector">
            {all_days.map((item) => {
                return (
                    <PickerItem key={item} item={item} active={day} onPress={setDay} type='day' />
                );
            })}
        </div>
    );
}

export default DayPicker;
