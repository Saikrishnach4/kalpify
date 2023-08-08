import React from 'react';

const Address = () => {
    return (
        <div className='mb-12'>
            <p className='text-[16px] font-normal'>Confirm Address</p>
            <p className='text-[15px] text-[#909090] font-normal'>Select your Delivery Address</p>

            <div className='mt-3 '>
                <p className='text-[13px] font-normal text-[#909090]'>Saved Address</p>
                <div className='bg-[#EEEEEE] border-[1px] border-[#D4D4D4] rounded-[9px] p-3 mt-3'>
                    <p className='text-[14px]'>Jyotirmoy Mondal</p>
                    <div className='text-[12px] text-[#858585] flex flex-col gap-[1px] mt-[1px]'>
                        <p>G / 18 / 2, Bapuji Nagar</p>
                        <p>LP 114/6/4/1</p>
                        <p>Nera Royal Guest House</p>
                        <p>Jadavpur, Kolkata, 700092</p>
                        <p>West Bengal</p>
                        <p>Mobile : +91 86531 38715</p>
                    </div>
                </div>
            </div>
            <div className='mt-3 '>
                <div className='bg-[#EEEEEE]  rounded-[9px] p-3 mt-3'>
                    <p className='text-[14px]'>Jyotirmoy Mondal</p>
                    <div className='text-[12px] text-[#858585] flex flex-col gap-[1px] mt-[1px]'>
                        <p>G / 18 / 2, Bapuji Nagar</p>
                        <p>LP 114/6/4/1</p>
                        <p>Nera Royal Guest House</p>
                        <p>Jadavpur, Kolkata, 700092</p>
                        <p>West Bengal</p>
                        <p>Mobile : +91 86531 38715</p>
                    </div>
                </div>
            </div>
            <div>
                <p className='text-[13px] text-end mt-3 text-[#909090]'>Add new address </p>
            </div>
        </div>
    );
};

export default Address;