import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AuthContext } from './../../../context/AuthProvider';
import { toast } from 'react-hot-toast';

const BookingModal = ({treatment,selectedDate,setTreatment,refetch}) => {
    const {user}=useContext(AuthContext)
    const {name,slots,price}= treatment;
    const date = format(selectedDate, 'PP');

const handleBooking =event=>{
    event.preventDefault();
    const form =event.target;
   
    const slot =form.slot.value
    const p_name=user?.displayName
    const email=user?.email
    const phone=form.phone.value
    // console.log(date,slot, name,email,phone)

    const booking ={
        appointmentDate:date,
        treatment:name,
        patient:p_name,
        slot,
        email,
        phone,
        price:price,
    }
    fetch('https://doctors-portal-server-julianatonu.vercel.app/bookings',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(booking)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)

        if(data.acknowledged){
            setTreatment(null)
            toast.success('Booking Confirm')
            refetch();
        }
        else{
            toast.error(data.message)
        }
    
    })
}

    return (
        <>

<input type="checkbox" id="my-modal-4" className="modal-toggle" />
<label htmlFor="my-modal-4" className="modal cursor-pointer">
  <label className="modal-box relative" htmlFor="">
    <h3 className="text-lg font-bold">{name}</h3>
    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mx-auto mt-6'>
    <input type="text" value={date} className="input input-bordered input-primary w-full" />

<select name='slot' className="select select-bordered input-primary w-full ">
   {
    slots.map(slot=><option
    value={slot}
    >{slot}</option>)
   }
</select>

    <input name ='name' defaultValue={user?.displayName} type="text" placeholder="your name" className="input input-bordered input-primary w-full " />
    <input name ='email' defaultValue={user?.email} type="text" placeholder="email" className="input input-bordered input-primary w-full " />
    <input name ='phone' type="number" placeholder="phone" className="input input-bordered input-primary w-full " />
   
    <input  type="submit" value= 'Submit' className="btn btn-info w-full text-center " />
    </form>
  </label>
</label>
            
        </>
    );
};

export default BookingModal;