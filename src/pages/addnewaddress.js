import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import back from '../assets/icon/Expand_left_light.png'
import Layout from '@/Components/Layout/Layout';
import home from '../assets/image/Home.png'

const addnewaddress = () => {
    return (
        <Layout>
            <div className='pb-20 bg-white lg:pt-28'>
                <div className='lg:hidden'>
                    <div className='flex  items-center mt-5 w-full'>
                        <Link href='/profile'>
                            <div className="ps-5">
                                <Image src={back} alt="icon" />
                            </div></Link>
                        <div className='w-full text-center'>
                            <h1 className=" font-normal text-[20px] me-5">Add New Address</h1>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='text-[30px] mx-12 mb-5 font-normal hidden lg:block'>Add new Address</p>
                </div>
                <div className='lg:flex lg:w-full lg:items-center'>
                    <div className='lg:w-[60%] lg:bg-[#B8B8B8] lg:max-w-screen-md lg:mx-auto lg:rounded-[27px]'>
                        <form className='px-3 lg:px-12  my-5'>
                            <div className='bg-[#B6B6B6] w-full h-[1px] lg:hidden' />
                            <div className='bg-[#EEEEEE] border-[1px] border-[#D4D4D4] w-full rounded-[9px] h-[42px] lg:h-[50px]  px-3 mt-5 flex items-center'>
                                <input type="text" className=' text-[13px] lg:text-[18px]  font-normal w-full outline-none bg-[#EEEEEE]' placeholder='Full Name' />
                            </div>
                            <div className='bg-[#EEEEEE] border-[1px] border-[#D4D4D4] w-full rounded-[9px] h-[42px] lg:h-[50px]  px-3 mt-5 flex items-center'>
                                <input type="number" className=' text-[13px] lg:text-[18px]  font-normal w-full outline-none bg-[#EEEEEE]' placeholder='Mobile Number' />
                            </div>
                            <div className='bg-[#EEEEEE] border-[1px] border-[#D4D4D4] w-full rounded-[9px] h-[42px] lg:h-[50px]  px-3 mt-5 flex items-center'>
                                <input type="text" className=' text-[13px] lg:text-[18px]  font-normal w-full outline-none bg-[#EEEEEE]' placeholder='Flat, House no. , Building' />
                            </div>
                            <div className='bg-[#EEEEEE] border-[1px] border-[#D4D4D4] w-full rounded-[9px] h-[42px] lg:h-[50px]  px-3 mt-5 flex items-center'>
                                <input type="text" className=' text-[13px] lg:text-[18px]  font-normal w-full outline-none bg-[#EEEEEE]' placeholder='Land mark' />
                            </div>
                            <div className='lg:hidden'>
                                <div className='bg-[#EEEEEE] border-[1px] border-[#D4D4D4] w-full rounded-[9px] h-[42px] lg:h-[50px]  px-3 mt-5 flex items-center'>
                                    <input type="digit" className=' text-[13px] lg:text-[18px]  font-normal w-full outline-none bg-[#EEEEEE]' placeholder='Pin code' />
                                </div>
                            </div>
                            <div className='lg:flex lg:justify-between lg:w-full'>
                                <div className='bg-[#EEEEEE] border-[1px] border-[#D4D4D4] w-full rounded-[9px] h-[42px] lg:h-[50px]  px-3 mt-5 flex items-center lg:w-[40%]'>
                                    <input type="text" className=' text-[13px] lg:text-[18px]  font-normal w-full outline-none bg-[#EEEEEE]' placeholder='State' />
                                </div>
                                <div className='hidden lg:block lg:w-[40%]'>
                                    <div className='bg-[#EEEEEE] border-[1px] border-[#D4D4D4] w-full rounded-[9px] h-[42px] lg:h-[50px]  px-3 mt-5 flex items-center'>
                                        <input type="text" className=' text-[13px] lg:text-[18px]  font-normal w-full outline-none bg-[#EEEEEE]' placeholder='Zip' />
                                    </div>
                                </div>
                            </div>
                            <div className='bg-[#EEEEEE] border-[1px] border-[#D4D4D4] w-full rounded-[9px] p-3 mt-5 '>
                                <textarea type="text" className=' text-[13px] lg:text-[18px]  h-[203px] font-normal w-full outline-none bg-[#EEEEEE]' placeholder='Delivery Instructions (Optional)' />
                            </div>
                            <div className='lg:hidden'>
                                <div className='flex gap-3 my-5 mx-2'>
                                    <input type="checkbox" className='bg-[#D9D9D9] outline-none' />
                                    <p>Make this my default address</p>
                                </div>
                            </div>
                            <div className='flex justify-center items-center lg:mt-8'>
                                <button className='text-[20px] text-[#FFFFFF] bg-[#444242] w-[158px] h-[46px] rounded-[7px] font-normal lg:text-[24px] lg:w-[200px] lg:h-[55px]'>
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className='hidden lg:block lg:w-[40%] lg:h-full'>
                        <div className='flex items-center'>
                            <Image src={home} alt='img' />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default addnewaddress;