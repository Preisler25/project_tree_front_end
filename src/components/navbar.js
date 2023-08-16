import DayPicker from './navbar/dayPicker';
import ViewPicker from './navbar/viewPicker';
import DataPicker from './navbar/dataPicker';

const Navbar = (params) => {
    return (
        <div className="navbar">
            <DayPicker day={params.day} setDay={params.setDay} all_days={params.all_days} />
            <ViewPicker view={params.view} setView={params.setView} all_views={params.all_views} />
            <DataPicker data={params.data} setData={params.setData} all_data={params.all_data} />
        </div>
    );
}

export default Navbar;

