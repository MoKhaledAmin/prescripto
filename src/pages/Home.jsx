import React from 'react';

// Components
import Header from '../components/Header';
import Banner from '../components/Banner';
import TopDoctors from './../components/TopDoctors';
import SpecialityMenu from '../components/SpecialityMenu';

const Home = () => {
    return (
        <React.Fragment>
            <div>
                <Header />
                <SpecialityMenu />
                <TopDoctors />
                <Banner />
            </div>
        </React.Fragment>
    )
}

export default Home;