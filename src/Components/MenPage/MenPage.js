import React, { useEffect, useRef, useState } from 'react';
import BannerTwo from './Banner/BannerTwo';
import TopSellingProduct from './TopSellingProduct';
import CollectionOfModernClothing from './CollectionOfModernClothing';
import TrendingProducts from '../HomePage/TrendingProducts';

const MenPage = () => {
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
    return (
        <div className='lg:mt-16 lg:max-w-screen-xl mx-auto '>
            <div className='hidden lg:block'>
                <BannerTwo />
                <TopSellingProduct />
                <CollectionOfModernClothing />
            </div>
            <div className='lg:hidden mt-12 mb-24'>
                <p className='text-[11px] font-medium mb-5 mx-5'>Best Selling Products</p>
                <div ref={containerRef}
                    className="flex gap-3 scroll-m-2 card-container lg:mt-12 pb-5 px-5"
                    style={{
                        overflowX: 'hidden',
                        scrollSnapType: 'x mandatory',
                    }}>
                    <div className=''>
                        <TrendingProducts />
                    </div>
                    <div className=''>
                        <TrendingProducts />
                    </div>
                    <div className=''>
                        <TrendingProducts />
                    </div>
                    <div className=''>
                        <TrendingProducts />
                    </div>
                    <div className=''>
                        <TrendingProducts />
                    </div>

                </div>
                <div className='grid grid-cols-2 gap-3 px-3'>
                    <TrendingProducts />
                    <TrendingProducts />
                    <TrendingProducts />
                    <TrendingProducts />
                    <TrendingProducts />
                    <TrendingProducts />
                </div>
            </div>
        </div>
    );
};

export default MenPage;