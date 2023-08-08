import CheckoutDoneStatus from '@/Components/Cart/CheckoutDoneStatus';
import Layout from '@/Components/Layout/Layout';
import Link from 'next/link';
import React from 'react';

const orderplaced = () => {
    return (
        <Layout>
            <CheckoutDoneStatus />
            <div className='mt-5 flex justify-center items-center mb-20'>
                <Link href='/'>
                    <button
                        className='bg-[#444242] w-[174px] h-[44px] text-white rounded-[7px] lg:text-[24px] lg:w-[250px] lg:h-[60px]'

                    >
                        Back To Home
                    </button></Link>
            </div>
        </Layout>
    );
};

export default orderplaced;