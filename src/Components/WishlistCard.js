import Image from 'next/image';
import React from 'react';
import shirt from '../assets/shirt/Rectangle_4378-removebg-preview.png'
import love from '../assets/icon/heartbig.png'
import { jetBrains_Mono } from '@/font';
import bagultra from '../assets/icon/Bag_alt_duotone.png'
import trash from '../assets/icon/Trash_duotone.png'

const WishlistCard = () => {
    return (
        <div>
            <div className='bg-[#D9D9D9] h-auto shadow-xl rounded-[7px]' >
                <div className='flex justify-end pe-5 pt-5 '>
                    <Image src={love} alt='img' className='p-2 bg-white rounded-full' />
                </div>
                <div className='flex justify-center items-center mt-[-30px]'>
                    <Image src={shirt} alt='shirt' />
                </div>
                <div className='h-auto bg-white mt-[-50px] z-10 relative' style={{ borderBottomLeftRadius: '7px', borderBottomRightRadius: '7px' }} >
                    <div className='px-3 py-2'>
                        <p className='text-[20px] font-normal'><span className={jetBrains_Mono.className}>T-Shirt</span> </p>
                        <p className='text-[18px] font-normal'>Panda on Mars T-Shirt for Men</p>
                        <div className={jetBrains_Mono.className}>
                            <div className='flex justify-between items-center'> <p className='text-[26px] font-bold  text-[#565656]'>₹ 599.00 </p>
                                <p><strike className='text-[#565656] text-[22px] font-normal'>₹699.00 </strike> </p></div>
                            <p className='flex justify-end'><span className='text-[#03A300] text-[20px]'> 20% OFF </span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-2 gap-3 items-center'>
                <button className=' w-[45px] h-[40px] border-[1px] border-[#9A9A9A] rounded-[10px] bg-[#C7C7C7]'>
                    <Image src={bagultra} alt='img' className=' w-full h-full' />
                </button>
                <button className=' w-[45px] h-[40px] border-[1px] border-[#9A9A9A] rounded-[10px] bg-[#C7C7C7]'>
                    <Image src={trash} alt='img' className=' w-full h-full' />
                </button>
            </div>
        </div>
    );
};

export default WishlistCard;