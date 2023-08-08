import React from 'react';
import shirt from '../../assets/shirt/orangetshirt.png'
import Image from 'next/image';
import { jetBrains_Mono } from '@/font';
import trash from '../../assets/icon/Trash_duotone.png'

const PcCard = () => {
    return (
        <div>
            <div className='bg-[#EBEBEB] flex rounded-[18px] w-full h-[200px]'>
                <div className='bg-[#D9D9D9] flex justify-center items-center rounded-[18px] w-[20%]'>
                    <Image src={shirt} alt='img' className='w-[180px]' />
                </div>
                <div className='w-[60%] px-16 flex flex-col h-full mt-12'>
                    <p className='text-[26px]'>Last Human in the Earth T-Shirt for Men</p>
                    <p className='text-[14px]'>Lorem ipsum dolor sit amet consectetur. Imperdiet elementum phasellus aliquet</p>
                    <div className='flex gap-3 items-center font-[800] mt-2'>
                        <p className='text-[26px] text-[#717171]'><span className={jetBrains_Mono.className}>₹ 599. 00</span> <span>|</span> </p>
                        <p className='w-[27px] rounded-full h-[27px] rounded-ful bg-[#FD3A3A] '></p>
                        <p className='text-[26px] text-[#717171]'>| <span className={jetBrains_Mono.className}>XXL</span></p>
                    </div>
                </div>
                <div className='w-[20%] flex items-center flex-col'>

                    <div className='flex items-center justify-center mt-12 '>
                        <button className='bg-[#5C5C5C] text-[36px] text-white w-[53px] h-[50px]' style={{ borderTopLeftRadius: '7px', borderBottomLeftRadius: '7px' }}>+</button>
                        <button className='bg-[#CCCCCC] text-[26px] border-[1px] border-[#636363] text-white w-[60px] h-[50px]'>1</button>
                        <button className='bg-[#5C5C5C] text-[36px] text-white w-[53px] h-[50px]' style={{ borderTopRightRadius: '7px', borderBottomRightRadius: '7px' }}>-</button>
                    </div>
                    <div className='flex justify-end w-full me-[100px] mt-5'>
                        <button className='bg-[#C7C7C7] border-[1px] border-[#9A9A9A] rounded-[10px] w-[35px]'>
                            <Image src={trash} alt='img' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PcCard;