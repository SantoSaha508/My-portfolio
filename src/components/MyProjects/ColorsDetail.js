import React from 'react';
import pic1 from '../../images/colors/home.JPG';
import pic2 from '../../images/colors/login.JPG';
import pic3 from '../../images/colors/portfolio.JPG';
import pic4 from '../../images/colors/footer.JPG';

const ColorsDetail = () => {
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
                        1. Different kinds of painting brush. <br />
                        2. Login & signup system with firebase authentication. <br />
                        3. Admin can add products, and manage users. <br />
                        4. Online payment system. <br />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ColorsDetail;