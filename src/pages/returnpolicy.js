import Layout from '@/Components/Layout/Layout';
import React from 'react';
import back from '../assets/icon/Expand_left_light.png'
import Image from 'next/image';
import Link from 'next/link';
import TopNav from '@/Components/Navbar/TopNav';
import { lexend_exa } from '@/font';
import img from '../assets/image/pp.png'
import DesktopTopNav from '@/Components/Navbar/DesktopTopNav';

const returnpolicy = () => {
    return (
        <div>
            <div className='lg:hidden'>
                <TopNav />
            </div>
            <div className='pb-28' >
                <div className='lg:hidden'>
                    <div className='flex  items-center mt-5 w-full'>
                        <Link href='/profile'>
                            <div className="ps-5">
                                <Image src={back} alt="icon" />
                            </div></Link>
                        <div className='w-full text-center'>
                            <h1 className=" font-normal text-[20px]  me-5">Return Policy</h1>
                        </div>
                    </div>
                </div>

                <div className='hidden lg:block'>
                    <DesktopTopNav />
                </div>
                <div className='flex flex-col lg:flex-row lg:w-full lg:justify-center lg:items-center'>
                    <div className='lg:w-[60%]'>
                        <div className='hidden lg:block font-normal mt-5 lg:mx-12'> <p className='text-[40px]'>Return Policy </p>
                        </div>
                        <p className='mx-5 text-justify text-[16px] font-normal lg:mx-12 mt-5 bg-[#D5D5D5] lg:text-[20px] lg:p-5'><span className={lexend_exa.className}>We've just started with this product and can not afford a refund or return of the item.</span></p>
                    </div>
                    <div className='hidden lg:block lg:w-[40%] mt-32'>
                        <div className='fixed'>
                            <Image src={img} alt='img' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default returnpolicy;