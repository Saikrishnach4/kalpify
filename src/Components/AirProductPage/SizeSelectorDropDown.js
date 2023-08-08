import React, { useState } from 'react';
import { BiSolidDownArrow } from 'react-icons/bi';

const SizeSelectorDropDown = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('S');

    const handleToggleDropdown = () => {
        setIsDropdownOpen((prevState) => !prevState);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsDropdownOpen(false);
    };
    return (
        <div>
            <div className="relative">
                <button
                    className={`bg-[#D2D2D2] w-[101px] lg:w-[155px] h-[35px] lg:h-[49px] rounded-[8px] flex justify-between items-center font-medium text-[16px] px-5 my-3 ${isDropdownOpen ? 'rounded-t-[8px] rounded-b-none' : 'rounded-[8px]'
                        }`}
                    onClick={handleToggleDropdown}
                >
                    <p>{selectedOption}</p>
                    <BiSolidDownArrow />
                </button>
                {isDropdownOpen && (
                    <div
                        className="absolute top-full left-0 bg-[#D2D2D2] w-[101px] lg:w-[155px] rounded-b-[8px]  border-t-0 border-[#D2D2D2] border-[2px]"
                        style={{ marginTop: '1px' }}
                    >
                        <button
                            className="w-full h-[49px] text-left font-medium text-[16px] px-5 hover:bg-gray-200"
                            onClick={() => handleOptionClick('S')}
                        >
                            S
                        </button>
                        <button
                            className="w-full h-[49px] text-left font-medium text-[16px] px-5 hover:bg-gray-200"
                            onClick={() => handleOptionClick('M')}
                        >
                            M
                        </button>
                        <button
                            className="w-full h-[49px] text-left font-medium text-[16px] px-5 hover:bg-gray-200"
                            onClick={() => handleOptionClick('L')}
                        >
                            L
                        </button>
                        <button
                            className="w-full h-[49px] text-left font-medium text-[16px] px-5 hover:bg-gray-200"
                            onClick={() => handleOptionClick('XL')}
                        >
                            XL
                        </button>
                        <button
                            className="w-full h-[49px] text-left font-medium text-[16px] px-5 hover:bg-gray-200"
                            onClick={() => handleOptionClick('XXL')}
                        >
                            XXL
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SizeSelectorDropDown;