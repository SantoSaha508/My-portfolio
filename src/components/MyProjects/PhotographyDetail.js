import React from 'react';
import pic1 from '../../images/photograp/home.JPG';
import pic2 from '../../images/photograp/login.JPG';
import pic3 from '../../images/photograp/signup.JPG';
import pic4 from '../../images/photograp/blog.JPG';

const PhotographyDetail = () => {
    return (
        <div className='container'>
            <h2 className='text-center my-10'>Project overview</h2>
            <div >
                <div className='grid lg:grid-cols-3 gap-5 my-10'>
                    <div class="card  bg-base-100 shadow-xl">
                        <figure><img src={pic1} alt="Shoes" />
                        </figure>
                    </div>

                    <div class="card  bg-base-100 shadow-xl">
                        <figure><img src={pic2} alt="Shoes" />
                        </figure>
                    </div>

                    <div class="card  bg-base-100 shadow-xl">
                        <figure><img src={pic3} alt="Shoes" />
                        </figure>
                    </div>

                    <div class="card  bg-base-100 shadow-xl">
                        <figure><img src={pic4} alt="Shoes" />
                        </figure>
                    </div>
                </div>
                <div>
                    <p className='text-center'>
                        1. This is e-commerce type web site. <br />
                        2. User can book photographer. <br />
                        3. Responsive login/signup system with firebase authentication. <br />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PhotographyDetail;