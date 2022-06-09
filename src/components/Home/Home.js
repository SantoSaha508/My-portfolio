import React from 'react';
import Banner from '../Banner/Banner';
import ContForm from '../ContForm/ContForm';
import MyProjects from '../MyProjects/MyProjects';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MyProjects></MyProjects>
            <ContForm></ContForm>
        </div>
    );
};

export default Home;