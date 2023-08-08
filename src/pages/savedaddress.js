import Link from 'next/link';
import React from 'react';
import back from '../assets/icon/Expand_left_light.png'
import Image from 'next/image';
import { MdKeyboardArrowRight } from 'react-icons/md';
import search from '../assets/icon/Search_alt_light.png'
import Layout from '@/Components/Layout/Layout';
import trash from '../assets/icon/Trash_duotone.png'

const savedaddress = () => {
    return (
        <Layout>
            <div className='pb-20 bg-white lg:mt-24'>
                <div className='lg:hidden'>
                    <div className='flex  items-center mt-5 w-full'>
                        <Link href='/profile'>
                            <div className="ps-5">
                                <Image src={back} alt="icon" />
                            </div></Link>
                        <div className='w-full text-center'>
                            <h1 className=" font-normal text-[20px] me-5">Saved Address</h1>
                        </div>
                    </div>
                </div>
                <div className='px-3 my-5'>
                    <div className='bg-[#B6B6B6] w-full h-[1px] lg:hidden' />
                    <div className="hidden lg:block">
                        <p className='text-[30px] mx-10 font-normal '>Select Your Address</p>
                    </div>
                    <Link href='/addnewaddress'>
                        <div className='flex justify-between my-3 lg:mx-12 items-center'>
                            <p className='text-[13px] font-normal lg:text-[22px]'>Add New Address</p>
                            <div className='w-[6.5px] h-[13px] lg:w-[32px] lg:h-[32px]'>
                                <div className='lg:hidden'>
                                    <MdKeyboardArrowRight size={20} />
                                </div>
                                <div className='lg:block hidden'>
                                    <MdKeyboardArrowRight size={30} />
                                </div>
                            </div>
                        </div></Link>
                    <div className='lg:mx-12'> <div className='bg-[#B6B6B6] w-full h-[1px] lg:bg-black ' /></div>

                    <div className='my-2 mx-2'>
                        <div className='lg:hidden'>
                            <p className='text-[13px] font-semibold mb-2'>Personal Addresses</p>
                            <div className='bg-[#EEEEEE] border-[1px] border-[#D4D4D4] w-full rounded-[9px] h-[42px] flex justify-between items-center px-3'>
                                <input type="text" className=' text-[13px] font-normal w-full outline-none bg-[#EEEEEE]' placeholder='Search for Address' />
                                <Image src={search} alt='img' className='w-[24px] h-[24px]' />
                            </div>
                        </div>
                        <div className='lg:mx-20 lg:mt-5'>
                            <div className='grid grid-cols-1 lg:grid-cols-2  gap-5'>
                                <div className=''>
                                    <div className='bg-[#EEEEEE] border-[1px] border-[#D4D4D4] rounded-[9px] p-3 mt-3'>
                                        <div className='lg:hidden'>
                                            <p className='text-[10px] font-normal'>Default Address</p>
                                            <div className='bg-[#B6B6B6] w-full h-[1px] my-1' />
                                        </div>
                                        <div className='flex justify-between'>
                                            <p className='text-[14px] font-semibold lg:text-[22px]'>Jyotirmoy Mondal</p>
                                            <p className='hidden lg:block text-[16px]'>Default</p>
                                        </div>
                                        <div className='text-[12px] text-[#858585] flex flex-col gap-[1px] mt-[1px] lg:text-[#7A7A7A] lg:text-[18px] lg:mt-3'>
                                            <p>G / 18 / 2, Bapuji Nagar</p>
                                            <p>LP 114/6/4/1</p>
                                            <p>Nera Royal Guest House</p>
                                            <p>Jadavpur, Kolkata, 700092</p>
                                            <p>West Bengal</p>
                                            <p>Mobile : +91 86531 38715 , +91 89102 80470</p>
                                        </div>
                                        <div className='lg:hidden'>
                                            <div className='flex gap-3 mt-3'>
                                                <button className='w-[98px] h-[40px] bg-[#D9D9D9] rounded-[9px] text-[16px] font-normal'>Edit</button>
                                                <button className='w-[98px] h-[40px] bg-[#D9D9D9] rounded-[9px] text-[16px] font-normal'>Remove</button>
                                            </div>
                                        </div>
                                        {/* lg button  */}
                                        <div className='hidden lg:block'>
                                            <div className='flex justify-end'>
                                                <button className='border-1px border-[#9A9A9A] bg-[#C7C7C7] rounded-[10px] w-[54px] h-[54px] flex items-center justify-center'>
                                                    <Image src={trash} alt='img' className='w-[40px] h-[40px]' />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* only large  */}
                                <div className='hidden lg:block'>
                                    <div className='bg-[#EEEEEE] border-[1px] border-[#D4D4D4] rounded-[9px] p-3 mt-3'>
                                        <div className='lg:hidden'>
                                            <p className='text-[10px] font-normal'>Default Address</p>
                                            <div className='bg-[#B6B6B6] w-full h-[1px] my-1' />
                                        </div>
                                        <div className='flex justify-between'>
                                            <p className='text-[14px] font-semibold lg:text-[22px]'>Jyotirmoy Mondal</p>
                                            <p className='hidden lg:block text-[16px]'>Make as Default</p>
                                        </div>
                                        <div className='text-[12px] text-[#858585] flex flex-col gap-[1px] mt-[1px] lg:text-[#7A7A7A] lg:text-[18px] lg:mt-3'>
                                            <p>G / 18 / 2, Bapuji Nagar</p>
                                            <p>LP 114/6/4/1</p>
                                            <p>Nera Royal Guest House</p>
                                            <p>Jadavpur, Kolkata, 700092</p>
                                            <p>West Bengal</p>
                                            <p>Mobile : +91 86531 38715 , +91 89102 80470</p>
                                        </div>
                                        <div className='lg:hidden'>
                                            <div className='flex gap-3 mt-3'>
                                                <button className='w-[98px] h-[40px] bg-[#D9D9D9] rounded-[9px] text-[16px] font-normal'>Edit</button>
                                                <button className='w-[98px] h-[40px] bg-[#D9D9D9] rounded-[9px] text-[16px] font-normal'>Remove</button>
                                            </div>
                                        </div>
                                        {/* lg button  */}
                                        <div className='hidden lg:block'>
                                            <div className='flex justify-end'>
                                                <button className='border-1px border-[#9A9A9A] bg-[#C7C7C7] rounded-[10px] w-[54px] h-[54px] flex items-center justify-center'>
                                                    <Image src={trash} alt='img' className='w-[40px] h-[40px]' />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='hidden lg:block'>
                                    <div className='bg-[#EEEEEE] border-[1px] border-[#D4D4D4] rounded-[9px] p-3 mt-3'>
                                        <div className='lg:hidden'>
                                            <p className='text-[10px] font-normal'>Default Address</p>
                                            <div className='bg-[#B6B6B6] w-full h-[1px] my-1' />
                                        </div>
                                        <div className='flex justify-between'>
                                            <p className='text-[14px] font-semibold lg:text-[22px]'>Jyotirmoy Mondal</p>
                                            <p className='hidden lg:block text-[16px]'>Make as Default</p>
                                        </div>
                                        <div className='text-[12px] text-[#858585] flex flex-col gap-[1px] mt-[1px] lg:text-[#7A7A7A] lg:text-[18px] lg:mt-2'>
                                            <p>G / 18 / 2, Bapuji Nagar</p>
                                            <p>LP 114/6/4/1</p>
                                            <p>Nera Royal Guest House</p>
                                            <p>Jadavpur, Kolkata, 700092</p>
                                            <p>West Bengal</p>
                                            <p>Mobile : +91 86531 38715 , +91 89102 80470</p>
                                        </div>
                                        <div className='lg:hidden'>
                                            <div className='flex gap-3 mt-3'>
                                                <button className='w-[98px] h-[40px] bg-[#D9D9D9] rounded-[9px] text-[16px] font-normal'>Edit</button>
                                                <button className='w-[98px] h-[40px] bg-[#D9D9D9] rounded-[9px] text-[16px] font-normal'>Remove</button>
                                            </div>
                                        </div>
                                        {/* lg button  */}
                                        <div className='hidden lg:block'>
                                            <div className='flex justify-end'>
                                                <button className='border-1px border-[#9A9A9A] bg-[#C7C7C7] rounded-[10px] w-[54px] h-[54px] flex items-center justify-center'>
                                                    <Image src={trash} alt='img' className='w-[40px] h-[40px]' />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* only large  */}
                                <div className='lg:hidden'>
                                    <div className='bg-[#EEEEEE] border-[1px] border-[#D4D4D4] rounded-[9px] p-3 mt-3'>

                                        <p className='text-[14px] font-semibold'>Jyotirmoy Mondal</p>
                                        <div className='text-[12px] text-[#858585] flex flex-col gap-[1px] mt-[1px]'>
                                            <p>G / 18 / 2, Bapuji Nagar</p>
                                            <p>LP 114/6/4/1</p>
                                            <p>Nera Royal Guest House</p>
                                            <p>Jadavpur, Kolkata, 700092</p>
                                            <p>West Bengal</p>
                                            <p>Mobile : +91 86531 38715 , +91 89102 80470</p>
                                        </div>
                                        <div className='flex gap-1 mt-3'>
                                            <button className='w-[98px] h-[40px] bg-[#D9D9D9] rounded-[9px] text-[16px] font-normal'>Edit</button>
                                            <button className='w-[98px] h-[40px] bg-[#D9D9D9] rounded-[9px] text-[16px] font-normal'>Remove</button>
                                            <button className='w-[140px] h-[40px] bg-[#D9D9D9] rounded-[9px] text-[16px] font-normal'>Set as Default</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </Layout>
    );
};

export default savedaddress;