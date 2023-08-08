import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

const CustomSquareRadio = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleClick = () => {
        setIsChecked((prevState) => !prevState);
    };

    return (
        <div>
            <button
                className={`w-[25px] h-[26px] border-[2px] bg-white border-[#6A6A6A] rounded-[5px] flex justify-center items-center ${isChecked ? ' ' : ''
                    }`}
                onClick={handleClick}
            >
                {isChecked && <FaCheck />}
            </button>
        </div>
    );
};

export default CustomSquareRadio;
