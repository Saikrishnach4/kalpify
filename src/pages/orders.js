import Image from 'next/image';
import React from 'react';
import shirt from '../assets/shirt/orangetshirt.png'
import Layout from '@/Components/Layout/Layout';
import { AiFillStar } from 'react-icons/ai';
import OrderProductCard from '@/Components/OrderProductCard';
import Link from 'next/link';

const orders = () => {
    return (
        <Layout>
            <p className='mx-10 text-[30px] font-normal text-black mt-24 '>Your Orders</p>
            <div className='px-16 pb-12'>
                {/* 1st */}
                <OrderProductCard />
                {/* 2nd */}
                <div className='bg-[#EFEFEF] rounded-[17px] flex w-full mt-5 '>
                    <div className='bg-[#D9D9D9] flex justify-center items-center rounded-[17px] w-[20%] '>
                        <Image src={shirt} alt='' className='h-full' />
                    </div>
                    <div className='w-full py-5 px-5'>
                        <p className='text-[30px] font-normal'>Last Human in the Earth T-Shirt for Men</p>
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
                            <div className='flex gap-3'>
                                <button className='text-white w-[200px] h-[50px] bg-[#929292] rounded-[6px] text-[24px]'>
                                    Feedback
                                </button>
                                <Link href='/returnorder'>  <button className='text-white w-[200px] h-[50px] bg-[#545454] rounded-[6px] text-[24px]'>
                                    Return
                                </button>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
                {/* 3rd */}
                <div className='bg-[#EFEFEF] rounded-[17px] flex w-full mt-5 '>
                    <div className='bg-[#D9D9D9] flex justify-center items-center rounded-[17px] w-[20%] '>
                        <Image src={shirt} alt='' className='h-full' />
                    </div>
                    <div className='w-full py-5 px-5'>
                        <p className='text-[30px] font-normal'>Last Human in the Earth T-Shirt for Men</p>
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
                            <div className='flex gap-3'>
                                <button className='text-white w-[200px] h-[50px] bg-[#929292] rounded-[6px] text-[24px]'>
                                    Feedback
                                </button>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default orders;