import React from 'react';
import logo from '../assets/logo/Top Bar.png'
import logolarge from '../assets/logo/Group 1.png'
import Image from 'next/image';
import Link from 'next/link';
import OTPInput from '@/Components/OtpInput';

const verify = () => {
    return (
        <div className='pt-16'>
            <div className='flex justify-center items-center'>
                <div className='w-[342px] h-[58px] lg:w-[300px] lg:h-auto'>
                    <div className='flex justify-center items-center'>  <Image src={logo} alt='Logo' className='w-full h-full lg:hidden' />
                        <Image src={logolarge} alt='Logo' className='hidden lg:block' /></div>
                </div>
            </div>
            <div className=' max-w-screen-sm mx-auto'>
                <h1 className='text-[#858585] font-semibold text-[24px] text-center tracking-[1.7px]  lg:text-black'>Verify yourself</h1>
                <h1 className='text-[32px] font-semibold text-[#444242] tracking-[1.7px] leading-[48px] text-center lg:hidden'>Enter OTP</h1>
                <p className='text-[#263238] font-light text-[11px] text-center mx-5 my-3 lg:text-[16px]'>Verification code has been send to demo****@gmail.com. Please enter the code </p>

                <div>
                    <div className='w-[283px] lg:w-[400px] mx-auto'>
                        <OTPInput />
                    </div>
                </div>
                <div className='flex justify-center items-center mt-12 gap-3'>
                    <button className='text-[20px] font-normal text-[#444242] bg-[#9D9D9D] w-[115px] h-[41px] rounded-[7px] lg:hidden'>
                        <Link href='/verify'> Back</Link>
                    </button>
                    <button className='text-[20px] lg:text-[24px] lg:w-[200px] lg:h-[55px] text-[#FFFFFF] bg-[#444242] lg:bg-[#303030] w-[115px] h-[41px] rounded-[7px]'>
                        <Link href='/verify'> Verify</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default verify;