import React from 'react';
import BottomNav from '../Navbar/BottomNav';
import Navbar from '../Navbar/Navbar';
import Footer from '../Navbar/Footer';
import { poppins } from '@/font';



const Layout = ({ children }) => {
    return (
        <div className={poppins.className}>
            <div className='hidden lg:block pt-[10px]'>
                <Navbar />
            </div>
            <main className=''>{children}</main>
            <div className='lg:hidden'>
                <BottomNav />
            </div>
            <div className='hidden lg:block'>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;