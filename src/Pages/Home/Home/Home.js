import React from 'react';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import Inventory from '../Inventory/Inventory';
import Reviews from '../Reviews/Reviews';

import Sponsors from '../Sponsors/Sponsors';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventory></Inventory>
            <Sponsors></Sponsors>
            <Reviews></Reviews>
            <Features></Features>
        </div>
    );
};

export default Home;