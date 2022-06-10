import React, { useRef } from 'react';
import emailjs from "emailjs-com";

const ContForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_n4jtw9p', 'template_ll56lir', form.current, 'jvtCPLU0xqw7uLrF8')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
    }

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
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="name" placeholder="Name" className=" bg-dark border input input-bordered input-sm w-full max-w-xs my-2" /><br />

                <input type="email" name="email" placeholder="Email" className="bg-dark border input input-bordered input-sm w-full max-w-xs" /><br />

                <input type="text" name="subject" placeholder="Subject" className="bg-dark border input input-bordered input-sm w-full max-w-xs" /><br />

                <input type="text" name="message" placeholder="Comment" className="bg-dark border input input-bordered input-sm w-full max-w-xs my-2" /><br />

                <input className='btn text-white border' type="submit" value="Contact" />
            </form>
        </div>
    );
};

export default ContForm;