import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import call from '../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard bgClass="bg-gradient-to-r from-secondary to-primary" cardDescription="Lorem Ipsum is simply dummy text of the pri" cardTitle="Opening Hours" img={clock}></InfoCard>
            <InfoCard bgClass="bg-accent" cardDescription="Brooklyn, NY 10036, United States" cardTitle="Our location" img={marker}></InfoCard>
            <InfoCard bgClass="bg-gradient-to-r from-secondary to-primary" cardDescription="+000 123 456789" cardTitle="Contact Us" img={call}></InfoCard>
        </div>
    );
};

export default Info;