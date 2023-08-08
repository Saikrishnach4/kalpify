import Layout from '@/Components/Layout/Layout';
import Image from 'next/image';
import React from 'react';
import back from '../assets/icon/Expand_left_light.png'
import Link from 'next/link';
import TopNav from '@/Components/Navbar/TopNav';
import contact from '../assets/image/Contact.png'

const contactus = () => {
    return (
        <Layout>
            <TopNav />
            <div className='pb-28' >
                <div className='lg:hidden'> <div className='flex  items-center mt-5 w-full'>
                    <Link href='/profile'>
                        <div className="ps-5">
                            <Image src={back} alt="icon" />
                        </div></Link>
                    <div className='w-full text-center'>
                        <h1 className=" font-normal text-[20px]  me-5">Contact Us</h1>
                    </div>
                </div></div>
                <h1 className=" font-normal text-[30px] hidden lg:block mx-12 my-5">Contact Us</h1>
                <p className='text-center tracking-[1.7px] text-[12px] my-5 mx-[35px] font-normal lg:hidden'>Lorem ipsum dolor sit amet consectetur. Volutpat tellus aliquet sed eros eget sit lectus volutpat quis. Proin in elit sit sit dolor quis suspendisse scelerisque commodo.</p>
                <div className='lg:flex lg:w-full lg:items-center'>
                    <div className='lg:w-[60%] lg:bg-[#B8B8B8] lg:rounded-[27px] lg:max-w-screen-md lg:mx-auto lg:px-12 lg:py-10'>
                        <form className='mx-[30px] mt-3'>
                            <div className='tracking-[1.7px]'>
                                <p className='text-[#7D7D7D] text-[13px] ms-3 lg:hidden'>Name</p>
                                <input type="text" className='px-3 rounded-[9px] mt-2 w-full outline-none text-[16px] h-[43px] lg:h-[50px] lg:text-[18px] bg-[#E9E9E9]' placeholder='Jyotirmoy Mondal' />
                            </div>
                            <div className='tracking-[1.7px] mt-2'>
                                <p className='text-[#7D7D7D] text-[13px] ms-3 lg:hidden'>Email</p>
                                <input type="email" className='px-3 rounded-[9px] mt-2 w-full outline-none text-[16px] h-[43px] lg:h-[50px] lg:text-[18px] bg-[#E9E9E9]' placeholder='example@gmail.com' />
                            </div>
                            <div className='tracking-[1.7px] mt-2'>
                                <p className='text-[#7D7D7D] text-[13px] ms-3 lg:hidden'>Type your Massage </p>
                                <textarea type="email" className='p-3 rounded-[9px] h-[254px] mt-2 lg:text-[18px] w-full outline-none text-[16px]  bg-[#E9E9E9]' placeholder='comment' />
                            </div>
                            <div className='flex justify-center items-center mt-12'>
                                <button className='text-[20px] text-[#FFFFFF] bg-[#444242] w-[158px] h-[46px] rounded-[7px] font-normal lg:hidden'>
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className='hidden lg:block lg:w-[40%] lg:h-full pt-5'>
                        <Image src={contact} alt='img' />
                    </div>
                </div>
                <div className='flex justify-center items-center lg:mt-8'>
                    <button className='text-[20px] text-[#FFFFFF] bg-[#444242] w-[158px] h-[46px] rounded-[7px] font-normal lg:text-[24px] lg:w-[200px] lg:h-[50px] hidden lg:block'>
                        Send
                    </button>
                </div>
            </div>
        </Layout>
    );
};

export default contactus;