import Image from 'next/image';
import React from 'react';
import { AiFillStar, AiOutlineLike } from 'react-icons/ai';
import img1 from '../../assets/image/review1/1.png'
import img2 from '../../assets/image/review1/2.png'
import img3 from '../../assets/image/review1/3.png'
import img4 from '../../assets/image/review1/4.png'
import img5 from '../../assets/image/review2/1.png'
import img6 from '../../assets/image/review2/2.png'
import img7 from '../../assets/image/review2/3.png'
import img8 from '../../assets/image/review2/4.png'
import { BiDislike } from 'react-icons/bi';

const CustomerReview = () => {
    return (
        <div className='mb-5'>
            <p className='text-[20px] font-bold mb-3'>Customer Reviews (4678)</p>
            <div>
                <div className='flex gap-2'>
                    <div className='font-bold text-[20px] flex items-center gap-3 w-[80px] h-[40px] rounded-[5px] bg-[#DCDCDC] justify-center'>
                        <p>4</p>
                        <div className='text-[26px] text-[#EBA900]'>
                            <AiFillStar />
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <Image src={img1} alt='img' />
                        <Image src={img2} alt='img' />
                        <Image src={img3} alt='img' />
                        <Image src={img4} alt='img' />
                    </div>
                </div>
                <div>
                    <p className='text-[15px] font-normal mt-2'>Good product it loos everywhere. After stritching my t-shirt it torn from sides . Very bad for me,and when I buy the( S)size is not perfect also.but looks awesome. So don't stritch .</p>
                    <div className='flex justify-between mt-3 items-center'>
                        <p className='text-[15px] text-[#878787] font-normal'>Jyotirmoy Mondal | 23 Jan 2023</p>
                        <div className='flex items-center gap-2 text-[24px]'>
                            <AiOutlineLike />
                            <BiDislike />
                        </div>
                    </div>
                </div>
                <div className='w-full h-[1px] bg-[#BDBDBD] my-3' />
            </div>
            <div>
                <div className='flex gap-2'>
                    <div className='font-bold text-[20px] flex items-center gap-3 w-[80px] h-[40px] rounded-[5px] bg-[#DCDCDC] justify-center'>
                        <p>4</p>
                        <div className='text-[26px] text-[#EBA900]'>
                            <AiFillStar />
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <Image src={img5} alt='img' />
                        <Image src={img6} alt='img' />
                        <Image src={img7} alt='img' />
                        <Image src={img8} alt='img' />
                    </div>
                </div>
                <div>
                    <p className='text-[15px] font-normal mt-2'>Good product it loos everywhere. After stritching my t-shirt it torn from sides . Very bad for me,and when I buy the( S)size is not perfect also.but looks awesome. So don't stritch .</p>
                    <div className='flex justify-between mt-3 items-center'>
                        <p className='text-[15px] text-[#878787] font-normal'>Jyotirmoy Mondal | 23 Jan 2023</p>
                        <div className='flex items-center gap-2 text-[24px]'>
                            <AiOutlineLike />
                            <BiDislike />
                        </div>
                    </div>
                </div>
                <div className='w-full h-[1px] bg-[#BDBDBD] my-3' />
            </div>

        </div>
    );
};

export default CustomerReview;