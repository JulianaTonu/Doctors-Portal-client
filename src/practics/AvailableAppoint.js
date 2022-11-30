import React from 'react';
import { format } from 'date-fns';

const AvailableAppoint = ({selectedDate}) => {
    return (
        <div>
            <p>you have selected :{format(selectedDate,'PPPP')}</p>
    
        </div>
    );
};

export default AvailableAppoint;