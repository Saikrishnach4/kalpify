import React, { useState } from 'react';
import ColorPopup from './ColorPopup';

const GeneratePopup = () => {
    const [isOpenModal4, setIsOpenModal4] = useState(false);
    const [isOpenModal5, setIsOpenModal5] = useState(false);
    const [isOpenModal6, setIsOpenModal6] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 3; // Set the total number of steps in your stepper

    const handleOpenModal4 = () => {
        setIsOpenModal4(true);
    };

    const handleCloseModal4 = () => {
        setIsOpenModal4(false);
        setCurrentStep(1); // Reset the stepper to the first step when Modal 4 is closed
    };

    const handleOpenModal5 = () => {
        setIsOpenModal5(true);
    };

    const handleCloseModal5 = () => {
        setIsOpenModal5(false);
    };

    const handleOpenModal6 = () => {
        setIsOpenModal6(true);
    };

    const handleCloseModal6 = () => {
        setIsOpenModal6(false);
    };

    const handleNextStep = () => {
        if (currentStep < totalSteps) {
            setCurrentStep((prevStep) => prevStep + 1);
        }
    };

    const handlePrevStep = () => {
        if (currentStep > 1) {
            setCurrentStep((prevStep) => prevStep - 1);
        }
    };
    return (
        <div>
            {/* modal  */}
            <div >
                <div className='flex justify-end mt-5 mr-[10%] '>

                    <button className="btn w-[87px] lg:w-[200px] h-[32px] lg:h-[54px] lg:text-[22px] bg-[#444242] rounded-[5px] text-[10px] text-white" onClick={() => window.my_modal_4.showModal()}>GENERATE</button>

                </div>
                <dialog id="my_modal_4" className="modal rounded-[35px]">
                    <form method="dialog" className="modal-box rounded-[35px] lg:w-[900px] py-8 max-w-[94rem] popup-bg shadow-xl bg-[#8a8a8a73] ">
                        <ColorPopup />
                    </form>
                </dialog>
            </div>
        </div>
    );
};

export default GeneratePopup;