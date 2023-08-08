import React from 'react';

const LoadingCircle = () => {
    return (
        <div>
            <div className='w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] bg-[#EE8A42] rounded-full'>
                <div className='lg:w-[80px] lg:h-[80px] rounded-full flex justify-end items-end'>
                    <button className='mt-12  lg:mt-0 me-2 lg:me-0 w-[10px] h-[10px] lg:w-[17px] lg:h-[17px] bg-[#FA4242] rounded-full' />
                </div>
            </div>
        </div>
    );
};

export default LoadingCircle;