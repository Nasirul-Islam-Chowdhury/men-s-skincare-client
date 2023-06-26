import React from 'react';
import Banner from '../../Components/Home/Banner/Banner';
import Accordian from '../../Components/Accordian/Accordian';
import Quantity from '../../Components/Home/Quantity/Quantity';
import Services from '../../Components/Home/Services/Services';
import HomeGrowingSection from '../../Components/Home/HomeGrowingSection/HomeGrowingSection';
import { useTitle } from '../../Shared/Title/useTitle';

const Home = () => {
    useTitle("Home")
    return (
        <div>
            <Banner/>
            <Quantity/>
            <Services/>
            <HomeGrowingSection/>
            <Accordian/>
        </div>
    );
};

export default Home;