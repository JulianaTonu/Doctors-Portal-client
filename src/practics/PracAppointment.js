
import AppoBanner from './AppoBanner';
import AvailableAppoint from './AvailableAppoint';
import React, { useState } from 'react';
const PracAppointment = () => {

    const [selectedDate, setSelectedDate]= useState(new Date())
    return (
        <div>
            <AppoBanner
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            ></AppoBanner>
            <AvailableAppoint
            selectedDate={selectedDate}
            ></AvailableAppoint>
        </div>
    );
};

export default PracAppointment;