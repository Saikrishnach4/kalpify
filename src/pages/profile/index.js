import Layout from '@/Components/Layout/Layout';
import Link from 'next/link';
import React from 'react';
import back from '../../assets/icon/Expand_left_light.png'
import profilepic from '../../assets/profile/pngegg(3) 1.png'
import booking from '../../assets/icon/Basket_alt_light.png'
import favourite from '../../assets/icon/Favorite_duotone.png'
import editProfile from '../../assets/icon/Edit_light.png'
import saveAdd from '../../assets/icon/Shop_duotone_line.png'
import help from '../../assets/icon/Headphones_fill_duotone.png'
import Image from 'next/image';
import { MdArrowForwardIos } from 'react-icons/md';
import { BiEditAlt } from 'react-icons/bi';
import TopNav from '@/Components/Navbar/TopNav';

const profile = () => {
    return (
        <Layout>

            <div className='lg:hidden'>
                <TopNav />
            </div>
            <div className='pb-28' >
                <div className='flex  items-center mt-5 w-full'>
                    <div className="ps-5">
                        <Image src={back} alt="icon" />
                    </div>
                    <div className='w-full text-center'>
                        <h1 className=" font-normal text-[20px]  me-5">Your Profile</h1>
                    </div>
                </div>
                <div className='h-[33px]  shadow-set'> </div>
                <div className='mx-5 lg:mt-12'>
                    <div className=' max-w-screen-sm mx-auto flex items-center justify-between'>
                        <div className='flex gap-3 items-center'>
                            <div className='w-[63px] h-[63px] bg-[#C6C6C6] rounded-full p-2'>
                                <Image src={profilepic} alt="" className='w-full h-full' />
                            </div>
                            <div className='mt-[8px]  mb-[52px] text-[16px]'>
                                <h1 className='text-[#808080] font-normal mt-8'>Hello</h1>
                                <p className='text-[#525252] font-medium'>Jyotirmoy</p>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <div className='w-[28px] h-[24px] text-[#808080]'>
                                <BiEditAlt />
                            </div>
                        </div>
                    </div>

                    <div className=' flex justify-start lg:justify-center items-center gap-2'>
                        <Link href='/orders' className='hidden lg:block'>
                            <div className='flex bg-[#9B9797] py-2 px-3 rounded-[17px] w-[162px] h-[44px]'>
                                <div className='flex justify-center items-center mr-2'>
                                    <Image src={booking} className='w-[24px] h-[24px]' alt="" />
                                </div>
                                <p className='text-white text-[16px] font-normal'>Your Orders</p>
                            </div></Link>
                        <Link href='/trackorder' className='lg:hidden'>
                            <div className='flex bg-[#9B9797] py-2 px-3 rounded-[17px] w-[162px] h-[44px]'>
                                <div className='flex justify-center items-center mr-2'>
                                    <Image src={booking} className='w-[24px] h-[24px]' alt="" />
                                </div>
                                <p className='text-white text-[16px] font-normal'>Your Orders</p>
                            </div></Link>

                        <Link href='/wishlist'>
                            <div className='flex justify-center  w-[143px] h-[44px] bg-[#7D7D7D] py-2 px-3 rounded-[17px]'>
                                <div className='flex justify-center items-center mr-2'>
                                    <Image src={favourite} className='w-[17px] h-[17px]' alt="" />
                                </div>
                                <p className='text-white'>Wishlist </p>
                            </div></Link>
                    </div>

                    <div className=''>
                        <div className='max-w-screen-sm lg:max-w-screen-lg mx-auto mt-[45px] lg:px-16 '>
                            <h1 className=' font-medium mb-[13px] text-[#5E5E5E] text-[16px] lg:text-[20px] ms-5' >Account Settings</h1>

                            <Link href='/profile/editprofile'>
                                <div className='flex justify-between'>
                                    <div className='flex gap-2 items-center'>
                                        <div className='bg-[#747474] p-1 flex justify-center items-center rounded-full'>
                                            <Image src={editProfile} alt='edit' className='w-[24px h-[24px]' />
                                        </div>

                                        <p className='text-[16px] font-normal'>Edit Profile</p>
                                    </div>
                                    <MdArrowForwardIos />
                                </div></Link>
                            <Link href='/savedaddress'>
                                <div className='flex justify-between my-[8px]'>
                                    <div className='flex gap-2 items-center'>
                                        <div className='bg-[#9A9A9A] p-1 flex justify-center items-center rounded-full'>
                                            <Image src={saveAdd} alt='edit' /></div>
                                        <p className='text-[16px] font-normal'>Saved Addresses</p>
                                    </div>
                                    <MdArrowForwardIos />
                                </div></Link>
                            <div className='flex justify-between my-[8px]'>
                                <div className='flex gap-2 items-center'>
                                    <div className='bg-[#747474] p-1 flex justify-center items-center rounded-full'>
                                        <Image src={help} alt='edit' /></div>
                                    <p>Help Center</p>
                                </div>
                                <MdArrowForwardIos />
                            </div>
                            <h1 className=' mb-[13px] mt-[22px] font-medium text-[16px] text-[#7A7A7A]' >Legal Information</h1>
                            <Link href='/termsandcondition'>
                                <div className='flex justify-between my-[8px]'> <p className='text-[16px] font-medium text-[#7A7A7A]'>Terms and Conditions</p> <MdArrowForwardIos />
                                </div></Link>
                            <Link href='/aboutus'>
                                <div className='flex justify-between my-[8px]'>
                                    <p className='text-[16px] font-medium text-[#7A7A7A]'>About us</p>
                                    <MdArrowForwardIos />
                                </div></Link>

                            <Link href='/privacypolicy'>
                                <div className='flex justify-between my-[8px]'>
                                    <p className='text-[16px] font-medium text-[#7A7A7A]'>Privacy Policy</p>
                                    <MdArrowForwardIos />
                                </div></Link>

                            <Link href='/contactus'>
                                <div className='flex justify-between my-[8px]'>
                                    <p className='text-[16px] font-medium text-[#7A7A7A]'>Contact us</p>
                                    <MdArrowForwardIos />
                                </div>
                            </Link>

                            <Link href='/login'><button className='text-[#323131] text-[16px] font-medium py-2  ' >Log In</button></Link>
                        </div>

                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default profile;