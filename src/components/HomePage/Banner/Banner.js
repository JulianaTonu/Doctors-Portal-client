import React from 'react';
import chair from '../../../assets/images/chair.png'
const Banner = () => {
    return (
        <div className="hero  w-76  ">
  <div className="hero-content flex-col lg:flex-row-reverse mt-20">

    <div className='w-4/5 mx-5'>
    <img src={chair} className= "mim-w-sm rounded-lg shadow-xl" alt='' />
    </div>
   
    <div className='w-3/4'>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn bg-gradient-to-r from-sky-400 to-blue-500 shadow-xl">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;