import React from 'react';
import banner1 from '../../images/banner/pic1.png';
import banner2 from '../../images/banner/banner2.jpg';

const Banner = () => {
    return (
        <div style={{
            background: `url(${banner2})`
        }}>
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row-reverse gap-28">
                    <div>
                        <img src={banner1} class="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                    <div>
                        <h3 class="text-3xl">Hello! I'm</h3>
                        <h2 class="text-4xl font-bold">Santo Saha</h2>
                        <p class="py-6 text-gray-500">UI/UX Designer specializing in Shopify & Webflow.</p>

                        <a class="btn btn-warning" href="https://drive.google.com/file/d/1eYamqTuagWu23qEPmDKroXcpxiOKcZTn/view?usp=sharing" target="_blank">Get Resume</a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;