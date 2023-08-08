import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import search from '../../assets/icon/Search_alt_light.png'
import BannerOne from './Banner/BannerOne';
import FashionStatement from './FashionStatement';
import TrendingProducts from './TrendingProducts';
import BestCollections from '../BestCollections';
import OwnDesign from '../OwnDesign';
import Link from 'next/link';

const HomePage = () => {
    const [activeButton, setActiveButton] = useState('men');
    const [activeButton2, setActiveButton2] = useState(0);
    const containerRef = useRef(null);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [mouseDownX, setMouseDownX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    useEffect(() => {
        const handleMouseEnter = () => {
            containerRef.current.style.overflowX = 'hidden';
        };

        const handleMouseLeave = () => {
            containerRef.current.style.overflowX = 'hidden';
        };

        const handleMouseDown = (e) => {
            setIsMouseDown(true);
            setMouseDownX(e.pageX - containerRef.current.offsetLeft);
            setScrollLeft(containerRef.current.scrollLeft);
        };

        const handleMouseUp = () => {
            setIsMouseDown(false);
        };

        const handleMouseMove = (e) => {
            if (!isMouseDown || !containerRef.current) return;

            e.preventDefault();
            const mouseMoveX = e.pageX - containerRef.current.offsetLeft;
            const scrollAmount = (mouseMoveX - mouseDownX) * 2;
            containerRef.current.scrollLeft = scrollLeft - scrollAmount;
        };

        const handleTouchStart = (e) => {
            setIsMouseDown(true);
            setMouseDownX(e.touches[0].pageX - containerRef.current.offsetLeft);
            setScrollLeft(containerRef.current.scrollLeft);
        };

        const handleTouchEnd = () => {
            setIsMouseDown(false);
        };

        const handleTouchMove = (e) => {
            if (!isMouseDown || !containerRef.current) return;

            e.preventDefault();
            const touchMoveX = e.touches[0].pageX - containerRef.current.offsetLeft;
            const scrollAmount = (touchMoveX - mouseDownX) * 2;
            containerRef.current.scrollLeft = scrollLeft - scrollAmount;
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener('mouseenter', handleMouseEnter);
            container.addEventListener('mouseleave', handleMouseLeave);
            container.addEventListener('mousedown', handleMouseDown);
            container.addEventListener('mouseup', handleMouseUp);
            container.addEventListener('mousemove', handleMouseMove);
            container.addEventListener('touchstart', handleTouchStart);
            container.addEventListener('touchend', handleTouchEnd);
            container.addEventListener('touchmove', handleTouchMove);
        }

        return () => {
            if (container) {
                container.removeEventListener('mouseenter', handleMouseEnter);
                container.removeEventListener('mouseleave', handleMouseLeave);
                container.removeEventListener('mousedown', handleMouseDown);
                container.removeEventListener('mouseup', handleMouseUp);
                container.removeEventListener('mousemove', handleMouseMove);
                container.removeEventListener('touchstart', handleTouchStart);
                container.removeEventListener('touchend', handleTouchEnd);
                container.removeEventListener('touchmove', handleTouchMove);
            }
        };
    }, [isMouseDown, scrollLeft]);
    // scrool 

    const itemsPerSlide = 3;

    const handleButtonScroll = (buttonIndex) => {
        // Calculate the new scrollLeft position based on the button index and itemsPerSlide
        const container = containerRef.current;
        const buttonWidth = 42; // Update this to the width of the buttons
        const scrollPosition = buttonIndex * itemsPerSlide * buttonWidth;
        container.scrollLeft = scrollPosition;
    };

    const handleButtonClick = (buttonIndex) => {
        setActiveButton2(buttonIndex);
        handleButtonScroll(buttonIndex);
    };
    return (
        <div className='mt-3 lg:mb-5 mb-20 '>

            <div className='flex shadow-set justify-center items-center px-3 bg-[#EFEFEF] border-[#D6D6D6] border-[1px] h-[33px] rounded-[9px] mx-5 '>
                <input type="text" className=' outline-none w-full bg-[#EFEFEF]' />
                <Image src={search} alt='search' className='bg-[#EFEFEF] w-[24px] h-[24px]' />
            </div>
            <div className='w-full shadow-set' />
            <div className='lg:pt-[60px] lg:flex lg:gap-3 lg:justify-center lg:items-center '>
                <p className=' tracking-[1.7px]  text-[11px] font-medium text-center my-5 text-black lg:text-[22px] '>Shop For</p>
                <div className='text-[11px] lg:text-[16px] tracking-[1.7px] font-normal flex justify-center items-center gap-3'>
                    <button
                        className={`border ${activeButton === 'men' ? 'border-[#B9B9B9] bg-[#D9D9D9]' : 'border-[#EFEFEF] bg-[#EFEFEF]'} border-[1px] w-[83px] lg:w-[100px] lg:h-[40px] h-[38px] rounded-[13px]`}
                        onClick={() => setActiveButton('men')}
                    >
                        Men
                    </button>
                    <button
                        className={`border ${activeButton === 'women' ? 'border-[#B9B9B9] bg-[#D9D9D9]' : 'border-[#EFEFEF] bg-[#EFEFEF]'} border-[1px] w-[83px] lg:w-[100px] lg:h-[40px] h-[38px] rounded-[13px]`}
                        onClick={() => setActiveButton('women')}
                    >
                        Women
                    </button>
                </div>
            </div>
            {/* Banner part  */}
            <BannerOne />
            <FashionStatement />
            {/* trending products  */}
            <div>
                <div className=' mt-10 mb-5 lg:mb-0 mx-5 flex justify-between'>
                    <p className='text-[11px] tracking-[1.7px] lg:text-[26px] lg:mx-4'>Treading Products </p>
                    <Link href='/productdisplay'> <button className='text-[11px] tracking-[1.7px] lg:hidden'>See all</button></Link>
                </div>
                <div className='grid grid-cols-2 lg:hidden gap-2 mx-3 pb-12'>
                    <TrendingProducts />
                    <TrendingProducts />
                    <TrendingProducts />
                    <TrendingProducts />
                </div>
                <div className='hidden lg:block overflow-x-auto ms-12'>
                    <div ref={containerRef}
                        className="flex gap-3 scroll-m-2 card-container lg:mt-5 pb-12"
                        style={{
                            overflowX: 'hidden',
                            scrollSnapType: 'x mandatory',
                        }}>
                        <div>
                            <TrendingProducts />
                        </div>
                        <div>
                            <TrendingProducts />
                        </div>
                        <div>
                            <TrendingProducts />
                        </div>
                        <div>
                            <TrendingProducts />
                        </div>
                        <div>
                            <TrendingProducts />
                        </div>
                        <div>
                            <TrendingProducts />
                        </div>
                        <div>
                            <TrendingProducts />
                        </div>
                    </div>
                    <div className='flex justify-between items-center mx-5 py-2'>
                        <div></div>
                        <div className='flex justify-center items-center gap-2 bg-transparent'>
                            <button
                                className={` h-[20px] rounded-full ${activeButton2 === 0 ? 'bg-[#636363] w-[42px]' : 'bg-[#D9D9D9] w-[20px]'}`}
                                onClick={() => handleButtonClick(0)}
                            />
                            <button
                                className={` h-[20px] rounded-full ${activeButton2 === 1 ? 'bg-[#636363] w-[42px]' : 'bg-[#D9D9D9] w-[20px]'}`}
                                onClick={() => handleButtonClick(1)}
                            />
                            <button
                                className={` h-[20px] rounded-full ${activeButton2 === 2 ? 'bg-[#636363] w-[42px]' : 'bg-[#D9D9D9] w-[20px]'}`}
                                onClick={() => handleButtonClick(2)}
                            />
                            <button
                                className={` h-[20px] rounded-full ${activeButton2 === 3 ? 'bg-[#636363] w-[42px]' : 'bg-[#D9D9D9] w-[20px]'}`}
                                onClick={() => handleButtonClick(3)}
                            />
                        </div>
                        <Link href='/productdisplay'> <button className='text-[#747474] text-[26px] font-bold'>See All</button></Link>
                    </div>
                </div>
            </div>
            {/* best collection */}
            <div className='hidden lg:block'>
                <BestCollections />
                <OwnDesign />
            </div>

        </div>
    );
};

export default HomePage;