import React from 'react';
import image1 from '../assets/image//trendy-fashionable-couple-posing_1-removebg-preview.png'
import image2 from '../assets/image/wepik-export-20230720204649mYh0 1.png'
import image3 from '../assets/image/Rectangle_4347-removebg-preview.png'
import image4 from '../assets/image/Rectangle_4348-removebg-preview.png'
import Image from 'next/image';
import { lexend_exa } from '@/font';

const BestCollections = () => {
    return (
        <div className='hidden lg:block'>
            <div className='text-center font-bold text-[26px] my-5'>
                <p className={lexend_exa.className}>OUR BEST COLLECTIONS</p>
            </div>
            <div className='grid grid-cols-2 gap-5'>
                <div className=' bg-[#D9D9D9]'>
                    <div className='h-[500px]  best-collection-bg w-full'>
                        <Image src={image1} alt='img' className='w-full h-full' />
                    </div>
                    <div className='p-5 text-[28px] mt-[-130px] text-white font-[800]'>
                        <p className={lexend_exa.className}>Trendy Sweatshirts</p>
                        <p className={lexend_exa.className}>And Hoodies</p>
                    </div>
                </div>
                <div className=' bg-[#ECE65A]'>
                    <div className='h-[500px]  best-collection-bg w-full'>
                        <Image src={image2} alt='img' className='w-full h-full' />
                    </div>
                    <div className='p-5 text-[28px] mt-[-130px] text-white font-[800]'>
                        <p className={lexend_exa.className}>Customized</p>
                        <p className={lexend_exa.className}>Clothing</p>
                    </div>
                </div>
                <div className='bg-[#D9D9D9] '>
                    <div className='h-[500px]  best-collection-bg w-full'>
                        <Image src={image3} alt='img' className='w-full h-full' />
                    </div>
                    <div className='p-5 text-[28px] mt-[-130px] text-white font-[800]'>
                        <p className={lexend_exa.className}>Top Quality </p>
                        <p className={lexend_exa.className}>Products</p>
                    </div>
                </div>
                <div className='bg-[#D9D9D9] '>
                    <div className='h-[500px]  best-collection-bg w-full'>
                        <Image src={image4} alt='img' className='w-full h-full' />
                    </div>
                    <div className='p-5 text-[28px] mt-[-130px] text-white font-[800]'>
                        <p className={lexend_exa.className}>Trending</p>
                        <p className={lexend_exa.className}>Jackets </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestCollections;