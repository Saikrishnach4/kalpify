import Link from 'next/link';
import React from 'react';


const LeftAirProduct = () => {
    return (
        <div className='pb-12 lg:pb-0'>
            <p className='lg:hidden text-[15px] font-normal'>Generated image</p>
            <p className='font-semibold text-[20px] mt-10 mb-3'>Images for front</p>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='flex justify-center items-center'>
                    <div className='w-[134px] h-[172px] bg-[#D9D9D9] rounded-[8px]' />
                </div>
                <div className='flex justify-center items-center'>
                    <div className='w-[134px] h-[172px] bg-[#D9D9D9] rounded-[8px]' />
                </div>
                <div className='flex justify-center items-center'>
                    <div className='w-[134px] h-[172px] bg-[#D9D9D9] rounded-[8px]' />
                </div>
                <div className='flex justify-center items-center'>
                    <div className='w-[134px] h-[172px] bg-[#D9D9D9] rounded-[8px]' />
                </div>

            </div>
            <div className='mt-5 lg:hidden'>
                <div className='flex justify-center items-center'>
                    <Link href='/regenerate'>   <button className='bg-[#545454] w-[220px] text-white px-5 h-[49px] rounded-[9px] text-[16px] '>Re Generate</button></Link>

                </div>
                <p className='text-[14px] font-normal mt-2 text-center'>*Max two times are allowed</p>
                <p className='text-[#444242] text-[16px] font-bold text-center'>Display T-Shirt</p>
            </div>
        </div>
    );
};

export default LeftAirProduct;