import Layout from '@/Components/Layout/Layout';
import TopNavTwo from '@/Components/Navbar/TopNavTwo';
import Image from 'next/image';
import React from 'react';
import shirt1 from '../assets/shirt/1 (2).png'
import shirt2 from '../assets/shirt/2 (2).png'
import shirt3 from '../assets/shirt/3 (2).png'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const previousorder = () => {
    return (
        <div>
            <TopNavTwo />
            <div className='pb-40 mx-5'>
                <p className='text-[16px] font-normal mt-5'> Your Order</p>
                <div className='mt-2'>
                    <div className='bg-[#EFEFEF] rounded-[17px] flex w-full '>
                        <div className='bg-[#D9D9D9] flex justify-center items-center rounded-[17px]   w-[155px]'>
                            <Image src={shirt1} alt='' className='h-full' />
                        </div>
                        <div className='w-full py-3 px-5'>
                            <p className='text-[13px] font-normal'>Panda on space men’s T-Shirt</p>
                            <p className='text-[#888888] text-[10px] font-normal'>Lorem ipsum dolor sit amet consectetur.</p>
                            <p className='text-[#00AB1B] text-[10px] font-normal mb-2'>Expected Delivery in 2 days</p>
                            <div className='bg-[#D9D9D9] h-[5px] w-full rounded-[9px]' />
                            <div className='bg-[#00AB1B] h-[5px] w-[60%] rounded-[9px] mt-[-5px]' />
                            <p className='text-center text-[#7D7D7D] text-[7px] mt-2'>Tuesday, 17 Jul 2023 <br />
                                In transit
                            </p>
                        </div>
                    </div>
                    <div className='bg-[#EFEFEF] mt-3 rounded-[17px] flex w-full '>
                        <div className='bg-[#D9D9D9] flex justify-center items-center rounded-[17px] [135px] '>
                            <Image src={shirt2} alt='' className='h-full' />
                        </div>
                        <div className='w-full py-3 px-5'>
                            <p className='text-[13px] font-normal'>Panda on space men’s T-Shirt</p>
                            <p className='text-[#888888] text-[10px] font-normal'>Lorem ipsum dolor sit amet consectetur.</p>
                            <p className='text-[#6E6E6E] text-[10px] font-normal'>Delivered on 23rd July, 2023</p>
                            <div>
                                <button className='bg-[#D4D4D4] w-[96px] h-[33px] rounded-[5px]'>Return</button>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#EFEFEF] mt-3 rounded-[17px] flex w-full '>
                        <div className='bg-[#D9D9D9] flex justify-center items-center rounded-[17px] [135px] '>
                            <Image src={shirt3} alt='' className='h-full' />
                        </div>
                        <div className='w-full py-3 px-5'>
                            <p className='text-[13px] font-normal'>Panda on space men’s T-Shirt</p>
                            <p className='text-[#888888] text-[10px] font-normal'>Lorem ipsum dolor sit amet consectetur.</p>
                            <p className='text-[#00AB1B] text-[10px] font-normal'>Expected Delivery in 2 days</p>
                            <div className='flex gap-1'>

                                <div className='flex gap-1 h-[22px] items-center justify-center text-[#FF8A00]'>
                                    <AiOutlineStar />
                                    <AiOutlineStar />
                                    <AiOutlineStar />
                                    <AiOutlineStar />
                                    <AiFillStar />
                                </div>
                                <button className='bg-[#D4D4D4] w-[96px] h-[33px] rounded-[5px]'>Feedback</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default previousorder;