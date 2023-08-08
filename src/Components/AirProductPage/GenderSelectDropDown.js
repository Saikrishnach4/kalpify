import React, { useState } from 'react';
import { BiSolidDownArrow } from 'react-icons/bi';

const GenderSelectDropDown = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Male');

    const handleToggleDropdown = () => {
        setIsDropdownOpen((prevState) => !prevState);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsDropdownOpen(false);
    };

    return (
        <div className="relative">
            <button
                className={`bg-[#D2D2D2] relative z-100 w-[101px] lg:w-[155px] h-[35px] lg:h-[49px] rounded-[8px] flex justify-between items-center font-medium text-[16px] px-3 gap-1 lg:px-5 my-3 ${isDropdownOpen ? 'rounded-t-[8px] rounded-b-none' : 'rounded-[8px]'
                    }`}
                onClick={handleToggleDropdown}
            >
                <p>{selectedOption}</p>
                <BiSolidDownArrow />
            </button>
            {isDropdownOpen && (
                <div
                    className="absolute top-full left-0 bg-[#D2D2D2] w-[101px] lg:w-[155px]  rounded-b-[8px] z-100  border-t-0 border-[#D2D2D2] border-[2px]"
                    style={{ marginTop: '1px' }}
                >
                    <button
                        className="w-full h-[35px] lg:h-[49px] text-left font-medium text-[16px] px-2 lg:px-5 hover:bg-gray-200"
                        onClick={() => handleOptionClick('Male')}
                    >
                        Male
                    </button>
                    <button
                        className="w-full h-[35px] lg:h-[49px] text-left font-medium text-[16px] px-2 lg:px-5 hover:bg-gray-200"
                        onClick={() => handleOptionClick('Female')}
                    >
                        Female
                    </button>
                </div>
            )}
        </div>
    );
};

export default GenderSelectDropDown;
