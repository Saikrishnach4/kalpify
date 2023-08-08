import RightAirProduct from '@/Components/AirProductPage/RightAirProduct';
import Layout from '@/Components/Layout/Layout';
import TopNav from '@/Components/Navbar/TopNav';
import React from 'react';

const regenerate = () => {
    return (
        <Layout>
            <div className='lg:hidden'>
                <TopNav />
            </div>
            <div className='px-6 pb-20'>
                <RightAirProduct />
            </div>
        </Layout>
    );
};

export default regenerate;