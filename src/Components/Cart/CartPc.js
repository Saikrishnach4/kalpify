import React from 'react';
import PcCard from './PcCard';
import CartDetails from './CartDetails';
import Payment from './Payment';
import Link from 'next/link';

const CartPc = () => {
    return (
        <div className='mt-24 mx-5'>
            <p className='text-[28px] font-normal ms-5'>Your Shopping Cart</p>
            <div className='flex flex-col gap-4 my-5 mx-12'>
                <PcCard />
                <PcCard />
            </div>
            <div className='flex w-full px-12 py-12'>
                <div className='w-[50%] flex justify-between'>
                    <div>
                        <CartDetails />
                        <div className='my-3'>
                            <p className='text-[20px] font-bold text-black'>Delivery Address</p>
                            <p className='text-[20px] font-bold text-[#4A4A4A] mt-2'>Jyotirmoy Mondal</p>
                            <p className='text-[18px] font-normal mt-1 text-[#7A7A7A]'>G-18-2 Bapuji  Nagar, Jadavpur, Kolkata-92, West Bengal. Zip-700092 <br />
                                Mobile - +91  86531 38715</p>
                        </div>
                    </div>
                    <div className='w-[1px] h-full bg-[#7D7D7D] me-[-20px]' />
                </div>
                <div className='w-[50%] ms-16'>
                    <div className='w-full '>
                        <p className='text-[18px] font-bold'>Price Details</p>
                        <div className='flex justify-between text-[18px] text-[#636363] mt-3'>
                            <p>Last man in earth men’s T-Shirt</p>
                            <p>  799. 00</p>
                        </div>
                        <div className='flex justify-between my-1 text-[18px] text-[#636363]'>
                            <p>Coupon Discount</p>
                            <p className='text-[#20A714]'>  -₹ 299. 00</p>
                        </div>
                        <div className='flex justify-between text-[18px] text-[#636363]'>
                            <p>Delivery</p>
                            <p className='text-[#20A714]'>Free</p>
                        </div>
                        <div className='mt-3 border-dashed w-full border-[1px] border-[#D3D3D3]' />
                        <div className='flex justify-between text-[18px] text-[#636363] mt-3'>
                            <p>Total</p>
                            <p> ₹ 599. 00</p>
                        </div>
                    </div>
                    <Payment />
                </div>
            </div>
            <div className='flex justify-center items-center mb-12'>
                <Link href='/orderplaced'> <button className='text-[20px] text-[#FFFFFF] bg-[#444242] w-[158px] h-[46px] rounded-[7px]'>
                    Check Out
                </button></Link>
            </div>
        </div>
    );
};

export default CartPc;