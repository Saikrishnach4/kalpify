import Image from 'next/image';
import React from 'react';
import image from '../assets/image/f.png'
import truck from '../assets/icon/delivery-truck 1.png'
import discount from '../assets/icon/discount 1.png'
import quality from '../assets/icon/quality 1.png'

const OwnDesign = () => {
    return (
        <div className='mb-12 mt-20'>
            <div className='bg-[#D9D9D9] flex justify-between px-5 py-8 w-full'>
                <div className='w-[60%]'>
                    <div className='w-full flex items-center h-full'>
                        <div className=' text-end w-[70%]'>
                            <p className=' font-extrabold text-[30px] uppercase'>Wear your T-Shirt</p>
                            <p className=' font-extrabold text-[30px] uppercase'>De<span className='text-[#F83161]'>sig</span><span className='bg-[#FF002E] px-2'>ned</span> by your own </p>
                            <p className='text-[22px] font-[400]'>With Kalpify you can design your T-Shirt</p>
                            <p className='text-[22px] font-[400]'>with the help of <span className='font-bold'>AI</span></p>
                        </div>
                        <div className='w-[30%]'>

                        </div>
                    </div>
                </div>
                <div className='w-[40%] flex gap-5 ms-12'>
                    <div className='w-[1px] bg-black h-full' />
                    <div className='flex flex-col gap-10'>
                        <div className='flex gap-3 items-center'>
                            <div className='w-[74px] h-[74px]' >
                                <Image src={truck} alt='img' className='w-full h-full' />       </div>
                            <p className='text-[22px] font-normal'>Free and Fast Delivery</p>


                        </div>
                        <div className='flex gap-3 items-center'>
                            <div className='w-[64px] h-[64px]' >
                                <Image src={discount} alt='img' className='w-full h-full' />       </div>
                            <p className='text-[22px] font-normal'>Free and Fast Delivery</p>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <div className='w-[64px] h-[64px]' >
                                <Image src={quality} alt='img' className='w-full h-full' />       </div>
                            <p className='text-[22px] font-normal'>Free and Fast Delivery</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center mt-[-452px]'>
                <Image className='' src={image} alt='img' />
            </div>
        </div>
    );
};

export default OwnDesign;