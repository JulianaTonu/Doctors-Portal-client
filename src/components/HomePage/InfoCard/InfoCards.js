import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import phone from '../../../assets/icons/phone.svg'
import marker from '../../../assets/icons/marker.svg'
import InfoCard from './InfoCard';

const InfoCards = () => {

    const infoData =[
        {id:1,
        name: 'Opening Hours',
        description:'Open 9.00am to 5.00pm everyday',
        icon:clock,
        bgClass:'bg-primary'
},
        {id:2,
        name: 'Our locations',
        description:'Open 9.00am to 5.00pm everyday',
        icon:marker,
        bgClass:'bg-primary'
},
        {id:3,
        name: 'Contact Us',
        description:'Open 9.00am to 5.00pm everyday',
        icon:phone,
        bgClass:'bg-primary'
},
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-3 p-5'>
            {
                infoData.map(card=><InfoCard
                
                key={card.id}
                card={card}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;