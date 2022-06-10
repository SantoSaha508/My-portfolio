import React from 'react';
import bg from '../../images/new bg/bg.jpg';

const Experience = () => {
    return (
        <div className=' text-center'>
            <h2 className="text-gray-400 py-5 font-serif">Experience</h2>

            <div className="rounded hero  text-left">
                <div className="hero-content flex-col lg:flex-row">
                    <div style={{height: 300}} className='bg-gray-600 p-4 rounded-xl text-gray-300'>
                        <h3 className='text-gray-900 font-bold text-center'>Frontend</h3>
                        <div className='grid grid-cols-2 gap-6'>
                            <div>
                                <p>★ HTML</p>
                            </div>
                            <div>
                                <p>★ CSS</p>
                            </div>
                            <div>
                                <p>★ JavaScript</p>
                            </div>
                            <div>
                                <p>★ React JS</p>
                            </div>
                            <div>
                                <p>★ Bootstarp</p>
                            </div>
                            <div>
                                <p>★ TailwindCSS</p>
                            </div>
                        </div>
                    </div>
                    
                    <div style={{height: 300}} className='bg-gray-600 p-4 rounded-xl text-gray-300'>
                        <h3 className='text-gray-900 font-bold text-center'>Backend</h3>
                        <div className='grid grid-cols-2 gap-6'>
                            <div>
                                <p>★ MongoDB</p>
                            </div>
                            <div>
                                <p>★ Node JS</p>
                            </div>
                            <div>
                                <p>★ Express JS</p>
                            </div>
                            <div>
                                <p>★ React MySql</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-20'>
                <img style={{height: 300}} className="w-full"  src={bg} alt="" />
            </div>
        </div>
    );
};

export default Experience;