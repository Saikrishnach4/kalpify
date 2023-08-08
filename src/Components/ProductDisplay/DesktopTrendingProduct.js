import React, { useEffect, useRef, useState } from 'react';
import TrendingProductsPrdoductDet from './TrendingProductsPrdoductDet';

const DesktopTrendingProduct = () => {
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
        <div>
            <div className='hidden lg:block'>
                <p className='text-[26px] font-bold my-3 ms-12'>Treading Products</p>
                <div ref={containerRef}
                    className="flex gap-3 scroll-m-2 card-container  pb-12 ps-12"
                    style={{
                        overflowX: 'hidden',
                        scrollSnapType: 'x mandatory',
                    }}>
                    <div className='flex flex-col gap-5'>
                        <TrendingProductsPrdoductDet />
                        <TrendingProductsPrdoductDet />
                    </div>
                    <div className='flex flex-col gap-5'>
                        <TrendingProductsPrdoductDet />
                        <TrendingProductsPrdoductDet />
                    </div>
                    <div className='flex flex-col gap-5'>
                        <TrendingProductsPrdoductDet />
                        <TrendingProductsPrdoductDet />
                    </div>
                    <div className='flex flex-col gap-5'>
                        <TrendingProductsPrdoductDet />
                        <TrendingProductsPrdoductDet />
                    </div>
                    <div className='flex flex-col gap-5'>
                        <TrendingProductsPrdoductDet />
                        <TrendingProductsPrdoductDet />
                    </div>
                    <div className='flex flex-col gap-5'>
                        <TrendingProductsPrdoductDet />
                        <TrendingProductsPrdoductDet />
                    </div>

                </div>
                <div className='flex justify-center items-center mx-5 py-2 '>

                    <div className='flex justify-center items-center gap-2 bg-transparent'>
                        <button
                            className={` h-[20px] rounded-full ${activeButton === 0 ? 'bg-[#636363] w-[42px]' : 'bg-[#D9D9D9] w-[20px]'}`}
                            onClick={() => handleButtonClick2(0)}
                        />
                        <button
                            className={` h-[20px] rounded-full ${activeButton === 1 ? 'bg-[#636363] w-[42px]' : 'bg-[#D9D9D9] w-[20px]'}`}
                            onClick={() => handleButtonClick2(1)}
                        />
                        <button
                            className={` h-[20px] rounded-full ${activeButton === 2 ? 'bg-[#636363] w-[42px]' : 'bg-[#D9D9D9] w-[20px]'}`}
                            onClick={() => handleButtonClick2(2)}
                        />
                        <button
                            className={` h-[20px] rounded-full ${activeButton === 3 ? 'bg-[#636363] w-[42px]' : 'bg-[#D9D9D9] w-[20px]'}`}
                            onClick={() => handleButtonClick2(3)}
                        />
                    </div>

                </div>
                <p className='text-[26px] font-bold my-3 ms-28'>Treading Products</p>
                <div className='grid grid-cols-3 gap-5 px-24 pb-12 justify-center items-center'>
                    <div className='flex justify-center'>
                        <TrendingProductsPrdoductDet />
                    </div>
                    <div className='flex justify-center'>
                        <TrendingProductsPrdoductDet />
                    </div>
                    <div className='flex justify-center'>
                        <TrendingProductsPrdoductDet />
                    </div>
                    <div className='flex justify-center'>
                        <TrendingProductsPrdoductDet />
                    </div>
                    <div className='flex justify-center'>
                        <TrendingProductsPrdoductDet />
                    </div>
                    <div className='flex justify-center'>
                        <TrendingProductsPrdoductDet />
                    </div>
                    <div className='flex justify-center'>
                        <TrendingProductsPrdoductDet />
                    </div>
                    <div className='flex justify-center'>
                        <TrendingProductsPrdoductDet />
                    </div>
                    <div className='flex justify-center'>
                        <TrendingProductsPrdoductDet />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DesktopTrendingProduct;