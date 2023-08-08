import Image from 'next/image';
import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import star from '../../assets/icon/starPNG.PNG'

const Ratings = () => {
    return (
        <div className='w-[400px] mb-5 mt-2'>
            <p className='mb-2 text-[20px] font-bold'>Ratings</p>
            <div className='flex h-full'>
                <div>
                    <div className='flex items-center text-[22px] font-semibold gap-5'>
                        <p>4.2</p>
                        <div className=' text-teal-600'>  <AiFillStar size={20} /></div>
                    </div>
                    <p className='text-[12px]'>59.9k Verified Buyers</p>
                </div>

                <div className='flex gap-5'>
                    <div className='h-full w-[1px] bg-gray-400 ms-5' />
                    <div className='text-[13px]'>
                        <div className='flex gap-2 w-full items-center'>
                            <p className='text-gray-400'>5</p>
                            <div className=' text-gray-400'>  <AiFillStar size={15} /></div>
                            <div className='w-[130px]'>
                                <div className='w-full h-[6px] bg-gray-300' />
                                <div className='w-[50%] h-[6px] bg-teal-600 mt-[-6px]' />
                            </div>
                            <p>33218</p>
                        </div>
                        <div className='flex gap-2 w-full items-center'>
                            <p className='text-gray-400'>4</p>
                            <div className=' text-gray-400'>  <AiFillStar size={15} /></div>
                            <div className='w-[130px]'>
                                <div className='w-full h-[6px] bg-gray-300' />
                                <div className='w-[40%] h-[6px] bg-teal-600 mt-[-6px]' />
                            </div>
                            <p>14138</p>
                        </div>
                        <div className='flex gap-2 w-full items-center'>
                            <p className='text-gray-400'>4</p>
                            <div className=' text-gray-400'>  <AiFillStar size={15} /></div>
                            <div className='w-[130px]'>
                                <div className='w-[100%] h-[6px] bg-gray-300' />
                                <div className='w-[25%] h-[6px] bg-teal-500 mt-[-6px]' />
                            </div>
                            <p>5862</p>
                        </div>
                        <div className='flex gap-2 w-full items-center'>
                            <p className='text-gray-400'>4</p>
                            <div className=' text-gray-400'>  <AiFillStar size={15} /></div>
                            <div className='w-[130px]'>
                                <div className='w-full h-[6px] bg-gray-300' />
                                <div className='w-[10%] h-[6px] bg-yellow-600 mt-[-6px]' />
                            </div>
                            <p>2150</p>
                        </div>
                        <div className='flex gap-2 w-full items-center'>
                            <p className='text-gray-400'>4</p>
                            <div className=' text-gray-400'>  <AiFillStar size={15} /></div>
                            <div className='w-[130px]'>
                                <div className='w-full h-[6px] bg-gray-300' />
                                <div className='w-[15%] h-[6px] bg-red-600 mt-[-6px]' />
                            </div>
                            <p>3908</p>
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <div className='flex items-center gap-2 mt-5'>
                    <p className='text-[18px] font-bold tracking-tighter'>WHAT CUSTOMERS SAID</p>
                    <Image src={star} alt='star' />
                </div>
                <div className='w-full mt-2'>
                    <p className='text-gray-500 text-[14px]'>Fit</p>
                    <div className='flex w-full gap-8 items-center'>
                        <div className='w-[150px]'>
                            <div className='w-full h-[4px] rounded-xl bg-gray-300' />
                            <div className='w-[79%] mt-[-4px] h-[4px] rounded-xl bg-teal-600' /></div>
                        <p className='w-[30%] font-bold text-[14px]'>Just Right 79%</p>
                    </div>
                </div>
                <div className='w-full mt-2'>
                    <p className='text-gray-500 text-[14px]'>Length</p>
                    <div className='flex w-full gap-8 items-center'>
                        <div className='w-[150px]'>
                            <div className='w-full h-[4px] rounded-xl bg-gray-300' />
                            <div className='w-[85%] mt-[-4px] h-[4px] rounded-xl bg-teal-600' /></div>
                        <p className='w-[30%] font-bold text-[14px]'>Just Right 85%</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ratings;