import React, { useState } from 'react';
import Image from 'next/image';
import ColorWheel from './ColorWheel';
import SizePopup from './SizePopup';
import CategoryPopup from './CategoryPopup';
import LoadingCircle from './LoadingCircle';


const ColorPopup = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const handleNext = () => {
        setCurrentStep(prevStep => prevStep + 1);
    };

    return (
        <div>
            <div className="w-full">
                {/* Step 1 */}
                {currentStep === 1 && (
                    <div className='first px-5 lg:px-0'>
                        {/* Step 1 content */}
                        {/* ... */}


                        <SizePopup />

                        <div className="flex justify-center items-center max-w-screen-md mx-auto text-[16px] lg:text-[24px] font-bold mt-3 lg:mt-0">
                            <div className="w-[100px] h-[30px] lg:w-[186px] lg:h-[48px] rounded-xl lg:mt-0  flex justify-center bg-[#1E1D1D] text-white">
                                <button className="" onClick={handleNext}>
                                    NEXT
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                {/* Step 2 */}
                {currentStep === 2 && (
                    <div className='second  px-5 lg:px-0'>
                        <div className="flex justify-center items-center">
                            <LoadingCircle />
                        </div>
                        <h1 className="text-[18px] lg:text-[24px] font-bold text-center text-black">
                            Your Design is getting Ready</h1>
                        <p className="text-[16px] lg:text-[20px] font-light text-center">
                            Till Then select your preferences
                        </p>
                        <p className="text-[16px] lg:text-[20px] font-light text-center">
                            Select Color
                        </p>
                        <ColorWheel />
                        {/* Step 2 content */}
                        {/* ... */}
                        <div className="flex justify-center items-center max-w-screen-md mx-auto text-[16px] lg:text-[24px] font-bold mt-3 lg:mt-0">
                            <div className="w-[186px] h-[48px] rounded-xl  button-border-select flex justify-center">
                                <div className="w-[100px] h-[30px] lg:w-[186px] lg:h-[48px] rounded-xl lg:mt-5  flex justify-center bg-[#1E1D1D] text-white">
                                    <button className="" onClick={handleNext}>
                                        NEXT
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {/* Step 3 */}
                {currentStep === 3 && (
                    <div>
                        <CategoryPopup />
                        {/* Step 3 content */}
                        {/* ... */}
                        <div className="flex justify-center items-center max-w-screen-md mx-auto text-[16px] lg:text-[24px] font-bold mt-3 lg:mt-0">
                            <div className="w-[186px] h-[48px] rounded-xl mt-5 button-border-select flex justify-center">
                                <div className="w-[100px] h-[30px] lg:w-[186px] lg:h-[48px] rounded-xl lg:mt-5  flex justify-center bg-[#1E1D1D] text-white">
                                    <button >
                                        NEXT
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ColorPopup;
