import React from 'react';
import expe from '../../images/logo/expe.png';
import client from '../../images/logo/client.png';
import project from '../../images/logo/project.png';

const Stat = () => {
    return (
        <div className='container grid mx-auto my-16'>
            <div class="stats stats-vertical lg:stats-horizontal shadow bg-gray-600 text-gray-300">

                <div class="stat text-center">
                    <img className='w-10 mx-auto' src={expe} alt="" />
                    <div class="stat-value">Experience</div>
                    <div class="stat-desc text-xl">1 year working</div>
                </div>

                <div class="stat text-center">
                    <img className='w-10 mx-auto' src={client} alt="" />
                    <div class="stat-value">Clients</div>
                    <div class="stat-desc text-xl">150+ world wide</div>
                </div>

                <div class="stat text-center">
                    <img className='w-10 mx-auto' src={project} alt="" />
                    <div class="stat-value">Projects</div>
                    <div class="stat-desc text-xl">100+ completed</div>
                </div>

            </div>
        </div>
    );
};

export default Stat;