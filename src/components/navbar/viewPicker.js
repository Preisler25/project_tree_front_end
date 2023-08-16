import PickerItem from './pickerItem';

const ViewPicker = ({ view, setView, all_views }) => {
    return (
        <div className="view-selector">
            {all_views.map((item) => {
                return (
                    <PickerItem key={item} item={item} active={view} onPress={setView} type='view' />
                );
            })}
        </div>
    );

}
export default ViewPicker;