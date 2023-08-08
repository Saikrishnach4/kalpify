import TopNavTwo from '@/Components/Navbar/TopNavTwo';
import Image from 'next/image';
import React, { useState } from 'react';
import img from '../assets/image/undraw_cancel_re_pkdm 1.png'
import Layout from '@/Components/Layout/Layout';

const orderCancelled = () => {
    const [isButtonClicked, setIsButtonClicked] = useState(false);

    const handleButtonClick = () => {
        setIsButtonClicked(true);
    };

    return (
        <Layout>
            <div>
                <div className='lg:mt-24 lg:mb-20'>
                    <div className='lg:hidden'>  <TopNavTwo /></div>
                    <div className='flex justify-center items-center mt-12'>
                        <Image src={img} alt='img' />
                    </div>
                    <p className='text-center text-[16px] mt-[-110px] lg:text-[26px] lg:font-semibold'>Your Order is Cancelled</p>
                    {isButtonClicked ? (
                        <p className='text-center text-[16px] text-[#636363] mx-5 mt-3'>
                            your order cancellation is being reviewed, our team will contact you.
                        </p>
                    ) : null}
                    <div className='mt-5 flex justify-center items-center'>
                        <button
                            className='bg-[#444242] w-[174px] h-[44px] text-white rounded-[7px] lg:text-[24px] lg:w-[250px] lg:h-[60px]'
                            onClick={handleButtonClick}
                        >
                            Back To Home
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default orderCancelled;
