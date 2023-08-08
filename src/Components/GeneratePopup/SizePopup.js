
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import shirt from '../../assets/popupBox/t size 1.png';
import line from '../../assets/popupBox/Vector 111.png';
import LoadingCircle from './LoadingCircle';

const SizePopup = () => {
    const [activeDot, setActiveDot] = useState('XXL');

    const handleSizeClick = (size, event) => {
        event.preventDefault(); // Prevent default behavior
        event.stopPropagation(); // Prevent event propagation

        setActiveDot(size);
    };


    return (
        <div className=''>

            <div className='flex  justify-between w-full  ' >

                <div className='w-full    lg:mx-0'>
                    <div className='flex justify-center items-center'>
                        <LoadingCircle />
                    </div>
                    <h1 className="text-[18px] lg:text-[24px] font-bold text-center text-black">
                        <span >Your Design is getting Ready</span>
                    </h1>
                    <p className="text-[14px] lg:text-[20px] font-light text-center"> <span >Till Then select your preferances </span></p>
                    <p className="text-[14px] lg:text-[20px] font-light text-center"><span >Select Size</span></p>
                    <div className='flex justify-center items-center '>
                        <div className=''>
                            <Image src={shirt} alt='shirt' className='w-full h-full' />
                        </div>
                    </div>
                    <div className='px-5 flex justify-center items-center mt-[-80px] lg:mt-[-150px] lg:px-0 '>

                        <Image src={line} alt='line' className='lg:w-[429px] lg:h-[29px]' />

                    </div>
                    <div className=''>
                        <div className='lg:w-[429px] mx-auto z-1 px-5 lg:px-0 '>
                            <div className='grid grid-cols-5  justify-center text-[20px]'>
                                {/* Render the dots based on the active size */}
                                <div className='flex justify-center'>
                                    <div
                                        className={`xxl-dot bg-[#D9D9D9] w-[22px] h-[22px] lg:w-[36px] lg:h-[36px] rounded-full md:mt-[-15px] mt-[-20px] lg:mt-[-32px] ${activeDot === 'XXL' ? 'active' : 'hidden'
                                            }`}
                                    /></div>
                                <div className='flex justify-center'>
                                    <div
                                        className={`xl-dot bg-[#D9D9D9] w-[22px] h-[22px] lg:w-[36px] lg:h-[36px] rounded-full md:mt-[-15px] mt-[-20px] lg:mt-[-34px] ${activeDot === 'XL' ? 'active' : 'hidden'
                                            }`}
                                    /></div>
                                <div className='flex justify-center'>
                                    <div
                                        className={`l-dot bg-[#D9D9D9] w-[22px] h-[22px] lg:w-[36px] lg:h-[36px] rounded-full md:mt-[-15px] mt-[-21px] lg:mt-[-36px] ${activeDot === 'L' ? 'active' : 'hidden'
                                            }`}
                                    />
                                </div>
                                <div className='flex justify-center'>
                                    <div
                                        className={`m-dot bg-[#D9D9D9] w-[22px] h-[22px] lg:w-[36px] lg:h-[36px] rounded-full md:mt-[-15px] mt-[-22px] lg:mt-[-38px] ${activeDot === 'M' ? 'active' : 'hidden'
                                            }`}
                                    />
                                </div>
                                <div className='flex justify-center'>
                                    <div
                                        className={`s-dot bg-[#D9D9D9] w-[22px] h-[22px] lg:w-[36px] lg:h-[36px] rounded-full md:mt-[-15px] mt-[-23px] lg:mt-[-40px] ${activeDot === 'S' ? 'active' : 'hidden'
                                            }`}
                                    />
                                </div>
                            </div>
                            <div className='text-white text-[20px]  grid grid-cols-5 font-medium justify-center h-[60px] mt-[-15px] lg:h-[100px] lg:mt-[-30px]' onClick={(event) => event.stopPropagation()} >
                                <button className={`text-center ${activeDot === 'XXL' ? 'active text-black' : ''}`} onClick={(event) => handleSizeClick('XXL', event)}>
                                    XXL
                                </button>
                                <button className={`text-center ${activeDot === 'XL' ? 'active text-black' : ''}`} onClick={(event) => handleSizeClick('XL', event)}>
                                    XL
                                </button>
                                <button className={`text-center ${activeDot === 'L' ? 'active text-black' : ''}`} onClick={(event) => handleSizeClick('L', event)}>
                                    L
                                </button>
                                <button className={`text-center ${activeDot === 'M' ? 'active text-black' : ''}`} onClick={(event) => handleSizeClick('M', event)}>
                                    M
                                </button>
                                <button className={`text-center ${activeDot === 'S' ? 'active text-black' : ''}`} onClick={(event) => handleSizeClick('S', event)}>
                                    S
                                </button>

                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default SizePopup;
