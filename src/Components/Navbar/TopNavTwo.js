import Image from 'next/image';
import React from 'react';
import widget from '../../assets/icon/Vector 10.png'
import notification from '../../assets/icon/Bell_pin_duotone_line.png'
import logo from '../../assets/logo/Top Bar.png'
const TopNavTwo = () => {
    return (

        <div className='flex justify-between mx-5 items-center mt-5'>
            <Image src={widget} alt='img' className='w-[16px]  h-[16px]' />
            <Image src={logo} alt='logo' />
            <Image src={notification} alt='img' className='w-[24px]  h-[24px]' />
        </div>

    );
};

export default TopNavTwo;