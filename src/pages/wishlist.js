import Layout from '@/Components/Layout/Layout';
import TopNavTwo from '@/Components/Navbar/TopNavTwo';
import Image from 'next/image';
import React from 'react';
import shirt from '../assets/shirt/Rectangle_4188-removebg-preview.png'
import shirtTwo from '../assets/shirt/Rectangle_4231-removebg-preview.png'
import shirtThree from '../assets/shirt/shirt-removebg-preview.png'
import dlt from '../assets/icon/Trash.png'
import bag from '../assets/icon/Bag_duotone.png'
import icon from '../assets/icon/Group 90.png'
import WishlistCard from '@/Components/WishlistCard';



const wishlist = () => {
    return (
        <Layout>
            <div className='lg:hidden'>
                <TopNavTwo />
            </div>
            <div className='pb-40 mx-5 lg:mt-24'>
                <p className='text-[16px] font-normal mt-5 lg:hidden'>Wish List</p>
                <p className='text-[30px] ms-5 hidden lg:block lg:font-bold'>Wish List</p>
                {/* 1st card for mobile */}
                <div className='grid grid-cols-2 mt-3 gap-2 lg:hidden' >
                    <div>
                        <div className='bg-[#D9D9D9] h-auto shadow-xl rounded-[7px]' >
                            <div className='flex justify-center items-center mt-[-px]'>
                                <Image src={shirt} alt='shirt' />
                            </div>
                            <div className='h-auto bg-white mt-[-60px] z-10 relative' style={{ borderBottomLeftRadius: '7px', borderBottomRightRadius: '7px' }} >
                                <div className='px-3 py-2'>
                                    <p className='text-[10px] font-normal'>Flying Car men’s Tshirt</p>
                                    <p className='text-[6px] font-normal'>Lorem ipsum dolor sit amet consectetur.</p>
                                    <div>
                                        <p className='text-[13px] font-bold  text-[#565656]'>₹ 599.00 <strike className='text-[#565656] text-[6px] font-normal'>₹699.00 </strike><span className='text-[#03A300] text-[6px]'> 20% OFF </span> </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-1 mt-5 mx-5 w-full'>
                            <div className='bg-[#D9D9D9] rounded-[7px] h-[27px]  flex justify-center items-center p-1'>
                                <Image src={dlt} alt='delete' className='' />
                            </div>
                            <div className='bg-[#D9D9D9] h-[27px] rounded-[7px] flex px-2 text-[10px] justify-center items-center '>
                                <Image src={bag} alt='delete' className=' ' />
                                <p>Add to Bag</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='bg-[#D9D9D9] h-auto shadow-xl rounded-[7px]' >
                            <div className='flex justify-center items-center mt-[-px]'>
                                <Image src={shirtTwo} alt='shirt' />
                            </div>
                            <div className='h-auto bg-white mt-[-50px] z-10 relative' style={{ borderBottomLeftRadius: '7px', borderBottomRightRadius: '7px' }} >
                                <div className='px-3 py-2'>
                                    <p className='text-[10px] font-normal'>Flying Car men’s Tshirt</p>
                                    <p className='text-[6px] font-normal'>Lorem ipsum dolor sit amet consectetur.</p>
                                    <div>
                                        <p className='text-[13px] font-bold  text-[#565656]'>₹ 599.00 <strike className='text-[#565656] text-[6px] font-normal'>₹699.00 </strike><span className='text-[#03A300] text-[6px]'> 20% OFF </span> </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-1 mt-5 mx-5 w-full'>
                            <div className='bg-[#D9D9D9] rounded-[7px] h-[27px]  flex justify-center items-center p-1'>
                                <Image src={dlt} alt='delete' className='' />
                            </div>
                            <div className='bg-[#D9D9D9] h-[27px] rounded-[7px] flex px-2 text-[10px] justify-center items-center '>
                                <Image src={bag} alt='delete' className=' ' />
                                <p>Add to Bag</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='bg-[#D9D9D9] h-auto shadow-xl rounded-[7px]' >
                            <div className=' h-[185px]'>
                                {/* <Image src={shirt} alt='shirt' /> */}
                                <div className='flex justify-end pt-3 pe-3'>
                                    <Image src={icon} alt='icon' />
                                </div>
                            </div>
                            <div className='h-auto bg-white mt-[-60px] z-10 relative' style={{ borderBottomLeftRadius: '7px', borderBottomRightRadius: '7px' }} >
                                <div className='px-3 py-2'>
                                    <p className='text-[10px] font-normal'>Flying Car men’s Tshirt</p>
                                    <p className='text-[6px] font-normal'>Lorem ipsum dolor sit amet consectetur.</p>
                                    <div>
                                        <p className='text-[13px] font-bold  text-[#565656]'>₹ 599.00 <strike className='text-[#565656] text-[6px] font-normal'>₹699.00 </strike><span className='text-[#03A300] text-[6px]'> 20% OFF </span> </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-1 mt-5 mx-5 w-full'>
                            <div className='bg-[#D9D9D9] rounded-[7px] h-[27px]  flex justify-center items-center p-1'>
                                <Image src={dlt} alt='delete' className='' />
                            </div>
                            <div className='bg-[#D9D9D9] h-[27px] rounded-[7px] flex px-2 text-[10px] justify-center items-center '>
                                <Image src={bag} alt='delete' className=' ' />
                                <p>Add to Bag</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='bg-[#D9D9D9] h-auto shadow-xl rounded-[7px]' >
                            <div className='flex justify-center items-center mt-[-px]'>
                                <Image src={shirtThree} alt='shirt' />
                            </div>
                            <div className='h-auto bg-white mt-[-60px] z-10 relative' style={{ borderBottomLeftRadius: '7px', borderBottomRightRadius: '7px' }} >
                                <div className='px-3 py-2'>
                                    <p className='text-[10px] font-normal'>Flying Car men’s Tshirt</p>
                                    <p className='text-[6px] font-normal'>Lorem ipsum dolor sit amet consectetur.</p>
                                    <div>
                                        <p className='text-[13px] font-bold  text-[#565656]'>₹ 599.00 <strike className='text-[#565656] text-[6px] font-normal'>₹699.00 </strike><span className='text-[#03A300] text-[6px]'> 20% OFF </span> </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-1 mt-5 mx-5 w-full'>
                            <div className='bg-[#D9D9D9] rounded-[7px] h-[27px]  flex justify-center items-center p-1'>
                                <Image src={dlt} alt='delete' className='' />
                            </div>
                            <div className='bg-[#D9D9D9] h-[27px] rounded-[7px] flex px-2 text-[10px] justify-center items-center '>
                                <Image src={bag} alt='delete' className=' ' />
                                <p>Add to Bag</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* card for large screen  */}
                <div className='hidden lg:block'>
                    <div className='mx-16 my-5 grid grid-cols-3 gap-5 '>
                        <div>
                            <WishlistCard />

                        </div>
                        <WishlistCard />
                        <WishlistCard />
                        <WishlistCard />
                        <WishlistCard />
                        <WishlistCard />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default wishlist;