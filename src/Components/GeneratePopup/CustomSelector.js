import React, { useState } from 'react';

const CustomSelector = () => {
    const [isButtonRight, setIsButtonRight] = useState(false);

    const handleDivClick = (e) => {
        // Get the click position relative to the div's left edge
        const clickPosition = e.clientX - e.currentTarget.getBoundingClientRect().left;
        const divWidth = e.currentTarget.offsetWidth;

        // Calculate the middle of the div
        const middle = divWidth / 2;

        // Determine whether to move the button left or right based on click position
        setIsButtonRight(clickPosition > middle);
    };

    return (
        <div
            className="relative w-[100px] h-[30px] lg:w-[160px] lg:h-[50px]"
            onClick={handleDivClick}
            style={{

                marginTop: '5px',
                borderRadius: '54px',
                background: '#290100',
                cursor: 'pointer', // Add cursor style to indicate it's clickable
            }}
        >
            <div
                className={`w-[100px] h-[30px] lg:w-[160px] lg:h-[50px] rounded-[54px] ${isButtonRight ? 'bg-[#BFB461]' : ''
                    }`}
            />
            <div
                className={`bg-white w-[30px] h-[30px] lg:w-[60px] lg:h-[60px] mt-[-30px] lg:mt-[-55px] rounded-[54px] ${isButtonRight ? 'ml-[70px] lg:ml-[100px]' : ''
                    }`}
                onClick={() => setIsButtonRight((prevState) => !prevState)}
            />
        </div>
    );
};

export default CustomSelector;
