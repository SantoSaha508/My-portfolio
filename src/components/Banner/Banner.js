import React from 'react';
import banner1 from '../../images/banner/pic1.png';
import banner2 from '../../images/new bg/bg.jpg';
import facebook from '../../images/logo/face.png';
import github from '../../images/logo/github.png';
import linkedIn from '../../images/logo/linkedin.png';
import './Ligo.css';

const Banner = () => {
    return (
        <div style={{
            background: `url(${banner2})`
        }}>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse gap-28">
                    <div>
                        <img src={banner1} className="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                    <div>
                        <h3 className="text-3xl">Hello! I'm</h3>
                        <h2 className="text-4xl font-bold">Santo Saha</h2>
                        <p className="py-6 text-gray-500">UI/UX Designer specializing in Shopify & Webflow.</p>

                        <div className='flex gap-5 my-5'>
                            <div className='facebook'>
                                <a href="https://www.facebook.com/splash.shanto/" target="_blank"><img className='facImg w-10 bg-white rounded p-1' src={facebook} alt="" /></a>
                            </div>
                            <div>
                                <a href="https://github.com/SantoSaha508" target="_blank"><img className='gitImg w-10 bg-white rounded p-1' src={github} alt="" /></a>
                            </div>
                            <div>
                                <a href="https://www.linkedin.com/in/santo-saha-7374a9201/" target="_blank"><img className='lidImg w-10 bg-white rounded p-1' src={linkedIn} alt="" /></a>
                            </div>
                        </div>

                        <a className="btn btn-warning" href="https://drive.google.com/file/d/1eYamqTuagWu23qEPmDKroXcpxiOKcZTn/view?usp=sharing" target="_blank">Get Resume</a>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;