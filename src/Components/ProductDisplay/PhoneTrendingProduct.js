import React, { useEffect, useRef, useState } from 'react';
import TrendingProducts from '../HomePage/TrendingProducts';

const PhoneTrendingProduct = () => {
    const [activeButton, setActiveButton] = useState('');




    // sliderr 
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

    const handleButtonClick2 = (buttonIndex) => {
        setActiveButton(buttonIndex);
        handleButtonScroll(buttonIndex);
    };

    return (
        <div className=''>
            <div>
                <div className=''>
                    <div className='flex justify-between items-center'>
                        <p className='text-[14px] font-bold my-3 mx-5'>Treading Products</p>
                        <p className='text-[#636363] text-[10px] font-normal me-5'>see all</p>
                    </div>
                    <div ref={containerRef}
                        className="flex gap-3 scroll-m-2 card-container px-3 pb-5"
                        style={{
                            overflowX: 'hidden',
                            scrollSnapType: 'x mandatory',
                        }}>
                        <div className='flex justify-center items-center'>
                            <TrendingProducts />

                        </div>
                        <div className='flex justify-center items-center'>
                            <TrendingProducts />

                        </div>
                        <div className='flex justify-center items-center'>
                            <TrendingProducts />

                        </div>
                        <div className='flex justify-center items-center'>
                            <TrendingProducts />

                        </div>
                        <div className='flex justify-center items-center'>
                            <TrendingProducts />

                        </div>
                        <div className='flex justify-center items-center'>
                            <TrendingProducts />

                        </div>
                        <div className='flex justify-center items-center'>
                            <TrendingProducts />

                        </div>
                        <div className='flex justify-center items-center'>
                            <TrendingProducts />

                        </div>


                    </div>




                </div>
            </div>
        </div>

    );
};

export default PhoneTrendingProduct;