import React from 'react';
import CustomSquareRadio from './CustomSquareRadio';

const MiddleAirProduct = () => {
    return (
        <div >
            <p className='text-[20px] font-semibold mx-16 mb-3'>Generated Images</p>
            <div className='grid grid-cols-2 gap-5 mx-12 mb-12'>
                <div className='flex justify-center items-center'> <div className='bg-[#D9D9D9] w-[250px] h-[268px] rounded-[16px] flex justify-end pt-5 px-5'>
                    <CustomSquareRadio />
                </div></div>
                <div className='flex justify-center items-center'> <div className='bg-[#D9D9D9] w-[250px] h-[268px] rounded-[16px] flex justify-end pt-5 px-5'>
                    <CustomSquareRadio />
                </div></div>
                <div className='flex justify-center items-center'> <div className='bg-[#D9D9D9] w-[250px] h-[268px] rounded-[16px] flex justify-end pt-5 px-5'>
                    <CustomSquareRadio />
                </div></div>
                <div className='flex justify-center items-center'> <div className='bg-[#D9D9D9] w-[250px] h-[268px] rounded-[16px] flex justify-end pt-5 px-5'>
                    <CustomSquareRadio />
                </div></div>
            </div>
            <div className='mt-32 mb-3 flex justify-center'>
                <button className='w-[200px] text-[24px] font-normal h-[60px] bg-[#545454]  text-white rounded-[6px]'>Re Generate</button>
            </div>
            <p className='text-[20px] font-normal text-center'>* Max two times are allowed </p>
        </div>
    );
};

export default MiddleAirProduct;