
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState, useEffect } from 'react';
import AppointOption from '../AppointOption/AppointOption';
import BookingModal from '../BookingModal/BookingModal';


const AvailableAppointment = ({selectedDate}) => {

    // const [appointmentOption,setAppointmentOption] =useState([])
    const [treatment, setTreatment] =useState(null)
    
    const date =format(selectedDate, 'PP')
  

   const {data : appointmentOption = [], refetch, isLoading } =useQuery({
    queryKey:['appointmentOptions',date],
    queryFn:async()=> {
     const res = await fetch(`https://doctors-portal-server-julianatonu.vercel.app/appointmentOptions?date=${date}`)
     const data =await res.json();
     return data
    }


})

// const {data:appointmentOption =[]} =useQuery({
//     queryKey:['appointmentOptions'],
//     queryFn:()=> fetch('https://doctors-portal-server-julianatonu.vercel.app/appointmentOptions')
//     .then(res=>res.json())
// })

    // useEffect(()=>{
    //     fetch('https://doctors-portal-server-julianatonu.vercel.app/appointmentOptions')
    //     .then(res=>res.json())
    //     .then(data =>setAppointmentOption(data))
    // },[])


    if(isLoading){
        return<div>...</div>
    }
    return (
        <div className=''>
            <p className='text-2xl font-bold'>Available Appointment on {format(selectedDate, 'PP')}</p> 

            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 mt-10'>
                {
                    appointmentOption.map(option=><AppointOption
                    key ={option._id}
                        apointmentOption={option}
                        setTreatment={setTreatment}
                    ></AppointOption>)}
            </div>
           { treatment && 
            <BookingModal
            treatment={treatment}
            setTreatment={setTreatment}
            selectedDate={selectedDate}
            refetch ={refetch}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;