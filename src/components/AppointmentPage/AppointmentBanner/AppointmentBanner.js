// import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png'
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
const AppointmentBanner = ({selectedDate,setSelectedDate}) => {
  // const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <header>
            <div className="hero  ">
  <div className="hero-content flex-col lg:flex-row-reverse mx-auto ">
    <div className='lg:w-1/2 max-w-sm'>
    <img src={chair} alt=''/>
    </div>
    <div className='lg:w-1/2 text-cyan-800 font-bold'>
   <DayPicker
    mode="single"
    selected={selectedDate}
    onSelect={setSelectedDate}
   
   />
   {/* <p>You have selected date :{format(selectedDate, 'PP')}</p> */}
    </div>
  </div>
</div>
        </header>
    );
};

export default AppointmentBanner;