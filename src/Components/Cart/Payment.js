import Image from 'next/image';
import React, { useState } from 'react';
import shirt from '../../assets/shirt/ORH9NG14 1.png'
import CustomRadio from './CustomRadio';

const Payment = () => {
    const [selectedOption, setSelectedOption] = useState('online');

    return (
        <div className='mb-12'>
            <div className='lg:hidden'>
                <p className='text-[16px] font-normal'>Payment</p>
                <p className='text-[15px] text-[#909090] font-normal'>Check your items and do payment for checkout</p>

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
                        <div className='flex gap-1'>
                            <p className='text-[10px] text-[#565656]'>₹ 599. 00 <span className='text-[#868686]'> | </span> </p>
                            <p className='w-[13px] h-[13px] bg-[#FD3A3A] rounded-full'> </p><p className='text-[#868686] text-[10px]'> | </p>
                            <p className='text-[10px] text-[#565656]'> S-M</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-end mt-[-90px]'>
                    <Image src={shirt} alt='image' />
                </div>
            </div>
            {/* radio button  */}
            <div>
                <p className='text-[13px] text-[#909090] font-bold lg:text-[18px] lg:text-black'>Payment Method</p>
                <div className='flex gap-2 lg:gap-5 mt-2 w-full'>
                    <div className='flex gap-1 items-center' onClick={() => setSelectedOption('online')}>
                        <CustomRadio active={selectedOption === 'online'} />
                        <p
                            className={` font-normal text-[13px] lg:text-[20px] ${selectedOption === 'online' ? 'text-black' : 'text-[#636363] '
                                }`}
                        >
                            Online Payment
                        </p>
                    </div>
                    <div className='flex gap-1 items-center' onClick={() => setSelectedOption('cash')}>
                        <CustomRadio active={selectedOption === 'cash'} />
                        <p
                            className={`font-normal text-[13px] lg:text-[20px] ${selectedOption === 'cash' ? 'text-black' : 'text-[#636363] '
                                }`}
                        >
                            Cash On Delivery
                        </p>
                    </div>
                </div>
            </div>
            {/* deliverd to  */}
            <div className='mt-3 lg:hidden'>
                <p className='text-[15px] font-bold text-[#909090]'>Deliver to</p>
                <p className='text-[15px] font-bold text-[#636363] mt-2'>Jyotirmoy Mondal</p>
                <p className='text-[14px] font-normal mt-1 text-[#636363]'>G-18-2 Bapuji  Nagar, Jadavpur, Kolkata-92, West Bengal. Zip-700092 <br />
                    Mobile - +91  86531 38715</p>
                <p className='text-[#00AB1B] text-[13px] font-bold my-1'>Free delivery within 3-4 days</p>
            </div>
            <div className='w-full h-[1px] bg-[#C8C8C8] mt-3 mb-5 lg:hidden' />
            {/* price details  */}
            <div className=' lg:hidden'>
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
            <div className='w-full h-[1px] bg-[#C8C8C8] mt-5 lg:hidden' />



        </div>
    );
};

export default Payment;