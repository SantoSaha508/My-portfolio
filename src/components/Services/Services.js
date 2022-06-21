import React from 'react';

const Services = () => {
    return (
        <div className='container mt-10'>
            <h2 className='my-14 text-gray-400 font-serif'>Service Provide For My Clients.</h2>

            <div className='grid lg:grid-cols-3 gap-4 sm:grid-cols-1'>

                <div class="card">
                    <div class="card-body bg-gray-700 text-gray-300">
                        <h2 class="card-title">Web Design</h2>
                        <p>1. Responsive Design <br />2. Good Looking UI Design
                        </p>
                    </div>
                </div>

                <div class="card">
                    <div class="card-body bg-gray-700 text-gray-300">
                        <h2 class="card-title">Web Development</h2>
                        <p>
                            1. Dynamic Website <br />2. Admin Panel. <br />
                            3. Backend Integrstion
                        </p>
                    </div>
                </div>

                <div class="card ">
                    <div class="card-body bg-gray-700 text-gray-300">
                        <h2 class="card-title">Backend Development</h2>
                        <p>1. Server connectivity. <br />2. Database connectivity
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Services;