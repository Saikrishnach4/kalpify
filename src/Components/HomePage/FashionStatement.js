import Image from 'next/image';
import React, { useState } from 'react';
import icon from '../../assets/icon/system-outline-55-error 1.png'
import infoImage from '../../assets/image/hELP.png'
import GeneratePopup from '../GeneratePopup/GeneratePopup';

const FashionStatement = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    }
    const closeModal = () => {
        setIsOpen(false);
    };
    return (
        <div className='h-auto lg:h-auto border-[1px] border-[#898989] rounded-[5px] p-4 mt-5 mx-5 lg:mx-12'>
            <div>
                <button className='w-full flex justify-end' >
                    <Image onClick={openModal} src={icon} alt='img' className='lg:w-[44px] lg:h-[44px] w-[30px] h-[30px]' />
                </button>
                {
                    isOpen && (
                        <div className="fixed inset-0 flex items-center justify-center z-20">
                            <div className="bg-gray-800 opacity-75 absolute inset-0"></div>
                            <div className="bg-white mx-5 lg:mx-0 z-20 p-4 rounded-[17px] lg:mt-12 md:w-[500px] lg:w-[800px] py-12">
                                <div className='flex justify-center items-center'>
                                    <Image src={infoImage} alt='img' className='w-[200px] lg:w-[250px] h-auto' />
                                </div>
                                <p className='mt-[-20px] lg:mt-[-40px] text-center font-semibold lg:text-[20px] text-[18px]'>How to generate prompt </p>
                                <div className='flex justify-center items-center  my-3'>
                                    <ul className='flex flex-col gap-1 text-[#4E4D4D] text-[12px] lg:text-[14px] font-semibold'>
                                        <li>1. Lorem ipsum dolor sit amet consectetur. Ridiculus nunc
                                            tristique nunc lectus.</li>
                                        <li>2. Lorem ipsum dolor sit amet consectetur. Ridiculus nunc
                                            tristique nunc lectus.</li>
                                        <li>3. Lorem ipsum dolor sit amet consectetur. Ridiculus nunc
                                            tristique nunc lectus.</li>
                                        <li>4. Lorem ipsum dolor sit amet consectetur. Ridiculus nunc
                                            tristique nunc lectus.</li>
                                        <li>5. Lorem ipsum dolor sit amet consectetur. Ridiculus nunc
                                            tristique nunc lectus.</li>
                                    </ul>
                                </div>
                                <div className='flex justify-center items-center'>
                                    <button
                                        onClick={closeModal}
                                        className="text-[18px] text-[#FFFFFF] bg-[#444242] w-[158px] h-[40px] rounded-[7px]"
                                    >
                                        Got It
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div >
            <p className='text-[12px] font-normal text-[#7D7D7D] text-center lg:text-[38px] lg:mt-[-20px]'>Transfer Your Words Into</p>
            <p className='text-[12px] font-normal text-[#7D7D7D] text-center lg:text-[38px]'>Personalized </p>
            <p className='text-[15px] font-bold text-[#3D3B3B] text-center lg:text-[38px]'>Fashion Statements  </p>
            <div className='flex justify-center items-center border-[1px] border-[#989898] h-[39px] lg:h-[90px] bg-[#E4E4E4] rounded-[10px] lg:rounded-[28px] mt-3 lg:mx-16'>
                <input type="text" name="" id="" className='outline-none lg:px-12 bg-[#E4E4E4] w-full px-5 text-[8px] lg:text-[26px]' placeholder='Type text to generate ' />
            </div>
            <p className='text-[8px] tracking-[9%] my-3 text-[#A6A0A0] lg:text-[20px] lg:mx-20'>Popular Commands </p>
            <div className='flex gap-2 lg:text-[20px] text-[8px] lg:ms-20'>
                <button className=' text-[#7D7D7D] bg-[#E4E4E4] h-[32px] lg:h-[60px] rounded-[6px] lg:px-5 px-[7px]'>Panda On mars</button>
                <button className=' text-[#7D7D7D] bg-[#E4E4E4] h-[32px] lg:h-[60px] rounded-[6px] lg:px-5 px-[7px]'>Cat in spaceship </button>
                <button className=' text-[#7D7D7D] bg-[#E4E4E4] h-[32px] lg:h-[60px] rounded-[6px] lg:px-5 px-[7px] hidden lg:block'>Flying Car</button>
                <button className=' text-[#7D7D7D] bg-[#E4E4E4] h-[32px] lg:h-[60px] rounded-[6px] lg:px-5 px-[7px]'>Last human in the earth</button>
            </div>
            <div className='flex justify-center items-center mt-3'>

                <GeneratePopup />
            </div>
        </div >
    );
};

export default FashionStatement;