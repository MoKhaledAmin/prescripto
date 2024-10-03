import React from 'react';

// Assets
import { assets } from './../assets/assets';

const Footer = () => {
    return (
        <React.Fragment>
            <div className='md:mx-10'>
                <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                    {/* Left Section */}
                    <div>
                        <img className='mb-5 w-40' src={assets.logo} alt='Logo' />
                        <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos possimus perspiciatis commodi eius distinctio ex nisi, sunt dicta illo ipsum pariatur amet magni voluptas! Possimus eaque atque aperiam sapiente asperiores!.</p>
                    </div>
                    {/* Center Section */}
                    <div>
                        <p className='text-xl font-medium mb-5'>COMPANY</p>
                        <ul className='flex flex-col gap-2 text-gray-600'>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    {/* Right Section */}
                    <div>
                        <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                        <ul className='flex flex-col gap-2 text-gray-600'>
                            <li>+201016379543</li>
                            <li>MoKhaledAmin123@Gmail.Com</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <hr />
                    <p className='py-5 text-sm text-center'>&copy; Copyright 2024@ Mohamed Khaled - All Right Reserved.</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer;