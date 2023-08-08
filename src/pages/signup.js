import React from 'react';
import logo from '../assets/logo/Top Bar.png'
import google from '../assets/logo/Component 2.png'
import logolarge from '../assets/logo/Group 1.png'
import facebook from '../assets/logo/Component 3.png'
import Image from 'next/image';
import Link from 'next/link';
import { jetBrains_Mono } from '@/font';

const signup = () => {
    return (
        <div className='pt-16'>
            <div className='flex justify-center items-center'>
                <div className='w-[342px] h-[58px] lg:w-[300px] lg:h-auto'>
                    <div className='flex justify-center'>
                        <Image src={logo} alt='Logo' className='w-full h-full lg:hidden' />
                        <Image src={logolarge} alt='Logo' className='hidden lg:block' />
                    </div>
                </div>
            </div>
            <div className=' max-w-screen-sm mx-auto'>
                <h1 className='text-[#858585] font-semibold text-[20px] text-center tracking-[1.7px] lg:text-[30px] lg:text-black'>Register yourself</h1>
                <h1 className='text-[32px] font-semibold text-[#444242] tracking-[1.7px] leading-[48px] text-center lg:hidden'>Signup</h1>
                <form className='mx-8 lg:mx-0 tracking-[1.7px] my-8'>
                    <div>
                        <p className='text-[#7D7D7D] font-normal text-[13px] ms-3 lg:hidden'>Name</p>
                        <input type="text" className='outline-none h-[43px] px-3 bg-[#E9E9E9] w-full rounded-[9px] mt-1 lg:text-[18px] lg:text-black lg:h-[60px] lg:ps-6 lg:mt-3' placeholder='Jyotirmoy Mondal' />
                    </div>
                    <div>
                        <p className='text-[#7D7D7D] font-normal text-[13px] ms-3 lg:hidden'>Phone</p>
                        <input type="number" className='outline-none h-[43px] px-3 bg-[#E9E9E9] w-full rounded-[9px] mt-1 lg:text-[18px] lg:text-black lg:h-[60px] lg:ps-6 lg:mt-3' placeholder='+91 86531 38715' />
                    </div>
                    <div>
                        <p className='text-[#7D7D7D] font-normal text-[13px] ms-3 lg:hidden'>Email</p>
                        <input type="email" className='outline-none h-[43px] px-3 bg-[#E9E9E9] w-full rounded-[9px] mt-1 lg:text-[18px] lg:text-black lg:h-[60px] lg:ps-6 lg:mt-3' placeholder='example@gmail.com' />
                    </div>
                    <div className='flex justify-center items-center mt-12'>
                        <button className='text-[20px] lg:text-[24px] lg:w-[200px] lg:h-[55px] text-[#FFFFFF] bg-[#444242] lg:bg-[#303030] w-[115px] h-[41px] rounded-[7px]'>
                            Register
                        </button>
                    </div>
                    <div className={jetBrains_Mono.className}>
                        <p className='text-[#858585] text-[15px] font-normal lg:text-center mt-5 lg:text-[16px] lg:text-black'>Already have an account? <Link href='/login' className='text-[#303030] lg:text-black font-bold'>Login</Link></p>
                    </div>
                    <div className='lg:max-w-screen-sm mx-auto lg:mx-20'>
                        <div className='flex justify-center items-center gap-2 mt-5'>
                            <hr className='w-full h-[1px] lg:h-[2px] bg-black lg:bg-[#263238]' />
                            <p>OR</p>
                            <hr className='w-full h-[1px] lg:h-[2px] bg-black lg:bg-[#263238]' />
                        </div>
                    </div>
                </form>
                <div>
                    <p className='text-center text-[#222222] text-[15px] font-normal lg:text-[16px]'>Continue With</p>
                    <div className='flex justify-center items-center gap-3 mt-3 mb-16'>
                        <button className='w-[43px] h-[43px] lg:w-[61px] lg:h-[61px] rounded-[12px] bg-[#1B1919] flex justify-center items-center'>
                            <Image src={google} alt='google' />
                        </button>
                        <button className='w-[43px] h-[43px] lg:w-[61px] lg:h-[61px] rounded-[12px] bg-[#1B1919] flex justify-center items-center'>
                            <Image src={facebook} alt='google' />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default signup;