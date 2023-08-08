import Layout from '@/Components/Layout/Layout';
import Image from 'next/image';
import React from 'react';
import img from '../assets/image/undraw_taken_re_yn20 1.png'
import TopNav from '@/Components/Navbar/TopNav';
import FashionStatement from '@/Components/HomePage/FashionStatement';

const resultnotfound = () => {
    return (
        <Layout>
            <div className='lg:hidden'>
                <TopNav />
            </div>
            <div className='lg:mt-20 mb-12 px-5 lg:px-0'>
                <div className=' flex flex-col lg:flex-row justify-center items-center max-w-screen-md mx-auto'>
                    <div className='flex justify-center items-center mt-5'>
                        <Image src={img} alt='img' className='w-[100%] lg:w-[200px]' />
                    </div>
                    <div className='text-center lg:text-start'>
                        <p className='text-[20px] lg:text-[24px] '> Opus!  no result found</p>
                        <p className='text-[#888888] text-[20px] font-normal'>we will update our stock soon</p>
                    </div>
                </div>
                <p className=' my-5  lg:mt-12 text-center text-[20px] lg:text-[30px] font-normal'>Generate your own <span className='font-bold'>design</span></p>
                <div className='lg:mx-12 pb-12 lg:pb-0'>  <FashionStatement /></div>
            </div>
        </Layout>
    );
};

export default resultnotfound;