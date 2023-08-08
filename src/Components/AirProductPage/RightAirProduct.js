import Image from 'next/image';
import React, { useState } from 'react';
import shirt from '../../assets/image/ORH9NG14 2.png'
import Roundedline from '../../assets/image/Ellipse 189.png'
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import CustomRadio from '../Cart/CustomRadio';
import CustomApplyCheckBox from './CustomApplyCheckBox';

const RightAirProduct = () => {
    const [activeButton, setActiveButton] = useState('Buy Now');

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    return (
        <div className='mt-5'>
            <div className='flex justify-center items-center'>
                <Image src={shirt} alt='img' />
            </div>
            <div className='flex justify-center items-center '>
                <Image src={Roundedline} alt='img' />
            </div>
            <div className='flex justify-center items-center mt-[-25px]'>
                <div className='w-[47px] h-[47px] bg-[#4F4F4F] flex justify-center items-center text-white rounded-full'>
                    <div className='text-[20px] mt-1'>
                        <button><AiFillCaretLeft /></button>
                        <button><AiFillCaretRight /></button>
                    </div>
                </div>
            </div>
            <p className='font-light text-[20px] text-center mt-3'>360° View</p>
            <div className='flex justify-center items-center gap-4 mt-5 lg:mt-28'>
                <CustomApplyCheckBox />
                <p className='text-[16px] font-light lg:text-[18px]'>Apply design in your Back</p>
            </div>
            <div className='flex justify-center items-center gap-5 mt-5 lg:mt-10 lg:text-[24px]
text-[16px]'>
                <button
                    className={`px-5 lg:px-8 py-2 lg:py-5 rounded-[6px]  text-white ${activeButton === 'Cart' ? 'bg-[#545454]' : 'bg-[#8F8F8F]'
                        }`}
                    onClick={() => handleButtonClick('Cart')}
                >
                    Cart
                </button>
                <button
                    className={`px-5 lg:px-8 py-2 lg:py-5 rounded-[6px]  text-white ${activeButton === 'Buy Now' ? 'bg-[#545454]' : 'bg-[#8F8F8F]'
                        }`}
                    onClick={() => handleButtonClick('Buy Now')}
                >
                    Buy Now
                </button>
            </div>
        </div>
    );
};

export default RightAirProduct;