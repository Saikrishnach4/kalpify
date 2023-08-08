import Image from 'next/image';
import React from 'react';
import img from '../../assets/image/Cart1.png'
import { jetBrains_Mono } from '@/font';
import Link from 'next/link';

const EmptyCart = () => {
    return (
        <div className='mb-12 lg:mt-20'>
            <p className='text-[16px] font-normal lg:hidden'>My Cart</p>
            <p className='hidden lg:block text-[30px] mx-12 pt-5'>Your Shopping Cart</p>
            <p className='text-[15px] text-[#909090] font-normal lg:hidden'>products to checkout</p>
            <div className='flex justify-center items-center mt-5'>
                <Image src={img} alt='img' />
            </div>
            <div className='mt-[-100px] text-center lg:hidden'>
                <p className='text-[16px] font-normal'>Your Cart is </p>
                <p className='text-[32px] font-normal mt-[-10px]'>empty </p>
            </div>
            <div className='text-[26px]  font-normal text-center hidden lg:block'>
                <p className={jetBrains_Mono.className}>Your Cart Is EMPTY</p>
                <Link href='/'> <button className='text-[#717171] text-[24px]'>Back to Home</button></Link>
            </div>
        </div>
    );
};

export default EmptyCart;