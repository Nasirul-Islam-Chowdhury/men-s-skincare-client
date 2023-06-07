import React from 'react';
import Banner from '../../Components/Home/Banner/Banner';
import Quantity from '../../Components/Home/Quantity/Quantity';
import Services from '../../Components/Home/Services/Services';
import HomeGrowingSection from '../../Components/Home/HomeGrowingSection/HomeGrowingSection';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Quantity/>
            <Services/>
            <HomeGrowingSection/>
        </div>
    );
};

export default Home;