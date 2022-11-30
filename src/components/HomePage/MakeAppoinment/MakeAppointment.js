import React from 'react';
import doctor from '../../../assets/images/doctor.png'
const MakeAppointment = () => {
    return (
  <section>

<div className="hero  transform -translate-x -translate-y backdrop-blur-sm bg-white/30 bg-fixed">
  <div className="hero-content flex-col lg:flex-row mx-10">
    <img src={doctor} className="lg:w-1/2  -mt-32 " alt=''/>
    <div className='lg:text-left'>
    <h4 className='text-lg font-bold'>Appointment</h4>
      <h1 className="text-5xl font-bold">Make an appointment Today</h1>
      <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
      <button className=" btn bg-gradient-to-r from-sky-400 to-blue-500 shadow-xl">Apppointment</button>
    </div>
  </div>
</div> 
  </section>
    );
};

export default MakeAppointment;