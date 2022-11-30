import React from 'react';
import Service from './Service';

import whitening from '../../../assets/images/whitening.png'
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
const Services = () => {
    const servicedata=[
        {id:1,
            name: 'Florida Treatment',
            description:'lorem ipsum is simply dummy printing and typesetting',
            icon:cavity,
            
    },
            {id:2,
            name: 'cavity Filling',
            description:'Lorem ipsum is simply dummy printing and indust',
            icon:fluoride,
           
    },
            {id:3,
            name: 'Teeth Whitening',
            description:'Lorem ipsum is simply dummy printing and indust',
            icon:whitening,
            
    },
    ]
    return (
        <div className='mb-32'>
            <div>
                <h1 className='text-3xl text-white uppercase'>Our Services</h1>
                <h1 className='text-2xl '>Services We Provide</h1>
            </div>

<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-8'>
{
                servicedata.map(service=><Service
                key={service.id}
                service={service}
                ></Service>)
            }
</div>
            
        </div>
    );
};

export default Services;