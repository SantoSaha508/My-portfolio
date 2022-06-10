import React from 'react';
import facebook from '../../images/logo/face.png';
import git from '../../images/logo/github.png';
import linkedIn from '../../images/logo/linkedin.png';

const Footer = () => {
    return (
        <footer className="footer items-center p-4 text-neutral-content bg-black">
            <div className="items-center grid-flow-col">
                <p className='text-white'>Copyright © 2022 - All right reserved</p>
            </div>
            <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <a href="https://www.facebook.com/splash.shanto/" target="_blank"><img className='w-10 bg-white rounded p-1' src={facebook} alt="" /></a>
                <a href="https://github.com/SantoSaha508" target="_blank"><img className='w-10 bg-white rounded p-1' src={git} alt="" /></a>
                <a href="https://www.linkedin.com/in/santo-saha-7374a9201/" target="_blank"><img className='w-10 bg-white rounded p-1' src={linkedIn} alt="" /></a>
            </div>
        </footer>
    );
};

export default Footer;