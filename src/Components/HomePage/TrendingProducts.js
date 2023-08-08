import React from 'react';
import shirt from '../../assets/shirt/shirt-removebg-preview.png'
import shirt2 from '../../assets/shirt/orangetshirt.png'
import love from '../../assets/icon/heart.png'
import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';

const TrendingProducts = () => {
    return (
        <div className='bg-[#D9D9D9] h-auto shadow-xl rounded-[7px] lg:w-[350px] w-[165px]' >
            <div className='flex justify-end pt-4 pe-4'>
                <Image src={love} alt='icon' className='bg-white lg:hidden  rounded-full p-[2px] ' />
                <Image src={love} alt='icon' className='bg-white lg:w-[48px] lg:h-[48px] rounded-full p-2 hidden lg:block' />
            </div>
            <div className='flex justify-center items-center mt-[-22px]'>
                <Image src={shirt} alt='shirt' className='lg:hidden' />
                <Image src={shirt2} alt='shirt' className='hidden lg:block' />
            </div>
            <div className='h-auto bg-white mt-[-70px] lg:mt-[-120px] z-10 relative' style={{ borderBottomLeftRadius: '7px', borderBottomRightRadius: '7px' }} >
                <div className=' tracking-[1.7px] lg:tracking-[0.5px] py-5'>
                    <p className='text-[#A6A0A0] text-[8px] font-normal px-3 lg:text-[18px]'>T-Shirt</p>
                    <p className='text-[#303030] text-[18px] hidden lg:block font-normal px-2 lg:text-[20px]'>Panda on Mars T-Shirt for Men</p>
                    <p className='text-[#303030] text-[8px] font-normal px-2 lg:hidden'>Last man in the earth men’s</p>
                    <p className='text-[#303030] text-[8px] font-normal px-2 lg:hidden'>T-Shirt</p>
                    <div className='lg:hidden'>
                        <div className='text-[#FF8A00] tracking-[1.7px] flex gap-1 px-3 items-center justify-end'>
                            <AiFillStar />
                            <p className='text-[8px] text-[#444242]'>4.6</p>

                        </div>
                    </div>
                    <div>
                        <p className='text-[12px] font-bold px-2 text-[#9B9797] tracking-[1.2px] lg:text-[22px]'>₹ 599.00 <strike className='text-[#888888] text-[8px] lg:text-[20px] font-normal'>₹699.00 </strike><span className='text-[#00AB1B] lg:text-[16px] text-[6px] ms-2'>  20% OFF</span> </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TrendingProducts;