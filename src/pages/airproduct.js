import GenderSelectDropDown from '@/Components/AirProductPage/GenderSelectDropDown';
import LeftAirProduct from '@/Components/AirProductPage/LeftAirProduct';
import MiddleAirProduct from '@/Components/AirProductPage/MiddleAirProduct';
import RightAirProduct from '@/Components/AirProductPage/RightAirProduct';
import SizeSelectorDropDown from '@/Components/AirProductPage/SizeSelectorDropDown';
import Layout from '@/Components/Layout/Layout';
import TopNav from '@/Components/Navbar/TopNav';
import Image from 'next/image';
import React from 'react';
import colorWheel from '../assets/icon/color-wheel 1.png'

const airproduct = () => {
    return (
        <Layout>
            <div className='lg:hidden'>
                <TopNav />
            </div>
            <div className='h-[33px]  shadow-set'> </div>
            {/* desktop  */}
            <div className='px-5 lg:px-0 pb-12 lg:pb-0'>
                <div className=' w-full flex lg:h-[1100px]'>
                    <div className='lg:w-[22%] lg:bg-[#F1F1F1] lg:pt-[89px] lg:px-[36px] lg:h-full'>
                        <div className='flex lg:flex-col gap-2'>
                            <div>
                                <p className='text-[15px] lg:text-[24px] font-normal'>Gender</p>
                                <GenderSelectDropDown />
                            </div>
                            <div className='lg:mt-14  mb-3'>
                                <p className='text-[15px] lg:text-[24px] font-normal'>Size</p>
                                <SizeSelectorDropDown />
                            </div>
                            <div>
                                <p className='text-[15px] lg:text-[24px] font-normal'>Color</p>
                                <div className='mt-2 flex  gap-2'>
                                    <button className='w-[42px] h-[42px] rounded-full bg-[#FF8F8F] ' />
                                    <button className='w-[42px] h-[42px] rounded-full  hidden lg:block bg-[#9074FF]' />
                                    <button className='w-[42px] h-[42px] rounded-full  hidden lg:block bg-[#00CFEB]' />
                                    <button className='w-[42px] h-[42px] rounded-full  hidden lg:block bg-[#EB00D4]' />
                                    <button className='w-[42px] h-[42px] rounded-full  hidden lg:block bg-[#FB5858]' />
                                    <button className='w-[42px] h-[42px] rounded-full  hidden lg:block bg-[#FBE158]' />
                                </div>
                            </div>
                            <div className='text-[16px] font-normal flex items-center gap-3 my-3'>
                                <p className='hidden lg:block'>More Color</p>
                                <button>
                                    <Image src={colorWheel} alt='img' />
                                </button>
                            </div>
                        </div>
                        <LeftAirProduct />
                    </div>
                    <div className='lg:w-[43%] h-full pt-24 hidden lg:block'>
                        <MiddleAirProduct />
                    </div>
                    <div className='lg:w-[35%] bg-[#F1F1F1] h-full pt-24 hidden lg:block'>
                        <RightAirProduct />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default airproduct;