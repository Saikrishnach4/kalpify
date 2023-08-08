import Image from 'next/image';
import React from 'react';
import logo from '../../assets/logo/Group 1.png'

const DesktopTopNav = () => {
    return (
        <div className='mx-12 flex justify-between items-center pt-5'>
            <button className='w-[130px] text-white h-[70px] bg-[#9B9B9B] rounded-[16px] text-[30px]'>Back</button>
            <Image src={logo} alt='img' className='ms-[-100px]' />
            <div></div>
        </div>
    );
};

export default DesktopTopNav;