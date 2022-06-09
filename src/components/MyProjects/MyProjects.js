import React from 'react';

const MyProjects = () => {
    return (
        <div className='my-5 container'>
            <h3 className='text-gray-500'>My Projects</h3>

            <div className='grid sm:grid-cols-1 gap-3 lg:grid-cols-3 lg:gap-5  md:grid-cols-2  text-black justify-center'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">Colors paints LTD.</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <a className='btn' href="#" target="_blank">Visit The Site</a>
                    </div>
                    <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" />
                    </figure>

                </div>

                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">Warehouse management</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <a className='btn' href="#" target="_blank">Visit The Site</a>
                    </div>
                    <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                </div>

                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">Lucky mouse</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <a className='btn' href="https://mouse-bd-bd1e2fcom.netlify.app/" target="_blank">Visit The Site</a>
                    </div>
                    <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                </div>
            </div>

        </div>
    );
};

export default MyProjects;