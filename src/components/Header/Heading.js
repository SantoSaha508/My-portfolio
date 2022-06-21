import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Heading = () => {

    const manuItems = <>
        <li className=' bg-gray-600 rounded text-gray-300 font-bold mx-3 my-2'><Link className='items' to="/" >Home</Link></li>
        <li className='bg-gray-600 rounded text-gray-300 font-bold mx-3 my-2'><Link className='items' to="/service" >SERVICES</Link></li>
        <li className='bg-gray-600 rounded text-gray-300 font-bold mx-3 my-2'><Link className='items' to="/blogs">BLOGS</Link></li>
        <li className='bg-gray-600 rounded text-gray-300 font-bold mx-3 my-2'><Link className='items' to="/about">ABOUT</Link></li>

    </>

    return (
        <div class="navbar bg-gray-900 text-gray-300 sticky top-0 z-50">
            <div class="navbar-start">
                <div class="dropdown lg:hidden bg-orange-400">
                    <label tabindex="0" class="btn btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {manuItems}
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl"><p class="text-gray-400 text-2xl font-serif font-bold">PORTFOLIO</p></a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0 ">
                    {manuItems}
                </ul>
            </div>
        </div>
    );
};

export default Heading;