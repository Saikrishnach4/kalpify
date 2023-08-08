import React from 'react';
import icon from '../../assets/icon/system-outline-76-newspaper 1.png'
import Image from 'next/image';
import tshirt from '../../assets/icon/tshirt 1.png'
import cotton from '../../assets/icon/cotton 1.png'
import fabric from '../../assets/icon/fabric 1.png'
import fabric1 from '../../assets/icon/fabric(1) 1.png'

const DeliveryInformation = () => {
    return (
        <div className='lg:w-[550px] mt-3'>
            <div className='text-[10px] lg:text-[20px] font-bold flex justify-between'>
                <p className='text-[#7C7979]'>Delivery Information </p>
                <p className='text-[#03A300] font-normal'>Free Delivery in 2-3 Days </p>
            </div>
            {/* mobile  */}
            <div className='lg:hidden '>
                <p className='lg:hidden text-[10px] font-normal mt-3'>Check Delivery availability</p>
                <div className='mt-3 flex gap-2'>
                    <input type="text" className='bg-[#D9D9D9] h-[35px] py-2 px-2 w-full rounded-[8px] text-[10px]' placeholder='Enter Zip code' />
                    <button className='bg-[#949494] px-3 py-2 rounded-[8px] text-[10px] text-white'>Check</button>
                </div>
                <p className='text-[14px] mt-3 font-medium'>Description</p>
                <p className='text-[14px] mt-2 font-bold'>PRODUCT DETAILS</p>
                <p className='text-[14px] font-normal'>Lorem ipsum dolor sit amet consectetur. Ac id nunc est eget nisl. In dui nunc est neque egestas amet morbi lobortis. Et et turpis quis sed blandit pellentesque. Ornare velit feugiat quis tincidunt eget id aliquam. Erat ridiculus phasellus cursus et hendrerit suspendisse tellus. Posuere tempor auctor varius leo.</p>
                <div className='flex justify-center gap-4 mt-3'>
                    <div className='flex flex-col justify-center items-center'>
                        <Image src={cotton} alt='img' />
                        <p className='text-[10px] font-medium text-center'>Premium
                            fabric.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <Image src={fabric} alt='img' />
                        <p className='text-[10px] font-medium text-center'>Premium
                            stitching</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <Image src={fabric1} alt='img' />
                        <p className='text-[10px] font-medium text-center'>240 GSM
                            French Terry</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <Image src={tshirt} alt='img' />
                        <p className='text-[10px] font-medium text-center'>Stylish
                            oversized fit</p>
                    </div>
                </div>
                <p className='mt-3 text-[#303030] font-bold text-[14px]'>Return & exchange <span className='font-normal text-[#636363]'>For any returns and exchange please read our FAQs Page.No Returns/Exchange on Tank tops and Baby tees.</span></p>
            </div>
            {/* desktop  */}
            <div className='hidden lg:block'>
                <div className='flex flex-col gap-1 mt-2 text-[15px] font-normal'>
                    <p>100% Original Products</p>
                    <p> Pay on delivery might be available</p>

                    <p> Easy 14 days returns and exchanges</p>
                    <p> Try & Buy might be available</p>
                </div>
                <div className='mt-3 flex items-center gap-2'>
                    <p className='text-[20px] font-bold'>Product Details</p>
                    <Image src={icon} alt='img' />
                </div>
                <div className='flex flex-col gap-1 mt-1 text-[18px] font-normal'>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </div>
        </div>
    );
};

export default DeliveryInformation;