
import React, { useState } from 'react';
import { BsEmojiFrown, BsEmojiLaughing, BsEmojiNeutral, BsEmojiSmile } from 'react-icons/bs';
import CartDetails from './CartDetails';
import Address from './Address';
import Payment from './Payment';
import CheckoutDoneStatus from './CheckoutDoneStatus';
import Layout from '../Layout/Layout';
import TopNavTwo from '../Navbar/TopNavTwo';
import Link from 'next/link';

const CartMobile = () => {
    const [step, setStep] = useState(1);

    const handleNextClick = () => {
        setStep((prevStep) => prevStep + 1);
    };
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    };

    // const closeModal = () => {
    //     setIsOpen(false);
    // };

    const [selectedEmoji, setSelectedEmoji] = useState(null);

    const handleEmojiClick = (emoji) => {
        setSelectedEmoji(emoji);
    };
    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <div>
                        <div>
                            <CartDetails />

                            <div className='flex justify-center items-center'>
                                <button
                                    className='text-[20px] text-[#FFFFFF] bg-[#444242] w-[115px] h-[46px] rounded-[7px]'
                                    onClick={handleNextClick}
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                        {/* <div>
                            <EmptyCart />

                            <div className='flex justify-center items-center'>
                                <button
                                    className='text-[20px] text-[#FFFFFF] bg-[#444242] w-[176px] h-[46px] rounded-[7px]'
                                    onClick={handleNextClick}
                                >
                                    Back To Home
                                </button>
                            </div>
                        </div> */}
                    </div>
                );
            case 2:
                return (
                    <div>
                        <Address />
                        <div className='flex justify-center items-center'>
                            <button
                                className='text-[20px] text-[#FFFFFF] bg-[#444242] w-[115px] h-[46px] rounded-[7px]'
                                onClick={handleNextClick}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div>
                        <Payment />
                        {/* popup  */}
                        <div className='flex justify-center items-center'>
                            <button
                                onClick={openModal}
                                className='text-[20px] text-[#FFFFFF] bg-[#444242] w-[158px] h-[46px] rounded-[7px]'
                            >
                                Check Out
                            </button>
                        </div>
                        {/* modal box  */}
                        {isOpen && (
                            <div className="fixed inset-0 flex items-center justify-center z-10">
                                <div className="bg-gray-800 opacity-75 absolute inset-0"></div>
                                <div className="bg-white z-20 p-4 rounded-[17px]">
                                    <p className='text-[14px]  text-center'>Give us a positive Feedback</p>
                                    <div className='flex gap-3 mx-5 justify-center items-center'>
                                        <div
                                            className={` rounded-full ${selectedEmoji === 'frown' ? 'bg-[#D9D9D9] p-2' : ''}`}
                                            onClick={() => handleEmojiClick('frown')}
                                        >
                                            <BsEmojiFrown className={` ${selectedEmoji === 'frown' ? 'bg-yellow-400 rounded-full' : ''}`} />
                                        </div>
                                        <div
                                            className={` rounded-full ${selectedEmoji === 'neutral' ? 'bg-[#D9D9D9] p-2' : ''}`}
                                            onClick={() => handleEmojiClick('neutral')}
                                        >
                                            <BsEmojiNeutral className={` ${selectedEmoji === 'neutral' ? 'bg-yellow-400 rounded-full' : ''}`} />
                                        </div>
                                        <div
                                            className={` rounded-full ${selectedEmoji === 'neutral2' ? 'bg-[#D9D9D9] p-2' : ''}`}
                                            onClick={() => handleEmojiClick('neutral2')}
                                        >
                                            <BsEmojiNeutral className={` ${selectedEmoji === 'neutral2' ? 'bg-yellow-400 rounded-full' : ''}`} />
                                        </div>
                                        <div
                                            className={` rounded-full ${selectedEmoji === 'smile' ? 'bg-[#D9D9D9] p-2' : ''}`}
                                            onClick={() => handleEmojiClick('smile')}
                                        >
                                            <BsEmojiSmile className={` ${selectedEmoji === 'smile' ? 'bg-yellow-400 rounded-full' : ''}`} />
                                        </div>
                                        <div
                                            className={` rounded-full ${selectedEmoji === 'laughing' ? 'bg-[#D9D9D9] p-2' : ''}`}
                                            onClick={() => handleEmojiClick('laughing')}
                                        >
                                            <BsEmojiLaughing className={` ${selectedEmoji === 'laughing' ? 'bg-yellow-400 rounded-full' : ''}`} />
                                        </div>
                                    </div>
                                    <div>
                                        <p className='text-[14px] font-medium text-center'>Do you have any thoughts to share?</p>
                                        <div className='mx-3'>
                                            <textarea typeof='text' className='outline-none h-[107px] rounded-[7px] bg-[#D9D9D9]  p-2 my-4 w-full' />
                                        </div>
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <button
                                            onClick={handleNextClick}
                                            className="text-[20px] text-[#FFFFFF] bg-[#444242] w-[158px] h-[46px] rounded-[7px]"
                                        >
                                            Send
                                        </button>
                                    </div></div>
                            </div>
                        )}

                        {/* <div className='flex justify-center items-center'>
                            <button
                                className='text-[20px] text-[#FFFFFF] bg-[#444242] w-[158px] h-[46px] rounded-[7px]'
                             
                            >
                                Check Out
                            </button>
                        </div> */}
                    </div>
                );
            case 4:
                return (
                    <div>
                        <CheckoutDoneStatus />
                        <div className='flex justify-center items-center'>
                            <Link href='/'>
                                <button className='text-[20px] text-[#FFFFFF] bg-[#444242] w-[174px] h-[46px] rounded-[7px]'>
                                    Back To Home
                                </button>
                            </Link>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div>
            <TopNavTwo />
            <div className='pb-28 mx-5'>
                <div className='mt-5'>
                    {/* progress bar */}
                    <div>
                        <div className='bg-[#D9D9D9] h-[8px] w-full rounded-[7px]' />
                        <div className='flex justify-between z-10 mt-[-12px] relative'>
                            <div className={`w-[16px] h-[16px] rounded-full ${step >= 1 ? 'bg-[#747474]' : 'bg-[#D9D9D9]'}`} />
                            <div className={`w-[16px] h-[16px] rounded-full ${step >= 2 ? 'bg-[#747474]' : 'bg-[#D9D9D9]'}`} />
                            <div className={`w-[16px] h-[16px] rounded-full ${step >= 3 ? 'bg-[#747474]' : 'bg-[#D9D9D9]'}`} />
                            <div className={`w-[16px] h-[16px] rounded-full ${step >= 4 ? 'bg-[#747474]' : 'bg-[#D9D9D9]'}`} />
                        </div>
                        <div className='flex justify-between  mx-3 mt-[-12px]  relative'>

                            <div className={`w-full h-[8px] ${step >= 2 ? 'bg-[#747474]' : 'bg-[#D9D9D9]'}`} />
                            <div className={`w-full h-[8px] ${step >= 3 ? 'bg-[#747474]' : 'bg-[#D9D9D9]'}`} />
                            <div className={`w-full h-[8px]  ${step >= 4 ? 'bg-[#747474]' : 'bg-[#D9D9D9]'}`} />
                        </div>

                        <div className='flex justify-between'>
                            <p>Cart</p>
                            <p>Address</p>
                            <p>Payment</p>
                            <p>Done</p>
                        </div>
                    </div> {/* progress bar */}
                    <div className='mt-5'>{renderStep()}</div>
                </div>
            </div>
        </div>
    );
};

export default CartMobile;
