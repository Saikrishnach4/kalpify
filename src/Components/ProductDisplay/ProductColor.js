import React, { useState } from 'react';

const ProductColor = () => {
    const [selectedColor, setSelectedColor] = useState('#FB5889');

    const handleColorClick = (color) => {
        setSelectedColor(color);
    };

    return (
        <div>
            <div className='w-[400px]'>
                <div className='text-[20px] font-bold flex justify-between w-full my-1'>
                    <p className='text-[#7C7979]'>Color</p>
                    <p className='text-[#A7A7A7]'>More Color</p>
                </div>
                <div className='flex justify-between w-full'>
                    <button
                        className={`w-[58px] h-[58px] bg-[#FD3A3A] rounded-full ${selectedColor === '#FD3A3A' ? 'border-red-700  border-[3px]' : 'bg-[#FD3A3A]'}`}
                        onClick={() => handleColorClick('#FD3A3A')}
                    />
                    <button
                        className={`w-[58px] h-[58px] bg-[#FBE158] rounded-full ${selectedColor === '#FBE158' ? 'border-yellow-400 border-[3px]' : 'bg-[#FBE158]'}`}
                        onClick={() => handleColorClick('#FBE158')}
                    />
                    <button
                        className={`w-[58px] h-[58px] bg-[#5BFB58] rounded-full ${selectedColor === '#5BFB58' ? 'border-green-600 border-[3px]' : 'bg-[#5BFB58]'}`}
                        onClick={() => handleColorClick('#5BFB58')}
                    />
                    <button
                        className={`w-[58px] h-[58px] bg-[#FB5889] rounded-full ${selectedColor === '#FB5889' ? 'border-[#9C103A] border-[3px]' : 'bg-[#FB5889]'}`}
                        onClick={() => handleColorClick('#FB5889')}
                    />
                    <button
                        className={`w-[58px] h-[58px] rounded-full bg-[#39C3FC] ${selectedColor === '#39C2FC' ? 'border-blue-600 border-[3px]' : 'bg-[#39C2FC]'}`}
                        onClick={() => handleColorClick('#39C2FC')}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductColor;
