import TopNavTwo from '@/Components/Navbar/TopNavTwo';
import Image from 'next/image';
import React from 'react';
import shirt1 from '../assets/shirt/1 (2).png'
import TrackingProgress from '@/Components/TrackingProgress';
import Link from 'next/link';

const trackorder = () => {
    return (
        <div className='pb-12'>
            <TopNavTwo />
            <div className='mx-5 mt-5'>
                <p className='text-[16px] font-normal'>Track Your Order</p>
                <div className='bg-[#EFEFEF] mt-3 rounded-[17px] flex w-full '>
                    <div className='bg-[#D9D9D9] flex justify-center items-center rounded-[17px] [135px] '>
                        <Image src={shirt1} alt='' className='h-full' />
                    </div>
                    <div className='w-full py-3 px-5'>
                        <p className='text-[13px] font-normal'>Panda on space men’s T-Shirt</p>
                        <p className='text-[#888888] text-[10px] font-normal'>Lorem ipsum dolor sit amet consectetur.</p>

                        <div className='flex justify-between'>
                            <p className='text-[14px] font-normal'>₹ 599. 00</p>
                            <Link href='/returnorder'>  <button className='bg-[#D4D4D4] w-[96px] h-[33px] rounded-[5px]'>Return</button></Link>
                        </div>
                    </div>
                </div>
                <div className='text-[13px] flex justify-between mt-6 mb-3 ms-5'>
                    <p className='font-semibold'>Track Your Order</p>
                    <p className='text-[#676767] font-normal'>Track Here</p>
                </div>
                <div>
                    <TrackingProgress />
                </div>
                {/* deliverd to  */}
                <div className='mt-3'>
                    <p className='text-[15px] font-bold text-black'>Order Information</p>
                    <p className='text-[15px] font-bold text-[#909090]'>Deliver to</p>
                    <p className='text-[15px] font-bold text-[#636363] mt-2'>Jyotirmoy Mondal</p>
                    <p className='text-[14px] font-normal mt-1 text-[#636363]'>G-18-2 Bapuji  Nagar, Jadavpur, Kolkata-92, West Bengal. Zip-700092 <br />
                        Mobile - +91  86531 38715</p>
                    <p className='text-[#00AB1B] text-[13px] font-bold my-1'>Free delivery within 3-4 days</p>
                </div>
                <div className='w-full h-[1px] bg-[#C8C8C8] mt-3 mb-5' />
                {/* price details  */}
                <div className=''>
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
        </div>
    );
};

export default trackorder;