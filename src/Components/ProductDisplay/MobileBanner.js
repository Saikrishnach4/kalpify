import Image from 'next/image';
import React, { useState, useRef } from 'react';
import shirt from '../../assets/profile/ORH9NG14 1.png';
import off from '../../assets/profile/—Pngtree—50 off label free_4494008 1.png';
import love from '../../assets/icon/heart.png';

const MobileBanner = () => {
    const [activeButton2, setActiveButton2] = useState(0);
    const containerRef = useRef(null); // Create a reference to the scroll container

    const handleButtonScroll = (buttonIndex) => {
        const container = containerRef.current;
        const buttonWidth = 42; // Update this to the width of the buttons (same as in the button elements)
        const scrollPosition = buttonIndex * buttonWidth;
        container.scrollLeft = scrollPosition;
    };

    const handleButtonClick = (buttonIndex) => {
        setActiveButton2(buttonIndex);
        handleButtonScroll(buttonIndex);
    };

    return (
        <div>
            <p className="text-[24px] font-normal ">Last man in the earth</p>
            <p className="text-[10px] font-normal text-[#636363]">Lorem ipsum dolor sit amet consectetur.</p>
            <div className="flex w-full" ref={containerRef}>
                <div className="w-[20%]">
                    <Image src={off} alt="img" />
                </div>
                <div className="w-[60%] flex justify-center items-center">
                    <Image src={shirt} alt="img" />
                </div>
                <div className="w-[20%] pt-5">
                    <div className="w-[40px] h-[40px] rounded-full bg-gray-300 flex justify-center items-center">
                        <Image src={love} alt="img" className="w-[24px] h-[24px]" />
                    </div>
                </div>
            </div>
            {/* dot  */}
            <div className="flex justify-center items-center py-2">

                <div className="flex justify-center items-center gap-2 bg-transparent">
                    <button
                        className={`h-[20px] rounded-full ${activeButton2 === 0 ? 'bg-[#636363] w-[42px]' : 'bg-[#D9D9D9] w-[20px]'}`}
                        onClick={() => handleButtonClick(0)}
                    />
                    <button
                        className={`h-[20px] rounded-full ${activeButton2 === 1 ? 'bg-[#636363] w-[42px]' : 'bg-[#D9D9D9] w-[20px]'}`}
                        onClick={() => handleButtonClick(1)}
                    />
                    <button
                        className={`h-[20px] rounded-full ${activeButton2 === 2 ? 'bg-[#636363] w-[42px]' : 'bg-[#D9D9D9] w-[20px]'}`}
                        onClick={() => handleButtonClick(2)}
                    />

                </div>
            </div>
            <div className='flex justify-between  items-center'>
                <p className='text-[24px] font-normal'>Men’s T-Shirt</p>
                <div className=' me-5'>
                    <p className='text-[#888888] font-[14px]'><strike>₹699.00</strike> </p>
                    <p className='font-bold text-[#9B9797] text-[20px] mt-[-6px]'>₹599.00</p>
                </div>
            </div>
            <p className='text-[10px] font-normal 
text-[#636363] me-5'>Lorem ipsum dolor sit amet consectetur. Non mauris  netus etiam nulla nulla a.</p>
        </div>
    );
};

export default MobileBanner;
