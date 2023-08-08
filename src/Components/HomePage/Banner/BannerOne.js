import Image from 'next/image';
import React, { useState } from 'react';
import shirt from '../../../assets/shirt/t_size_1-removebg-preview.png'
import shirt2 from '../../../assets/shirt/t size 1.png'
import shadow from '../../../assets/shirt/shadow.png'

const BannerOne = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    return (
        <div className='mx-5 lg:mx-12'>
            <p className=' tracking-[1.7px] text-[11px] font-normal mt-5 hidden'>Popular Products </p>
            <div className='flex flex-col justify-end items-end lg:mt-[-20px]'>
                <Image src={shirt} alt='image' className='w-[144px] h-[174px] lg:hidden' />
                <div className='mr-12 mt-[-10px] lg:mt-0'>
                    <Image src={shadow} alt='image' className='w-[86px] lg:hidden' />
                </div>

            </div>
            <div className='mt-[-50px] w-[400px] h-[500px] lg:block hidden '>
                <Image src={shirt2} alt='image' className='w-full h-full ms-[-20px]' />
            </div>
            <div className='bg-[#F8F7F7] lg:bg-[#D9D9D9] h-[151px] lg:h-auto rounded-[5px] py-10 mt-[-135px] px-5 lg:mt-[-400px]'>
                {/* 0 */}
                <div className=' flex justify-between lg:w-70%'>
                    <div className='hidden lg:block w-[70%]'></div>
                    <div className='lg:flex lg:justify-center lg:w-full'>
                        <div className='lg:text-center'>
                            <p className='text-[8px] lg:text-[26px] tracking-[0.7px] font-semibold'>#FASHION SALE</p>
                            <h1 className='text-[20px] lg:text-[44px] tracking-[3.2px] font-semibold'>80% OFF</h1>
                            <p className='text-[8px] text-[#858585] font-normal lg:text-[20px]'>Discover Fashion That Suits to</p>
                            <p className='text-[8px] text-[#858585] font-normal lg:text-[20px]'>Your Style</p>
                            <button className='bg-[#444242] mt-4 w-[87px] lg:w-[200px] lg:h-[54px] h-[32px] text-white rounded-[5px] text-[10px] lg:text-[26px] font-normal'>Check Out</button>
                        </div>
                    </div>
                    <div className='hidden lg:block lg:w-[60%] h-full'>
                        <div className='flex flex-col justify-end items-end h-full mt-40'>
                            <p className='text-[#717171] text-[18px]'>Starting Form</p>
                            <p className='text-[#717171] text-[26px]'>₹ 599. 00</p>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <div className='lg:hidden'>
                    <div className='flex gap-1 justify-center items-center mt-2'>
                        <div
                            className={`bg-${activeIndex === 0 ? 'bg-[#A6A0A0]' : 'bg-[#D9D9D9]'} w-${activeIndex === 0 ? '[20px]' : '[6px]'} h-[6px] rounded-full`}
                            onClick={() => setActiveIndex(0)}
                        />
                        <div
                            className={`bg-${activeIndex === 1 ? '[#A6A0A0]' : '[#D9D9D9]'} w-${activeIndex === 1 ? '[20px]' : '[6px]'} h-[6px] rounded-full`}
                            onClick={() => setActiveIndex(1)}
                        />
                        <div
                            className={`bg-${activeIndex === 2 ? '[#A6A0A0]' : '[#D9D9D9]'} w-${activeIndex === 2 ? '[20px]' : '[6px]'} h-[6px] rounded-full`}
                            onClick={() => setActiveIndex(2)}
                        />
                        <div
                            className={`bg-${activeIndex === 3 ? '[#A6A0A0]' : '[#D9D9D9]'} w-${activeIndex === 3 ? '[20px]' : '[6px]'} h-[6px] rounded-full`}
                            onClick={() => setActiveIndex(3)}
                        />
                    </div>
                </div>
            </div>
            <div className='lg:block hidden w-full'>
                <div className='flex gap-1 justify-center items-center mt-2 w-full'>

                    <div
                        className={`bg-${activeIndex === 1 ? '[#A6A0A0]' : '[#D9D9D9]'} w-${activeIndex === 1 ? '[42px]' : '[20px]'} h-[20px] rounded-full`}
                        onClick={() => setActiveIndex(1)}
                    />
                    <div
                        className={`bg-${activeIndex === 2 ? '[#A6A0A0]' : '[#D9D9D9]'} w-${activeIndex === 2 ? '[42px]' : '[20px]'} h-[20px] rounded-full`}
                        onClick={() => setActiveIndex(2)}
                    />
                    <div
                        className={`bg-${activeIndex === 3 ? '[#A6A0A0]' : '[#D9D9D9]'} w-${activeIndex === 3 ? '[42px]' : '[20px]'} h-[20px] rounded-full`}
                        onClick={() => setActiveIndex(3)}
                    />
                    <div
                        className={`bg-${activeIndex === 4 ? '[#A6A0A0]' : '[#D9D9D9]'} w-${activeIndex === 4 ? '[42px]' : '[20px]'} h-[20px] rounded-full`}
                        onClick={() => setActiveIndex(4)}
                    />
                </div>
            </div>
        </div>
    );
};

export default BannerOne;