import React, { useState } from 'react';

const ProductSize = () => {
    const [selectedSize, setSelectedSize] = useState('M');

    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };

    return (
        <div className='w-[400px]'>
            <div className='text-[20px] font-bold flex justify-between w-full mb-1'>
                <p className='text-[#7C7979]'>Size</p>
                <p className='text-[#A7A7A7]'>Size Chart</p>
            </div>
            <div className='flex gap-5 w-full text-[26px] justify-between'>
                <button
                    className={`w-[56px] font-normal h-[56px]  rounded-[13px] ${selectedSize === 'S' ? 'bg-[#5A5A5A] text-white' : 'bg-[#D9D9D9]'
                        }`}
                    onClick={() => handleSizeClick('S')}
                >
                    <p>S</p>
                </button>
                <button
                    className={`w-[56px] font-normal h-[56px]  rounded-[13px] ${selectedSize === 'M' ? 'bg-[#5A5A5A] text-white' : 'bg-[#D9D9D9]'
                        }`}
                    onClick={() => handleSizeClick('M')}
                >
                    <p>M</p>
                </button>
                <button
                    className={`w-[56px] font-normal h-[56px]  rounded-[13px] ${selectedSize === 'L' ? 'bg-[#5A5A5A] text-white' : 'bg-[#D9D9D9]'
                        }`}
                    onClick={() => handleSizeClick('L')}
                >
                    <p>L</p>
                </button>
                <button
                    className={`w-[56px] font-normal h-[56px]  rounded-[13px] ${selectedSize === 'XL' ? 'bg-[#5A5A5A] text-white' : 'bg-[#D9D9D9]'
                        }`}
                    onClick={() => handleSizeClick('XL')}
                >
                    <p>XL</p>
                </button>
                <button
                    className={`w-[56px] font-normal h-[56px]  rounded-[13px] ${selectedSize === 'XXL' ? 'bg-[#5A5A5A] text-white' : 'bg-[#D9D9D9]'
                        }`}
                    onClick={() => handleSizeClick('XXL')}
                >
                    <p>XXL</p>
                </button>
            </div>
        </div>
    );
};

export default ProductSize;
