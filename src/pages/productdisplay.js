import Layout from '@/Components/Layout/Layout';
import TopNav from '@/Components/Navbar/TopNav';
import ProductDisplayPage from '@/Components/ProductDisplay/ProductDisplayPage';
import React from 'react';

const productdisplay = () => {
    return (
        <div className=' '>
            <Layout>
                <div className='lg:hidden'>
                    <TopNav />
                </div>

                <ProductDisplayPage />

            </Layout>
        </div>
    );
};

export default productdisplay;