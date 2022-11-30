import { format } from 'date-fns/esm';

import { DayPicker } from 'react-day-picker';
import chair from '../assets/images/chair.png'

const AppoBanner = ({selectedDate,setSelectedDate}) => {
    // const [selectedDate, setSelectedDate]= useState(new Date())

    return (
        <div>
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse ">
    <img src={chair} alt='' className='lg:w-1/2' />
    <div>
     <DayPicker
     mode='single'
     selected={selectedDate}
     onSelect={setSelectedDate}
     />
     
    </div>
    
  </div>
</div>    
{/* <p>you have selected :{format(selectedDate,'PPPP')}</p> */}
    </div>
    );
};

export default AppoBanner;