import React from 'react';
import img from '../../../assets/menPage/wepik-export-202307202020341z9w 2.png'
import Image from 'next/image';

const BannerTwo = () => {
    return (
        <div className=''>
            <div className='shadow-set h-[30px]' />
            <div className='h-full flex items-center pt-[100px]'>
                <div className='h-[450px] w-full bg-[#ECECEC] rounded-[30px]'>
                    <div className='flex w-full items-center h-full px-5'>
                        <div className='w-[40%]'></div>
                        <div className='w-[60%]'>
                            <p className='text-[30px] font-medium'>New Treading Collection</p>
                            <p className='text-[16px] text-[#686868] text-justify'>Lorem ipsum dolor sit amet consectetur. Nulla commodo ut et morbi in arcu congue faucibus. Eu eu sodales ipsum pretium dapibus ut. Cursus sed laoreet semper viverra id. In rhoncus est eu quisque. Sem purus ipsum porttitor proin velit proin tellus. Arcu proin tellus rhoncus in nec quis hendrerit.
                            </p>
                            <h1 className='font-medium text-[30px] mt-5'>
                                Flat 50% OFF
                            </h1>
                            <p className='text-[18px] text-[#717171]'>On over 1000+ Products</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex w-full mt-[-500px]'>
                <div className='bg-[#D0D0D0] h-[550px]   w-[400px] rounded-[30px]'>

                </div>
                <div className='ms-[-300px] w-[400px]'>
                    <Image src={img} alt='img' className='' />
                </div>

            </div>
        </div>
    );
};

export default BannerTwo;