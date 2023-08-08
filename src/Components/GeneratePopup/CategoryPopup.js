import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import male from '../../assets/popupBox/man(1) 1.png'
import female from '../../assets/popupBox/woman 1.png'
import CustomSelector from './CustomSelector';
import LoadingCircle from './LoadingCircle';

const CategoryPopup = () => {

    return (
        <div>
            <div className="flex justify-between w-full">
                <div className="w-full mx-2 lg:mx-0">
                    <div className="flex justify-center items-center">
                        <LoadingCircle />
                    </div>
                    <h1 className="text-[20px] lg:text-[24px] font-bold text-center text-black">
                        Your Design is getting Ready
                    </h1>
                    <p className="text-[16px] lg:text-[20px] font-light text-center">
                        Till Then select your preferences
                    </p>
                    <p className="text-[16px] lg:text-[20px] font-light text-center">
                        Select Category
                    </p>
                    <div className='flex gap-3 justify-center items-center '>

                        <Image src={male} alt='img' />
                        <CustomSelector />
                        <Image src={female} alt='img' />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryPopup;
