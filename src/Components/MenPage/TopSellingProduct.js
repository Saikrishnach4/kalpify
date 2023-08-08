import Image from 'next/image';
import React, { useState } from 'react';
import left from '../../assets/menPage/left.png'
import right from '../../assets/menPage/right.png'
import leftS from '../../assets/menPage/ORH9NG1 left.png'
import rightS from '../../assets/menPage/ORH9NG1 right.png'
import rightArrow from '../../assets/menPage/rightAr (1).png'
import leftArrow from '../../assets/menPage/leftArr.png'
import shirt1 from '../../assets/menPage/ORH9NG12 1.png'

import shadow from '../../assets/menPage/shadow.png'

const shirts = [shirt1];

const TopSellingProduct = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % shirts.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + shirts.length) % shirts.length);
    };
    return (
        <div className='my-12'>
            <div className='flex justify-center items-center gap-5'>
                <Image src={left} alt='img' className='w-[150px]' />
                <p className='text-[30px] font-medium'>Top Selling Products</p>
                <Image src={right} alt='img' className='w-[150px]' />
            </div>
            <div className='mt-10'>
                <div className='flex'>
                    <div>
                        <Image src={leftS} alt='img' />
                    </div>
                    <div className='flex items-center'>
                        <Image src={leftArrow} className='w-[70px]' alt='Previous' onClick={handlePrev} />
                        <div className='flex flex-col justify-center'>
                            <Image src={shirts[currentIndex]} alt='Shirt' />
                            <Image src={shadow} alt='Shadow' className='h-[28px] pr-5' />
                        </div>
                        <Image src={rightArrow} className='w-[70px]' alt='Next' onClick={handleNext} />
                    </div>
                    <div>
                        <Image src={rightS} alt='img' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopSellingProduct;