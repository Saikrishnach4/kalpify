import Image from 'next/image';
import React from 'react';
import one from '../../assets/image/one.png'
import two from '../../assets/image/two.png'
import three from '../../assets/image/three.png'
import four from '../../assets/image/four.png'


const CustomerPhoto = () => {
    return (
        <div className='mb-5'>
            <p className='text-[20px] font-bold'>Customer Photo (6675)</p>
            <div className='flex w-full justify-between mt-3'>
                <Image src={one} alt='img' />
                <Image src={two} alt='img' />
                <Image src={three} alt='img' />
                <div className="relative rounded-[11px]">
                    <Image src={four} alt="img" className="block w-full h-auto" />
                    <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold  shadow-set-customer-photo">
                        <span className='text-[40px]'> 675 +</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CustomerPhoto;