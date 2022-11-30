import React from 'react';
import Review from './Review';
import person1 from '../../../assets/images/people1.png'
import person2 from '../../../assets/images/people2.png'
import person3 from '../../../assets/images/people3.png'

const Testimonial = () => {

    const reviews =[
       
        {
            _id:1,
            name:'Winson Harry',
            message:"It is a long established fact that by the readable content",
            location:"california",
            img:person1,
        },
        {
            _id:2,
            name:'Winson Harry',
            message:"It is a long established fact that by the readable content",
            location:"california",
            img:person3,
        },
        {
            _id:3,
            name:'Winson Harry',
            message:"It is a long established fact that by the readable content",
            location:"california",
            img:person2,
        },
    ]
    return (
        <div className='mt-10'>
    <div className='text-start'>
    <h4 className='text-lg font-bold '>Testimonial</h4>
    <h1 className="text-3xl font-bold pb-10">What Our Patients Says</h1>
    </div>
            <div className='grid gap-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
            {
                reviews.map(review=><Review
                key={review.key}
                review={review}
                ></Review>)
            }
        </div>
        </div>
    );
};

export default Testimonial;