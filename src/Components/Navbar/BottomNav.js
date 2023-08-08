import React, { useState } from 'react';
import { CgHome } from "react-icons/cg";
import { MdFavoriteBorder, MdFavorite, MdHomeFilled } from "react-icons/md";
import { PiHandbag } from "react-icons/pi";
import { IoBag } from "react-icons/io5";
import { BsPerson, BsFillPersonFill } from "react-icons/bs";
import Link from 'next/link';

const BottomNav = () => {
    const [activeButton, setActiveButton] = useState('home');

    return (
        <div className='h-[56px] bg-[#C3C3C3] fixed bottom-0 left-0 z-50 w-full'>
            <div className='grid grid-cols-4 justify-center w-full h-full max-w-screen-sm mx-auto'>
                <div className='flex justify-center items-center  text-[#000000] '>
                    <Link href='/'>
                        <div className='flex flex-col justify-center items-center' onClick={() => setActiveButton('home')}>
                            <div className='text-[24px]'>
                                {activeButton === 'home' ? <MdHomeFilled /> : <CgHome />}
                            </div>
                            <p className='text-[8px] font-semibold'>Home</p>
                        </div>
                    </Link>
                </div>
                <div className='flex justify-center items-center  text-[#000000] '>
                    <Link href='/men'>
                        <div className='flex flex-col justify-center items-center' onClick={() => setActiveButton('wishlist')}>
                            <div className='text-[24px]'>
                                {activeButton === 'wishlist' ? <MdFavorite /> : <MdFavoriteBorder />}
                            </div>
                            <p className='text-[8px] font-semibold'>Men</p>
                        </div>
                    </Link>
                </div>
                <div className='flex justify-center items-center  text-[#000000] '>
                    <Link href='/women'>
                        <div className='flex flex-col justify-center items-center' onClick={() => setActiveButton('bag')}>
                            <div className='text-[24px]'>
                                {activeButton === 'bag' ? <IoBag /> : <PiHandbag />}
                            </div>
                            <p className='text-[8px] font-semibold'>Women</p>
                        </div>
                    </Link>
                </div>
                <div className='flex justify-center items-center  text-[#000000] '>
                    <Link href='/profile'>
                        <div className='flex flex-col justify-center items-center' onClick={() => setActiveButton('profile')}>
                            <div className='text-[24px]'>
                                {activeButton === 'profile' ? <BsFillPersonFill /> : <BsPerson />}
                            </div>
                            <p className='text-[8px] font-semibold'>Profile</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BottomNav;
