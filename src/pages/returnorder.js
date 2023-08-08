import TopNavTwo from '@/Components/Navbar/TopNavTwo';
import Image from 'next/image';
import React from 'react';
import shirt1 from '../assets/shirt/1 (2).png'
import { BiSolidDownArrow } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';
import shirt from '../assets/shirt/orangetshirt.png'
import Layout from '@/Components/Layout/Layout';

const returnorder = () => {
    return (
        <Layout>
            <div className='pb-12 lg:mt-24'>
                <div className='lg:hidden'>
                    <TopNavTwo />
                </div>
                <div className='mx-5 mt-5'>
                    <p className='text-[16px] font-normal lg:text-[30px] px-10'>Return Your Orders</p>
                    {/* mobile  */}
                    <div className='lg:hidden'>
                        <div className='bg-[#EFEFEF] mt-3 rounded-[17px] flex w-full '>
                            <div className='bg-[#D9D9D9] flex justify-center items-center rounded-[17px] [135px] '>
                                <Image src={shirt1} alt='' className='h-full' />
                            </div>
                            <div className='w-full py-3 px-5'>
                                <p className='text-[13px] font-normal'>Panda on space men’s T-Shirt</p>
                                <p className='text-[#888888] text-[10px] font-normal'>Lorem ipsum dolor sit amet consectetur.</p>

                                <div className='flex justify-between'>
                                    <p className='text-[14px] font-normal'>₹ 599. 00</p>
                                    <button className='bg-[#D4D4D4] w-[96px] h-[33px] rounded-[5px]'>Return</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* pc  */}
                    <div className='hidden lg:block px-16'>
                        <div className='bg-[#EFEFEF] rounded-[17px] flex w-full mt-5 items-center'>
                            <div className='bg-[#D9D9D9] flex justify-center items-center rounded-[17px] w-[20%] '>
                                <Image src={shirt} alt='' className='h-full' />
                            </div>
                            <div className='py-3 px-5 '>
                                <p className='text-[26px] font-normal'>Last Human in the Earth T-Shirt for Men</p>
                                <p className='text-[#888888] text-[16px] font-normal'>Lorem ipsum dolor sit amet consectetur. Imperdiet elementum phasellus aliquet</p>
                                <p className='text-[26px] text-[#03A300]'>Delivered on 12 th Aug</p>
                                <div className='flex justify-between mt-6 items-center'>
                                    <div className='flex gap-2 text-[#EBA900] text-[20px]'>
                                        <AiFillStar size={30} />
                                        <AiFillStar size={30} />
                                        <AiFillStar size={30} />
                                        <AiFillStar size={30} />
                                        <AiFillStar size={30} />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='mt-5 max-w-screen-sm mx-auto'>
                        <div className='bg-[#E9E9E9] h-[43px] lg:h-[60px] rounded-[9px] flex justify-between px-4 items-center'>
                            <input type="text" placeholder='Retune Reason' className='w-full text-[13px] text-[#9B9797] outline-none bg-[#E9E9E9] lg:text-[20px]' />
                            <BiSolidDownArrow />
                        </div>
                        <div>
                            <textarea className='outline-none rounded-[9px] p-4 bg-[#E9E9E9] w-full text-[13px] text-[#9B9797] mt-3 h-[134px] lg:text-[20px] lg:h-[250px]' placeholder='Comment' />
                        </div>
                        <div className='mt-5 flex justify-center items-center'>
                            <button className='bg-[#444242] w-[174px] lg:w-[200px] lg:h-[60px] lg:text-[24px] h-[44px] text-white rounded-[7px]'>Return Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default returnorder;