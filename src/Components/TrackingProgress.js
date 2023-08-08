import React from 'react';

const TrackingProgress = () => {
    return (
        <div className='flex mx-5'>
            <div className='h-[277px] w-[8px] bg-[#D9D9D9] rounded-[7px]' />
            <div className='h-[171px] w-[8px] bg-[#00AB1B] rounded-[7px] ml-[-8px]' />
            <div className='flex flex-col justify-between ml-[-13px]'>
                <div className='w-[18px] h-[18px] bg-white border-[#00AB1B] border-[3px] rounded-full' />
                <div className='w-[18px] h-[18px] bg-white border-[#00AB1B] border-[3px] rounded-full' />
                <div className='w-[18px] h-[18px] bg-white border-[#00AB1B] border-[3px] rounded-full' />
                <div className='w-[18px] h-[18px] bg-[#D9D9D9] rounded-full' />
                <div className='w-[18px] h-[18px] bg-[#D9D9D9] rounded-full' />
            </div>
            <div className='ms-5 flex flex-col justify-between'>
                <div className='text-[13px] '>
                    <p className='font-semibold'>Order Placed</p>
                    <p className='text-[#9B9797]'>Monday 12 Jul 2023</p>
                </div>
                <div className='text-[13px] '>
                    <p className='font-semibold'>Order Packed</p>
                    <p className='text-[#9B9797]'>Monday 12 Jul 2023</p>
                </div>
                <div className='text-[13px] '>
                    <p className='font-semibold'>Order Placed</p>
                    <p className='text-[#9B9797]'>Monday 12 Jul 2023</p>
                </div>
                <div className='text-[13px] '>
                    <p className='font-semibold'>Shipped</p>
                    <p className='text-[#9B9797]'>Monday 12 Jul 2023</p>
                </div>
                <div className='text-[13px] '>
                    <p className='font-semibold'>Delivered</p>

                </div>
            </div>
        </div>
    );
};

export default TrackingProgress;