import React, { useState } from 'react';
import back from '../../../assets/icon/Expand_left_light.png'
import Image from 'next/image';
import profile from '../../../assets/profile/edit.png'
import profileLarge from '../../../assets/profile/Ellipse 172.png'
import edit from '../../../assets/icon/edit.png'
import Link from 'next/link';
import Layout from '@/Components/Layout/Layout';

const index = () => {

    const [email, setEmail] = useState('jyotirmoymondal2313@gmail.com');
    const [mobile, setMobile] = useState('+91 89756 67564');

    const isSaveButtonDisabled = !email.trim() || !mobile.trim();

    return (

        <Layout>
            <div className='pb-20 bg-white'>
                <div className='flex  items-center mt-5 w-full'>
                    <Link href='/profile'>
                        <div className="ps-5">
                            <Image src={back} alt="icon" />
                        </div></Link>
                    <div className='w-full text-center'>
                        <h1 className=" font-normal text-[20px] me-5">Edit Profile </h1>
                    </div>
                </div>

                <div className='h-[33px]  shadow-set'> </div>
                <p className='text-[40px] font-normal hidden lg:block mx-12 mt-12'>Edit My Profile</p>
                <div className='mt-5 '>

                    <div className='flex justify-center items-center'>
                        <div className='w-[116px]'>
                            <div className=' w-[116px] lg:w-[213px] lg:h-[213px] p-2 lg:p-0 mt-[22px] lg:mt-0  lg:bg-none'>
                                <Image src={profile} className='w-full h-full lg:hidden bg-[#C6C6C6] rounded-full' alt="" />
                                <Image src={profileLarge} className='w-full h-full hidden lg:block' alt="" />
                            </div>
                            <div className='flex justify-end mt-[-30px] lg:mt-[-130px] lg:me-[-40px]'>
                                <Image src={edit} alt='edit' className='bg-[#5D5D5D] p-[2px] w-[27px] h-[27px] rounded-full' />
                            </div>
                        </div>
                    </div>

                    <form action="" className=' mx-5 lg:mx-[60px] mt-4'>
                        <div className='flex flex-col  gap-2 py-[9px] pl-[18px] max-w-screen-sm mx-auto'>
                            <div className='text-[14px] font-normal text-[#7A7A7A] lg:hidden'> <p>Name</p> </div>
                            <input type="text" className=' text-[15px] font-semibold text-[#5E5E5E] lg:text-black w-full me-3 outline-none border-b-[1px] lg:border-none border-[#B4B4B4] lg:h-[80px] lg:text-[24px] lg:font-normal lg:rounded-[16px] lg:px-5 lg:bg-[#D9D9D9]' name='name' placeholder='Enter your name' value='Jyotirmoy Mondal' />
                        </div>
                        <div className='flex flex-col  gap-2 py-[9px] pl-[18px] max-w-screen-sm mx-auto'>
                            <div className='text-[14px] font-normal text-[hsl(0,0%,48%)] lg:hidden'> <p>Email address</p> </div>
                            <input
                                type="email"
                                className="text-[15px] font-semibold text-[#5E5E5E] lg:text-black w-full me-3 outline-none border-b-[1px] lg:border-none border-[#B4B4B4] lg:h-[80px] lg:text-[24px] lg:font-normal lg:rounded-[16px] lg:px-5 lg:bg-[#D9D9D9]"
                                name="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className='flex flex-col  gap-2 py-[9px] pl-[18px] max-w-screen-sm mx-auto'>
                            <div className='text-[14px] font-normal text-[#7A7A7A] lg:hidden'> <p>Mobile number</p> </div>
                            <input
                                type="text"
                                className="text-[15px] font-semibold text-[#5E5E5E] lg:text-black w-full me-3 outline-none border-b-[1px] lg:border-none border-[#B4B4B4] lg:h-[80px] lg:text-[24px] lg:font-normal  lg:rounded-[16px] lg:px-5 lg:bg-[#D9D9D9]"
                                name="mobile"
                                placeholder="Enter your number"
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                            />
                        </div>
                        <div className='flex flex-col lg:flex-row  gap-2 lg:gap-10 py-[9px] pl-[18px] lg:items-center max-w-screen-sm mx-auto'>
                            <div className='text-[14px] font-normal text-[#7A7A7A] lg:text-[20px] lg:text-[black]'> <p>Date of Birth</p> </div>
                            <div className='flex items-center gap-2 lg:gap-8'>
                                <div className='w-[53px] border-b-[1px] text-center flex justify-center text-[15px] font-semibold'>
                                    <input type="digit" className='outline-none w-full ps-2 lg:bg-[#D9D9D9] lg:w-[100px] lg:h-[100px] rounded-[16px] lg:text-[32px]' maxLength={2} />
                                </div>
                                <p className='text-[#7A7A7A] lg:text-[32px]'>/</p>
                                <div className='w-[53px] border-b-[1px] text-center flex justify-center text-[15px] font-semibold'>
                                    <input type="digit" className='outline-none w-full ps-2 lg:bg-[#D9D9D9] lg:w-[100px] lg:h-[100px] rounded-[16px] lg:text-[32px]' maxLength={2} />
                                </div>
                                <p className='text-[#7A7A7A] lg:text-[32px]'>/</p>
                                <div className='w-[53px] border-b-[1px] text-center flex justify-center text-[15px] font-semibold'>
                                    <input type="digit" className='outline-none w-full ps-2 lg:bg-[#D9D9D9] lg:w-[100px] lg:h-[100px] rounded-[16px] lg:text-[32px]' maxLength={4} />
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center lg:justify-between items-center mt-12'>
                            <button className='text-[20px] text-[#FFFFFF] bg-[#444242] w-[158px] h-[46px] rounded-[7px] font-normal hidden lg:block lg:w-[177px] lg:h-[70px] lg:text-[30px]'>
                                Back
                            </button>
                            <button
                                className={`text-[20px] text-[#FFFFFF] bg-[#9B9B9B] w-[158px] h-[46px] rounded-[7px] font-normal lg:w-[177px] lg:h-[70px] lg:text-[30px] ${isSaveButtonDisabled ? 'bg-[#444242] cursor-not-allowed' : ''
                                    }`}
                                disabled={isSaveButtonDisabled}
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default index;