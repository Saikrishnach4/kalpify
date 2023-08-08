import CartMobile from '@/Components/Cart/CartMobile';
import CartPc from '@/Components/Cart/CartPc';
import EmptyCart from '@/Components/Cart/EmptyCart';
import Layout from '@/Components/Layout/Layout';
import React from 'react';

const cart = () => {
    return (
        <Layout>
            {/* formobile  */}
            <div className='lg:hidden'>
                <CartMobile />
            </div>
            {/* for large screen  */}
            <div className='hidden lg:block'>
                <CartPc />
                {/* <EmptyCart /> */}
            </div>
        </Layout>
    );
};

export default cart;