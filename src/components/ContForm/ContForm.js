import React from 'react';

const ContForm = () => {
    return (
        <div className='container grid justify-center items-center my-16'>
            
            <div>
                <hr /><hr />
                <h3 className='text-gray-300'>Get a Free  Prototype of Your Future Website!
                </h3>
                <p className='text-gray-500'>
                    Send your requirements for a website, we will research your specification, create a prototype of the website for free and sed a result to you!
                </p>
            </div>
            <form>
                <input type="text" placeholder="Name" class=" bg-dark border input input-bordered input-sm w-full max-w-xs my-2" /><br />

                <input type="email" placeholder="Email" class="bg-dark border input input-bordered input-sm w-full max-w-xs" /><br />

                <input type="text" placeholder="Comment" class="bg-dark border input input-bordered input-sm w-full max-w-xs my-2" /><br />

                <input className='btn text-white border' type="submit" value="Contact" />
            </form>
        </div>
    );
};

export default ContForm;