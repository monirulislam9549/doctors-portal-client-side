import React from 'react';
import Services from '../Shared/Services';
import Treatment from '../Shared/Treatment';
import Banner from './Banner';
import Info from './Info';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Treatment></Treatment>
        </div>
    );
};

export default Home;