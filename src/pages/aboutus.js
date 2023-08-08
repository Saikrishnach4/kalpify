import Layout from '@/Components/Layout/Layout';
import React from 'react';
import back from '../assets/icon/Expand_left_light.png'
import Image from 'next/image';
import Link from 'next/link';
import TopNav from '@/Components/Navbar/TopNav';
import { lexend_exa } from '@/font';
import img from '../assets/image/pp.png'
import DesktopTopNav from '@/Components/Navbar/DesktopTopNav';

const aboutus = () => {
    return (
        <div>
            <div className='lg:hidden'>
                <TopNav />
            </div>
            <div className='pb-28' >
                <div className='lg:hidden'>
                    <div className='flex  items-center mt-5 w-full'>
                        <Link href='/profile'>
                            <div className="ps-5">
                                <Image src={back} alt="icon" />
                            </div></Link>
                        <div className='w-full text-center'>
                            <h1 className=" font-normal text-[20px]  me-5">About Us</h1>
                        </div>
                    </div>
                </div>

                <div className='hidden lg:block'>
                    <DesktopTopNav />
                </div>
                <div className='flex flex-col lg:flex-row lg:w-full lg:justify-center lg:items-center'>
                    <div className='lg:w-[60%]'>
                        <div className='hidden lg:block font-normal mt-5 lg:mx-12'> <p className='text-[40px]'>About Us</p>
                        </div>
                        <p className='mx-5 text-justify text-[16px] font-normal lg:mx-12 mt-5 bg-[#D5D5D5] lg:text-[20px] lg:p-5'><span className={lexend_exa.className}>Lorem ipsum dolor sit amet consectetur. Mattis enim facilisi pharetra quis at nisl egestas mi nisl. Mauris gravida felis nisi elit amet blandit nisl. Lectus varius auctor justo tellus ut scelerisque sodales nunc. Fames natoque est cursus metus pellentesque netus quam consequat nam. Leo interdum cursus etiam nunc sem tincidunt mauris facilisis vitae. In neque gravida vulputate ut consequat posuere ut ac. Lacus malesuada sagittis pellentesque semper. Dictum vitae egestas quam tellus semper proin at adipiscing scelerisque. Quis dui sem diam ligula nisl dolor cursus urna nunc. Mi aenean purus porttitor nunc et pulvinar nec. Phasellus lectus et nunc quisque pretium fermentum.
                            Posuere sed nunc netus donec. Quis consectetur fringilla duis dictumst. Posuere pharetra elementum montes aenean in tristique sit. Tempus ac tempor neque tortor. Gravida risus sit tempor eget nec. Risus sit pharetra augue id ullamcorper. Sit ac risus nulla eget risus. Feugiat fusce mattis viverra ut leo. Dignissim enim viverra ut dignissim mi pellentesque vestibulum. Ipsum vitae feugiat eu facilisis.
                            Sed placerat sollicitudin facilisi urna consequat amet purus convallis. Facilisis bibendum elementum dui id cras tristique. Est rutrum elit consequat rutrum gravida ultrices fames curabitur. Molestie erat quis sed platea purus in euismod. Eget nec consectetur volutpat at consequat. Sapien nec mi lacus morbi. Pretium gravida ullamcorper mattis felis amet lectus elit condimentum. Sit metus tincidunt volutpat et eu eu. Tortor nunc lectus id malesuada orci platea orci. Imperdiet neque pellentesque ante praesent ac tempus faucibus velit faucibus.
                            Amet id lorem eget elementum commodo.</span></p>
                    </div>
                    <div className='hidden lg:block lg:w-[40%]'>
                        <Image src={img} alt='img' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default aboutus;