import React from 'react';
import img from '../../assets/image/svg 1234 (1).png'

import Image from 'next/image';
import { jetBrains_Mono } from '@/font';

const CheckoutDoneStatus = () => {
    return (
        <div className='mb-12 lg:mt-24'>
            <div className='text-center text-[20px] font-normal pt-3 lg:text-[30px]'>
                <p>Thank You for </p>
                <p>Shopping With Us</p>
            </div>
            <div className='flex justify-center items-center mt-5'>
                <Image src={img} alt='img' />
            </div>
            <div className='mt-[-110px]'>
                <p className='text-[16px] text-center lg:text-[26px]'>Your Order is Confirmed</p>
                <p className='text-[#636363] text-[16px] font-normal text-center lg:text-[26px]'><span className={jetBrains_Mono.className}>Order ID 12345A34f</span></p>
            </div>
            <p className='text-[16px] text-center font-normal mt-5 text-[#636363] lg:hidden'>Feedback about website and
                any new feature to be included
                or anything missing.</p>
        </div>
    );
};

export default CheckoutDoneStatus;