import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

const CustomApplyCheckBox = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleClick = () => {
        setIsChecked((prevState) => !prevState);
    };
    return (
        <div>

            <button
                className={`w-[22px] h-[25px] border-[1px] border-[#313131] bg-[#ABABAB] flex justify-center items-center rounded-[7px] ${isChecked ? ' ' : ''
                    }`}
                onClick={handleClick}
            >
                {isChecked && <FaCheck />}
            </button>
        </div>
    );
};

export default CustomApplyCheckBox;