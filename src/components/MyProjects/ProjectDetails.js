import React from 'react';
import pic1 from '../../images/house/house.JPG';
import pic2 from '../../images/house/footer.JPG';
import pic3 from '../../images/house/login.JPG';
import pic4 from '../../images/house/signup.JPG';

const ProjectDetails = () => {
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
                        1. In this project users can order clothing products for wholesale. <br />
                        2. Admin can update his/her warehouse status. <br />
                        3. Login & signup system with firebase authentication. <br />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;