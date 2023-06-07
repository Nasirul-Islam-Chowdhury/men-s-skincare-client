import React from 'react';
import Banner from '../Banner/Banner';
import Quantity from '../Quantity/Quantity';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Quantity/>
            <Services/>
        </div>
    );
};

export default Home;