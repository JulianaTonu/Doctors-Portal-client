import React from 'react';

const Review = ({review}) => {
    const {name,message,location,img}=review
    return (
        <div className="card  shadow-xl  transform -translate-x -translate-y backdrop-blur-sm bg-white/30">
  <div className="card-body text-start">
    <p>{message}</p>
    
    <div className="card-actions justify-start">  
     <div className='w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
        <img src={img} alt="" />
     </div>

     <div className='pl-2'>
     <p className='text-lg font-bold'>{name}</p>
     <p>{location}</p>
     </div>
    </div>
  </div>
</div>
    );
};

export default Review;