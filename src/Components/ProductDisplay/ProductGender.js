import React, { useState } from 'react';

const ProductGender = () => {
    const [activeGender, setActiveGender] = useState('Male');

    const handleGenderClick = (gender) => {
        setActiveGender(gender);
    };

    return (
        <div className='w-[400px] mb-2'>
            <div>
                <p className='text-[#7C7979] text-[20px] font-bold'>Gender</p>
                <div className=' flex gap-5'>
                    <button
                        className={`text-[#7B7B7B] text-[20px] ${activeGender === 'Male' ? 'font-bold text-gray-900' : 'font-normal'
                            }`}
                        onClick={() => handleGenderClick('Male')}
                    >
                        Male
                    </button>
                    <button
                        className={`text-[#7B7B7B] text-[22px] ${activeGender === 'Female' ? 'text-gray-900 font-bold  ' : 'font-normal '
                            }`}
                        onClick={() => handleGenderClick('Female')}
                    >
                        Female
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductGender;
