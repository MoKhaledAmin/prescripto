import React from 'react';

// Components
import Header from '../components/Header';
import TopDoctors from './../components/TopDoctors';
import SpecialityMenu from '../components/SpecialityMenu';

const Home = () => {
    return (
        <React.Fragment>
            <div>
                <Header />
                <SpecialityMenu />
                <TopDoctors />
            </div>
        </React.Fragment>
    )
}

export default Home;