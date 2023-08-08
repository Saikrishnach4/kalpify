import { jetBrains_Mono } from '@/font';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const OTPInput = () => {
    const [showResend, setShowResend] = useState(true);
    const [countdown, setCountdown] = useState(56);

    const handleInputChange = (event, index) => {
        const { value } = event.target;
        // You can use the value for further processing or validation

        // Move focus to the next input box if a value is entered
        if (value && index < 3) {
            document.getElementById(`otpInput${index + 1}`).focus();
        }
    };

    const handleResendClick = () => {
        // Code to resend the OTP goes here
        setShowResend(false);
        setCountdown(56);
    };

    useEffect(() => {
        let interval;

        if (!showResend && countdown > 0) {
            interval = setInterval(() => {
                setCountdown((prevCountdown) => prevCountdown - 1);
            }, 1000);
        }

        return () => {
            clearInterval(interval);
        };
    }, [showResend, countdown]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60).toString().padStart(2, '0');
        const seconds = (time % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    };

    return (
        <div className='lg:w-full'>
            <div className="flex gap-1 md:gap-3 lg:gap-5 justify-center items-center lg:w-full">
                {[0, 1, 2, 3].map((index) => (
                    <input
                        key={index}
                        type="text"
                        id={`otpInput${index}`}
                        maxLength={1}
                        className="otp-box  bg-[#D9D9D9] w-16 h-16 lg:w-[80px] lg:h-[80px] text-[24px] font-normal rounded-lg p-4 text-center "
                        onChange={(event) => handleInputChange(event, index)}
                    />
                ))}

            </div>
            {showResend ? (
                <p className='text-end mt-4 tracking-[13.2] text-[10px] lg:text-[16px] lg:w-full'>
                    <span className={jetBrains_Mono.className}> Don’t get the code?</span>
                    <span className='text-[#000000] font-semibold'>
                        <button onClick={handleResendClick}><span className={jetBrains_Mono.className}>Resend</span></button>
                    </span>
                </p>
            ) : (
                <p className='text-end mt-4 tracking-[13.2] text-[10px] lg:text-[20px]'>
                    <span className={jetBrains_Mono.className}> Re-Send OTP in</span> <span className='text-[#000000] font-semibold'><span className={jetBrains_Mono.className}>{formatTime(countdown)}</span></span>
                </p>
            )}
        </div>
    );
};

export default OTPInput;
