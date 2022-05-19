import chair from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({ date, setDate }) => {
    return (
        <div style={{ backgroundImage: `url(${bg})` }} class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} class="max-w-sm rounded-lg shadow-2xl" alt='Dentist Chair' />
                <div> <DayPicker
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                ></DayPicker></div>
            </div>
        </div>
    );
};

export default AppointmentBanner;