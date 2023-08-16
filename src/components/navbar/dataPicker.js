import PickerItem from './pickerItem';

const DataPicker = ({ data, setData, all_data }) => {
    return (
        <div className="data-selector">
            {all_data.map((item) => {
                return (
                    <PickerItem key={item} item={item} active={data} onPress={setData} type='data' />
                );
            })}
        </div>
    );
}

export default DataPicker;