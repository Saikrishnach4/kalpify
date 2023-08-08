import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import img1 from '../../assets/menPage/1 (2).png'
import img2 from '../../assets/menPage/2 (2).png'
import img3 from '../../assets/menPage/3 (2).png'
import img4 from '../../assets/menPage/4 (2).png'
import img5 from '../../assets/menPage/5 (2).png'
import img6 from '../../assets/menPage/6 (2).png'
import { AiFillStar } from 'react-icons/ai';
import { jetBrains_Mono } from '@/font';
import ProductSize from './ProductSize';
import ProductColor from './ProductColor';
import ProductCategory from './ProductCategory';
import ProductGender from './ProductGender';
import DeliveryInformation from './DeliveryInformation';
import Ratings from './Ratings';
import CustomerPhoto from './CustomerPhoto';
import CustomerReview from './CustomerReview';
import TrendingProductsPrdoductDet from './TrendingProductsPrdoductDet';
import MobileBanner from './MobileBanner';
import LargeScreenContent from './LargeScreenContent';
import icon from '../../assets/icon/Chart_light.png'
import color from '../../assets/icon/color-wheel 1.png'
import cart from '../../assets/icon/shopping-cart.png'
import Link from 'next/link';
import DesktopTrendingProduct from './DesktopTrendingProduct';
import PhoneTrendingProduct from './PhoneTrendingProduct';

const ProductDisplayPage = () => {
    const [activeButton, setActiveButton] = useState('');
    const [selectedButton, setSelectedButton] = useState('Buy Now');

    const handleButtonClick = (button) => {
        setSelectedButton(button);
    };


    // scrool 



    // active size 
    const [activeIndex, setActiveIndex] = useState(0);

    const handleTagClick = (index) => {
        setActiveIndex(index);
    };
    return (
        <div className='pb-20'>
            <div className='h-[33px]  shadow-set'> </div>
            <div className='w-full flex lg:px-16 px-5 gap-12 lg:mt-24'>
                <div className='lg:w-[50%] h-full hidden lg:block'>
                    <div className='w-full grid grid-cols-2 gap-5'>
                        <Image src={img1} alt='img' />
                        <Image src={img2} alt='img' />
                        <Image src={img3} alt='img' />
                        <Image src={img4} alt='img' />
                        <Image src={img5} alt='img' />
                        <Image src={img6} alt='img' />
                    </div>
                </div>
                <div className='lg:w-[50%]'>
                    <div className='w-full'>
                        {/* large screen  */}
                        <div className='hidden lg:block'>
                            <LargeScreenContent />
                        </div>
                        {/* large screen  */}
                        {/* mobile screen  */}
                        <div className='lg:hidden'>
                            <MobileBanner />
                            <div className=''>
                                <div>
                                    <div className='flex justify-end me-5 items-center gap-1'>
                                        <p className='text-[10px] font-normal'>Size Chart</p>
                                        <Image src={icon} alt='img' className='' />
                                    </div>
                                </div>
                                <div className='bg-[#DEDEDE] rounded-[12px] px-3 py-4'>
                                    <div className='flex gap-5 items-center mt-5'>
                                        <p className='text-[10px]'>Selected Size</p>
                                        <div className='flex gap-5 text-[16px] text-[#7D7D7D]'>
                                            <p
                                                className={`cursor-pointer ${activeIndex === 0 ? 'text-black' : ''}`}
                                                onClick={() => handleTagClick(0)}
                                            >
                                                S
                                            </p>
                                            <p
                                                className={`cursor-pointer ${activeIndex === 1 ? 'text-black' : ''}`}
                                                onClick={() => handleTagClick(1)}
                                            >
                                                M
                                            </p>
                                            <p
                                                className={`cursor-pointer ${activeIndex === 2 ? 'text-black' : ''}`}
                                                onClick={() => handleTagClick(2)}
                                            >
                                                L
                                            </p>
                                            <p
                                                className={`cursor-pointer ${activeIndex === 3 ? 'text-black' : ''}`}
                                                onClick={() => handleTagClick(3)}
                                            >
                                                XL
                                            </p>
                                            <p
                                                className={`cursor-pointer ${activeIndex === 4 ? 'text-black' : ''}`}
                                                onClick={() => handleTagClick(4)}
                                            >
                                                XXL
                                            </p>
                                            <p
                                                className={`cursor-pointer ${activeIndex === 5 ? 'text-black' : ''}`}
                                                onClick={() => handleTagClick(5)}
                                            >
                                                S
                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex gap-5 items-center mt-3'>
                                        <p className='text-[10px]'>Selected Color</p>
                                        <div className='flex gap-5 text-[16px] items-center'>
                                            <div className='border-2 border-white rounded-full'>
                                                <div className='w-[20px] h-[20px] bg-black rounded-full' />
                                            </div>
                                            <div>
                                                <div className='w-[20px] h-[20px] bg-[#FCA239] rounded-full' />
                                            </div>
                                            <div>
                                                <div className='w-[20px] h-[20px] bg-[#FD3A3A] rounded-full' />
                                            </div>
                                            <div>
                                                <div className='w-[20px] h-[20px] bg-[#FC3974] rounded-full' />
                                            </div>
                                            <div>
                                                <Image src={color} alt='img' className='w-[24px] h-[24px]' />
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                            {/* <div className='mt-3 flex gap-4'>
                                <button className='px-4 flex justify-center items-center py-2 rounded-[11px] bg-[#D9D9D9] text-[16px]'><Image src={cart} alt='img' /> Cart</button>
                                <button className='bg-[#858585] text-[16px] rounded-[11px] px-5 py-2'>Buy Now</button>
                            </div> */}
                        </div>
                        {/* mobile screen  */}

                        {/* size  */}

                        <div className='hidden lg:block'>
                            <ProductSize />
                            {/* color  */}
                            <ProductColor />
                            {/* category  */}
                            <ProductCategory />
                            {/* gender  */}
                            <ProductGender />
                            {/* button  */}

                        </div>
                        <div className='flex gap-5 mt-3 lg:mt-0'>
                            <Link href='/cart'>
                                <button
                                    className={`px-5 py-2 rounded-[9px] lg:h-[50px] text-[16px] font-[400px] ${selectedButton === 'Cart' ? 'bg-[#5A5A5A] text-white' : 'bg-[#D9D9D9]'
                                        }`}
                                    onClick={() => handleButtonClick('Cart')}
                                >
                                    Cart
                                </button></Link>
                            <button
                                className={` py-2 px-5 lg:w-[180px] rounded-[9px] lg:h-[50px] text-[16px] font-[400px] ${selectedButton === 'Buy Now' ? 'bg-[#5A5A5A] text-white' : 'bg-[#D9D9D9]'
                                    }`}
                                onClick={() => handleButtonClick('Buy Now')}
                            >
                                Buy Now
                            </button>
                        </div>
                        {/* delivery information  */}
                        <DeliveryInformation />
                        <div className='hidden lg:block'>
                            <Ratings />
                            <CustomerPhoto />
                            <CustomerReview />

                        </div>

                    </div>
                </div>
            </div>
            <div className='hidden lg:block'>
                <DesktopTrendingProduct />
            </div>
            <div className='lg:hidden'>
                <PhoneTrendingProduct />
            </div>

        </div>
    );
};

export default ProductDisplayPage;