import React from 'react';

const AppointOption = ({apointmentOption, setTreatment}) => {
  const {name,slots,price} = apointmentOption
    return (
        <div className="card  shadow-xl transform -translate-x -translate-y backdrop-blur-xl bg-white/30 ">
  <div className="card-body">
    <h2 className="text-2xl text-center">{name}</h2>
    <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
<p>{slots.length} {slots.length > 1 ? 'spaces' : 'spaces' } availabe</p>
<p><small>Price: ${price}</small></p>
    <div className="card-actions justify-center">
 
      <label 
      disabled={slots.length === 0}
      htmlFor="my-modal-4" 
      className=" btn btn-info shadow-xl"
      onClick={()=>setTreatment(apointmentOption)}
      >Book Appointment</label>
    </div>
  </div>
</div>
    );
};

export default AppointOption;