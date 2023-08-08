import Image from 'next/image';
import React from 'react';
import shirt from '../../assets/shirt/ORH9NG14 1.png'
import coupon from '../../assets/icon/Ticket_use_duotone.png'
import { jetBrains_Mono } from '@/font';

const CartDetails = () => {
    return (
        <div>
            <div className='lg:hidden'>
                <p className='text-[16px] font-normal'>My Cart</p>
                <p className='text-[15px] text-[#909090] font-normal'>products to checkout</p>
            </div>
            {/* two cards  */}
            <div className='bg-[#ECECEC] h-[104px] my-5  p-3 rounded-[7px] lg:hidden'>
                <div className=' w-full flex gap-2'>
                    <div className='gradiant-bg-one w-[20%] text-[15px] flex flex-col justify-center items-center p-1 rounded-[13px]'>
                        <p className='text-[#1D3675] '>+</p>
                        <p>1x</p>
                        <p className='text-[#1D3675]'>-</p>
                    </div>
                    <div className='gradiant-bg-two bg-[#E2E2E2] w-[80%] flex flex-col justify-center  px-4 rounded-[13px]'>
                        <p className='text-[12px]'>Last man in the earth</p>
                        <p className='text-[10px] text-[#565656]'>₹ 599. 00 <span className='text-[#868686]'> | </span> <span> 1x </span><span className='text-[#868686]'> | </span><span> S-M</span> </p>
                    </div>
                </div>
                <div className='flex justify-end mt-[-90px]'>
                    <Image src={shirt} alt='image' />
                </div>
            </div>
            <div className='bg-[#ECECEC] h-[104px] my-5  p-3 rounded-[7px] lg:hidden'>
                <div className=' w-full flex gap-2'>
                    <div className='gradiant-bg-one w-[20%] text-[15px] flex flex-col justify-center items-center p-1 rounded-[13px]'>
                        <p className='text-[#1D3675] '>+</p>
                        <p>1x</p>
                        <p className='text-[#1D3675]'>-</p>
                    </div>
                    <div className='gradiant-bg-two bg-[#E2E2E2] w-[80%] flex flex-col justify-center  px-4 rounded-[13px]'>
                        <p className='text-[12px]'>Last man in the earth</p>
                        <p className='text-[10px] text-[#565656]'>₹ 599. 00 <span className='text-[#868686]'> | </span> <span> 1x </span><span className='text-[#868686]'> | </span><span> S-M</span> </p>
                    </div>
                </div>
                <div className='flex justify-end mt-[-90px]'>
                    <Image src={shirt} alt='image' />
                </div>
            </div>
            {/* two cards  */}

            <div className='flex gap-3'>
                <div className='bg-[#EDEDED] flex justify-center items-center px-4 gap-2 rounded-[13px] border-[#B0B0B0] border-[1px] h-[46px] lg:w-[365px] lg:h-[45px]'>
                    <Image src={coupon} alt='imag' className='lg:w-[23px] lg:h-[20px]' />
                    <input type="text" placeholder='Enter Coupon Code' className='w-full text-[#6C6C6C] text-[12px] outline-none bg-[#EDEDED] lg:text-[20px]' />
                </div>
                <div className='bg-[#EDEDED] flex justify-center items-center px-4 gap-2 rounded-[13px] border-[#B0B0B0] border-[1px] h-[46px] text-[12px] lg:w-[100px] lg:h-[45px] lg:text-[18px]'>
                    <button className={jetBrains_Mono.className}>Apply</button>
                </div>
            </div>
            {/* price details  */}
            <div className='mt-5 mb-12 lg:hidden'>
                <p className='text-[16px] font-normal'>Price Details</p>
                <div className='flex justify-between text-[11px] text-[#636363] mt-3'>
                    <p>Last man in earth men’s T-Shirt</p>
                    <p>  799. 00</p>
                </div>
                <div className='flex justify-between my-1 text-[11px] text-[#636363]'>
                    <p>Coupon Discount</p>
                    <p className='text-[#20A714]'>  -₹ 299. 00</p>
                </div>
                <div className='flex justify-between text-[11px] text-[#636363]'>
                    <p>Delivery</p>
                    <p className='text-[#20A714]'>Free</p>
                </div>
                <div className='mt-3 border-dashed w-full border-[1px] border-[#D3D3D3]' />
                <div className='flex justify-between text-[11px] text-[#636363] mt-3'>
                    <p>Total</p>
                    <p> ₹ 599. 00</p>
                </div>
            </div>
        </div>
    );
};

export default CartDetails;