import React from 'react';
import colors from '../../images/projectImg/colors.JPG';
import warehouse from '../../images/projectImg/warehouse.JPG';
import photography from '../../images/projectImg/photgraphy.JPG';
import { Link } from 'react-router-dom';

const MyProjects = () => {
    return (
        <div className='my-20 container'>
            <h3 className='text-gray-500 mb-5 font-serif text-3xl text-right mr-10'>My Projects</h3>


            <div className='grid sm:grid-cols-1 gap-3 lg:grid-cols-3 lg:gap-5  md:grid-cols-2  text-black justify-center'>
                <div className="card w-96  shadow-xl">
                    <div className="card-body bg-gray-800">
                        <h2 className="card-title text-gray-200 font-bold">Colors paints LTD.</h2>
                        <p className='text-gray-300'>1. Different kinds of painting brush. <br />
                            2. Login & signup system with firebase authentication. <br />
                            3. Admin can add products, and manage users. <br />
                            4. Online payment system.</p>
                        <a className='btn text-white border' href="https://colors-paint.web.app/" target="_blank"><span className='font-bold text-gray-500'>Visit The Site</span></a>
                    </div>
                    <figure><img src={colors} alt="Shoes" />
                    </figure>
                    <div className='bg-gray-500'>
                        <Link className='btn  w-full ' to="/colorDetail"><span className='font-bold'>See Details</span></Link>
                    </div>

                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body bg-gray-800 text-white">
                        <h2 className="card-title font-bold text-gray-200">Warehouse management</h2>
                        <p className='text-gray-300'>1. In this project users can order clothing products for wholesale. <br />
                            2. Admin can update his/her warehouse status. <br />
                            3. Login & signup system with firebase authentication.</p>
                        <a className='btn text-white border' href="https://dress-warehouse-assgn11.web.app/" target="_blank"><span className='font-bold text-gray-500'>Visit The Site</span></a>
                    </div>
                    <figure><img src={warehouse} alt="Shoes" /></figure>
                    <div className='bg-gray-500'>
                        <Link className='btn  w-full ' to="/warehouseDetail"><span className='font-bold'>See Details</span></Link>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body bg-gray-800 text-white">
                        <h2 className="card-title font-bold text-gray-200">Photographer booking</h2>
                        <p className='text-gray-300'>1. This is e-commerce type web site. <br />
                            2. User can book photographer. <br />
                            3. Responsive login/signup system with firebase authentication.
                        </p>
                        <a className='btn text-white border' href="https://photography-assgn10.web.app/" target="_blank"><span className='font-bold text-gray-500'>Visit The Site</span></a>
                    </div>
                    <figure><img src={photography} alt="Shoes" /></figure>
                    <div className='bg-gray-500'>
                        <Link className='btn  w-full ' to="/photography"><span className='font-bold'>See Details</span></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyProjects;