import Image from 'next/image';
import React from 'react';
import visa from '../../assets/image/visa.png'
import Rupay from '../../assets/image/rupay.png'
import Rupaylo from '../../assets/image/discover (2).png'
import discover from '../../assets/image/discover (1).png'
import fb from '../../assets/icon/facebook.png'
import twitter from '../../assets/icon/twitter.png'
import insta from '../../assets/icon/instagram.png'
import logo from '../../assets/logo/White logo 3.png'
import Link from 'next/link';
import { lexend_exa } from '@/font';

const Footer = () => {
    return (

        <div className='lg:bg-[#18181B] py-12 px-12 lg:mb-3 footer-background'>
            <div className='flex gap-5 flex-col lg:flex-row lg:justify-between lg:items-center'>
                <div className='flex justify-center lg:justify-start'>
                    <div className='w-[141px] lg:w-[371px] h-[42px] lg:h-[110px]'>
                        <Image src={logo} className='w-full h-full' alt='img' />
                    </div>
                </div>
                <div className=' text-[14px] lg:text-[20px] flex flex-col gap-5 text-white'>
                    <Link href='/privacypolicy' >  <p className={lexend_exa.className}> Privacy policy</p></Link>
                    <Link href='/returnpolicy'> <p className={lexend_exa.className} >Return And Refund policy</p></Link>
                    <Link href='/termsandcondition'> <p className={lexend_exa.className} >Terms and conditions</p></Link>
                    <Link href='/aboutus'>  <p className={lexend_exa.className} >About us</p></Link>
                </div>
            </div>
            <div className='hidden lg:block '>
                <div className='px-12 flex justify-between items-center mt-3  '>
                    <div className='flex gap-5 items-center'>
                        <div className='w-[80px] h-[14px]'>
                            <Image src={discover} alt='img' className='' />
                        </div>
                        <div className='flex'>
                            <div className='w-[26px] h-[26px] rounded-full bg-[#eb001bd3] mr-[-10px] z-10' />
                            <div className='w-[26px] h-[26px] rounded-full bg-[#F79E1B]' />
                        </div>
                        <div className='flex'>
                            <div className='w-[26px] h-[26px] rounded-full bg-[#eb001b] ' />
                            <div className='w-[26px] h-[26px] rounded-full bg-[#0098dfa7] ml-[-10px] z-10' />
                        </div>
                        <div className='w-[57px] h-[18px]'>
                            <Image src={visa} alt='img' className='' />
                        </div>
                        <div className='w-[80px] h-[40px]'>
                            <Image src={Rupay} alt='img' className='' />
                        </div>
                        <div className='w-[28px] h-[28px]'>
                            <Image src={Rupaylo} alt='img' className='' />
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <Image src={fb} alt='img' />
                        <Image src={twitter} alt='img' />
                        <Image src={insta} alt='img' />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;