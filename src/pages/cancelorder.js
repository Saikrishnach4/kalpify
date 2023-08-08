import TopNavTwo from '@/Components/Navbar/TopNavTwo';
import Image from 'next/image';
import React, { useState } from 'react';
import shirt1 from '../assets/shirt/1 (2).png'
import { BiSolidDownArrow } from 'react-icons/bi';
import Link from 'next/link';
import Layout from '@/Components/Layout/Layout';
import OrderProductCard from '@/Components/OrderProductCard';

const cancelorder = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };
    return (
        <Layout>
            <div className='pb-12 lg:mt-24'>
                <div className='lg:hidden'>
                    <TopNavTwo />
                </div>
                <div className='mx-5 mt-5'>
                    <p className='text-[16px] font-normal lg:text-[30px]'>Cancel Your Orders</p>
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
                    <div className='hidden lg:block'>
                        <OrderProductCard />
                    </div>

                    <div className='mt-5 max-w-screen-sm mx-auto'>
                        <div className='bg-[#E9E9E9] h-[43px] lg:h-[60px] rounded-[9px] flex justify-between px-4 items-center'>
                            <input type="text" placeholder='Cancel Reason' className='w-full text-[13px] text-[#9B9797] outline-none bg-[#E9E9E9] lg:text-[20px]' />
                            <BiSolidDownArrow />
                        </div>
                        <div>
                            <textarea className='outline-none rounded-[9px] p-4 bg-[#E9E9E9] w-full text-[13px] text-[#9B9797] mt-3 h-[134px] lg:text-[20px] lg:h-[250px]' placeholder='Comment' />
                        </div>
                        <div className='mt-5 flex justify-center items-center' onClick={openModal}>
                            <button className='bg-[#444242] w-[174px] lg:w-[200px] lg:h-[60px] h-[44px] text-white rounded-[7px] lg:text-[24px]'>Cancel Order</button>
                        </div>
                        <div>
                            {isOpen && (
                                <div className="fixed inset-0 flex items-center justify-center z-10 px-5">
                                    <div className="bg-gray-800 opacity-75 absolute inset-0"></div>
                                    <div className="bg-white z-20 p-4 rounded-[17px]">
                                        <p className='text-[20px] font-normal  text-center'>We have received your cancellation request, our team will get in touch with you soon.We have received your cancellation request, our team will get in touch with you soon.</p>


                                        <div className='flex justify-center items-center mt-5'>
                                            <Link href='/cancelorder'>
                                                <button

                                                    className="text-[20px] text-[#FFFFFF] bg-[#444242] w-[158px] h-[46px] rounded-[7px]"
                                                >
                                                    Back
                                                </button></Link>
                                        </div></div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default cancelorder;