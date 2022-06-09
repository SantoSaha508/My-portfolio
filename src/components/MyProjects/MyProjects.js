import React from 'react';

const MyProjects = () => {
    return (
        <div className='my-5 container'>
            <h3 className='text-gray-500'>My Projects</h3>

            <div className='grid sm:grid-cols-1 gap-3 lg:grid-cols-3 lg:gap-5  md:grid-cols-2  text-black justify-center'>
                <div className="card w-96  shadow-xl">
                    <div class="card-body bg-gray-800 text-white">
                        <h2 class="card-title">Colors paints LTD.</h2>
                        <p>1. Different kinds of painting brush. <br />
                        2. Login & signup system with firebase authentication. <br />
                        3. Admin can add products, and manage users. <br />
                        4. Online payment system.</p>
                        <a className='btn text-white border' href="https://colors-paint.web.app/" target="_blank">Visit The Site</a>
                    </div>
                    <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" />
                    </figure>

                </div>

                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body bg-gray-800 text-white">
                        <h2 class="card-title">Warehouse management</h2>
                        <p>1. In this project users can order clothing products for wholesale. <br />
                        2. Admin can update his/her warehouse status. <br />
                        3. Login & signup system with firebase authentication.</p>
                        <a className='btn text-white border' href="https://dress-warehouse-assgn11.web.app/" target="_blank">Visit The Site</a>
                    </div>
                    <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                </div>

                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body bg-gray-800 text-white">
                        <h2 class="card-title">Photographer booking</h2>
                        <p>1. This is e-commerce type web site. <br />
                        2. User can book photographer. <br />
                        3. Responsive login/signup system with firebase authentication.
                        </p>
                        <a className='btn text-white border' href="https://photography-assgn10.web.app/" target="_blank">Visit The Site</a>
                    </div>
                    <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                </div>
            </div>

        </div>
    );
};

export default MyProjects;