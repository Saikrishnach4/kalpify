import React from 'react';
import shirt from '../assets/shirt/orangetshirt.png'
import Image from 'next/image';
import Link from 'next/link';
const OrderProductCard = () => {
    return (
        <div>
            <div className='bg-[#EFEFEF] rounded-[17px] flex w-full mt-5 '>
                <div className='bg-[#D9D9D9] flex justify-center items-center rounded-[17px] w-[20%] '>
                    <Image src={shirt} alt='' className='h-full' />
                </div>
                <div className='w-full py-5 px-5'>
                    <p className='text-[26px] font-normal'>Last Human in the Earth T-Shirt for Men</p>
                    <p className='text-[#888888] text-[16px] font-normal'>Lorem ipsum dolor sit amet consectetur. Imperdiet elementum phasellus aliquet</p>
                    <div className='w-[801px] h-[12px] bg-[#D9D9D9] mt-5 rounded-[10px]' />
                    <div className='w-[395px] h-[12px] bg-[#03A300] mt-[-13px] rounded-[10px]' />
                    <div className='w-[801px] flex justify-between z-10 mt-[-19px]'>
                        <div className='w-[25px] h-[25px] border-4 border-[#03A300] bg-white rounded-full' />
                        <div className='w-[25px] h-[25px] border-4 border-[#03A300] bg-white rounded-full' />
                        <div className='w-[25px] h-[25px] border-4 border-[#03A300] bg-white rounded-full' />
                        <div className='w-[25px] h-[25px] border-4 border-[#858585] bg-white rounded-full' />
                        <div className='w-[25px] h-[25px] border-4 border-[#858585] bg-white rounded-full' />
                    </div>
                    <div className='flex justify-between w-[801px] '>
                        <div className='text-[14px] '>
                            <p className='font-semibold'>Order Placed</p>
                            <p className='text-[#595959] text-[12px]'>Monday 12 Jul 2023</p>
                        </div>
                        <div className='text-[14px] '>
                            <p className='font-semibold'>Order Packed</p>
                            <p className='text-[#595959] text-[12px]'>Monday 12 Jul 2023</p>
                        </div>
                        <div className='text-[14px] '>
                            <p className='font-semibold'>Order Placed</p>
                            <p className='text-[#595959] text-[12px]'>Monday 12 Jul 2023</p>
                        </div>
                        <div className='text-[14px] '>
                            <p className='font-semibold'>Shipped</p>
                            <p className='text-[#595959] text-[12px]'>Monday 12 Jul 2023</p>
                        </div>
                        <div className='text-[14px] '>
                            <p className='font-semibold'>Delivered</p>

                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <Link href='/cancelorder'>  <button className='text-white w-[200px] h-[50px] bg-[#545454] rounded-[6px] text-[24px]'>
                            Cancel
                        </button></Link>                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderProductCard;