import React from 'react';

const InfoCard = ({card}) => {
  const {icon, description,name}=card
    return (
      <div className="card md:card-side lg:card-side text-left  shadow-xl transform -translate-x -translate-y backdrop-blur-sm bg-white/30 relative" >
      <figure><img className='pl-2 pt-2' src={icon} alt="Movie"/></figure>

      <div className="card-body">
        
      <h2 className="card-title">{name}</h2>
      <p className='mr-3'>{description}</p>
      
        
      </div>
    </div>

    );
};

export default InfoCard;