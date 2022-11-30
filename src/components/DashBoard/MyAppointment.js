import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { Link } from 'react-router-dom';

const MyAppointment = () => {
    const {user}=useContext(AuthContext)
    const url=`https://doctors-portal-server-julianatonu.vercel.app/bookings?email=${user?.email}`

    const {data: bookings = [], isLoading } = useQuery({
        queryKey:['bookings', user?.email],
        queryFn: async ()=>{
            const res = await fetch(url );
            const data =await res.json()
            return data ;
        }
    })

    if(isLoading){
      return<div>Loading....</div>
    }
    return (
        <div>
            <h2 className="text-2xl font-bold text-primary mt-32">My Appointment</h2>

            <div className="overflow-x-auto lg:ml-8 sm:mx-auto">
  <table className=" mt-10  w-full transform -translate-x -translate-y backdrop-blur-xl bg-white/40 shadow-xl py-10 rounded-lg">
   
    <thead>
      <tr>
        <th className='p-5'></th>
        <th className='p-5'>Name</th>
        <th className='p-5'>Treatment</th>
        <th className='p-5'>Date</th>
        <th className='p-5'>Time</th>
        <th className='p-5'>Action</th>
      </tr>
    </thead>
    <tbody>
      
      { bookings  &&
      bookings?.map((booking, i) =><tr key={booking._id} >
        <th className='p-5'>{i+1}</th>
        <td className='p-5'>{booking.patient}</td>
        <td className='p-5'>{booking.treatment}</td>
        <td className='p-5'>{booking.appointmentDate}</td>
        <td className='p-5'>{booking.slot}</td>
        <td>

          {
            booking?.price && !booking?.paid && <Link to={`/dashboard/payment/${booking._id}`}><button className='btn btn-primary'>Pay</button></Link>
          }
          
          {
            booking?.price && booking?.paid  && <span className='text-green-600'>Paid</span>
          }
        </td>
      </tr>)}
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyAppointment;