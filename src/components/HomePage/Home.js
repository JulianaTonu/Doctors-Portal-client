import React from 'react';
import Banner from './Banner/Banner';

import InfoCards from './InfoCard/InfoCards';
import MakeAppointment from './MakeAppoinment/MakeAppointment';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;