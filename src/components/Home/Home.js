import React from 'react';
import Animation from '../../shared/Animation/Animation';
import Banner from '../Banner/Banner';
import ContForm from '../ContForm/ContForm';
import Experience from '../Experience/Experience';
import MyProjects from '../MyProjects/MyProjects';
import Services from '../Services/Services';
import Stat from '../Stat/Stat';
import Swiperslid from '../SwiperSlid/Swiperslid';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Stat></Stat>
            <Experience></Experience>
            <Services></Services>
            <Animation></Animation>
            <MyProjects></MyProjects>
            <Swiperslid></Swiperslid>
            <ContForm></ContForm>
        </div>
    );
};

export default Home;