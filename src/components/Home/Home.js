import React from 'react';
import Banner from '../Banner/Banner';
import ContForm from '../ContForm/ContForm';
import MyProjects from '../MyProjects/MyProjects';
import Stat from '../Stat/Stat';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Stat></Stat>
            <MyProjects></MyProjects>
            <ContForm></ContForm>
        </div>
    );
};

export default Home;