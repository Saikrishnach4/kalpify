import React from 'react';

const CustomRadio = ({ active }) => {
    return (
        <div
            className={`border-[#979797] border-[1px] w-[20px] lg:w-[28px] lg:h-[28px] h-[20px] rounded-full flex items-center justify-center ${active ? '' : ''
                }`}
        >
            <div className={`w-[14px] lg:w-[20px] lg:h-[20px] h-[14px] rounded-full ${active ? 'bg-[#979797]' : ''}`} />
        </div>
    );
};

export default CustomRadio;
