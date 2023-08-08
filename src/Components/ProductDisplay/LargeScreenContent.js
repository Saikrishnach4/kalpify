import Image from 'next/image';
import React from 'react';
import { AiFillStar } from 'react-icons/ai';

import fav from '../../assets/icon/heartbig.png'
import { jetBrains_Mono } from '@/font';

const LargeScreenContent = () => {
    return (
        <div>
            <div className='flex w-full'>
                <div className='w-[80%]  '>
                    <p className='text-[26px] font-semibold tracking-[1.2px]'>Panda on mars men’s T-Shirt</p>
                    <p className='text-[14px] font-normal text-[#5F5F5F] '>Lorem ipsum dolor sit amet consectetur. In adipiscing ac vulputate dui ac quis congue quam adipiscing. Lectus amet dolor mi quam lorem. Eget magna sit at pellentesque pulvinar semper lectus sed hendrerit. Quis.</p>
                </div>
                <div className=' w-[20%]  '>
                    <div className='  flex justify-end'>
                        <div className='flex items-center justify-center h-[70px] w-[70px] bg-white  rounded-full p-3 '><Image src={fav} alt='img' className=' ' /></div>
                    </div>
                </div>
            </div>
            <div className=' '>
                <div className='flex items-center justify-center gap-2 w-[118px] h-[42px] rounded-[7px] border-[1px] border-[#939393] my-5'>
                    <div className='w-[32px] h-[32px] text-[#EB7F00] p-1'>
                        <AiFillStar className='w-full h-full' />
                    </div>
                    <p className='text-[20px] font-bold'>4.9</p>
                </div>
            </div>
            <div className='text-[26px] font-bold mb-5  '>
                <p className={jetBrains_Mono.className}>₹699.00 <strike className='font-normal text-[20px] text-[#898989]'>₹999</strike> <span className='font-normal text-[#03A300]'>20% OFF</span></p>
                <p className='text-[18px] font-normal text-[#7C7979]'>Inclusive of all taxes</p>
            </div>
        </div>
    );
};

export default LargeScreenContent;