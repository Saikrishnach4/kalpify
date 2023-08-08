import Image from 'next/image';

import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import logo from '../../assets/logo/Group 1.png'
import icon from '../../assets/icon/Search_alt_duotone.png'
import bag from '../../assets/icon/Bag_duotone.png'
import basket from '../../assets/icon/bag.png'
import fav from '../../assets/icon/fav.png'
import right from '../../assets/icon/Expand_right_light.png'
import logout from '../../assets/icon/Download_circle_duotone_line.png'
import Link from 'next/link';
import { useAuth } from '../../pages/utils/authcontext';
import { FacebookLogout } from 'react-facebook-login';

const Navbar = () => {
    const router = useRouter();
    const { isLoggedIn,googleAccessToken,facebookAccessToken, logout,facebookLogout } = useAuth();
    
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (button) => {
        setActiveButton(button);
    };
    const [isDivOpen, setIsDivOpen] = useState(false);

    const handleButtonClickTwo = () => {
        setIsDivOpen((prevState) => !prevState);
    };
     // Import the toast library or use your preferred library

    // ...
    
  // Import the toast library or use your preferred library

// ...

 // Import the toast library or use your preferred library

// ...

 // Import the toast library or use your preferred library

// ...

const handleLogout = async () => {
    let logoutSource = null;

    try {
      // Clear Google API client token (if applicable)
      const auth2 = gapi.auth2.getAuthInstance();
      await auth2.signOut();
      document.cookie = 'accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      logoutSource = 'Google';
    } catch (error) {
      console.error('Error while signing out from Google:', error);
    }

    try {
      // Call the facebookLogout function from the context
      await facebookLogout();

      logoutSource = 'Facebook';
    } catch (error) {
      console.error('Error while signing out from Facebook:', error);
    }

    // Clear locally stored tokens (localStorage or cookies)
    localStorage.removeItem(googleAccessToken); // Replace with your Google token key
    localStorage.removeItem(facebookAccessToken); // Replace with your Facebook token key

    // Call your application-specific logout function
    await logout();

    // Redirect to login page
    router.push('/login');

    // Display toast message based on the logout source
    if (logoutSource) {
      toast.success('Logout successful!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
      });
    }
  };

    
      
    return (
        <div className='hidden lg:block h-full w-full mt-[-15px]'>
            <div className='flex items-center justify-between px-12 navbar-drop-shadow bg-[#D9D9D9] fixed w-full z-[100] h-[75px]'>
                <div className=''>
                    <Image src={logo} alt='img' className='' />
                </div>

                <div className='flex '>
                    <div className='flex gap-5 text-[18px] justify-center items-center'>
                        <Link href='/'>
                            <div className='flex items-center h-[70px]'>
                                <button
                                    className={`text-black font-normal ${activeButton === 'home' ? '' : ''
                                        }`}
                                    onClick={() => handleButtonClick('home')}
                                >
                                    Home
                                </button>
                            </div>
                            {activeButton === 'home' && (
                                <div className='flex items-end'>
                                    <div className='h-[3px] w-full bg-black' />
                                </div>
                            )}
                        </Link>

                        <Link href='/men'>
                            <div className='flex items-center h-[70px]'>
                                <button
                                    className={`text-black font-normal ${activeButton === 'wishlist' ? '' : ''
                                        }`}
                                    onClick={() => handleButtonClick('wishlist')}
                                >
                                    Men
                                </button>
                            </div>
                            {activeButton === 'wishlist' && (
                                <div className='flex items-end'>
                                    <div className='h-[3px] w-full bg-black' />
                                </div>
                            )}
                        </Link>

                        <Link href='/women'>
                            <div className='flex items-center h-[70px]'>
                                <button
                                    className={`text-black font-normal ${activeButton === 'orders' ? ' ' : ''
                                        }`}
                                    onClick={() => handleButtonClick('orders')}
                                >
                                    Women
                                </button>
                            </div>
                            {activeButton === 'orders' && (
                                <div className='flex items-end'>
                                    <div className='h-[3px] w-full bg-black' />
                                </div>
                            )}
                        </Link>

                        <div>
                            <Link href='/profile'>
                                <div className='flex items-center h-[70px]'>
                                    <button
                                        className={`text-black font-normal ${activeButton === 'profile' ? '' : ''
                                            }`}
                                        onClick={() => handleButtonClick('profile')}
                                    >
                                        Profile
                                    </button>
                                </div></Link>
                            {activeButton === 'profile' && (
                                <div className='flex items-end'>
                                    <div className='h-[3px] w-full bg-black' />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center px-2 w-[320px] h-[30px] rounded-[5px] navbar-search'>
                    <Image src={icon} alt='icon' />
                    <input type="text" placeholder='Search' className='px-2 text-[12px] text-black w-full bg-[#C6C6C6] outline-none' />
                </div>
                <div>
                    <div>
                        {isLoggedIn ? (
                            <button className="text-[16px]" onClick={handleButtonClickTwo}>
                                Hi! <span className="font-bold">Jyotirmoy</span>
                            </button>
                        ) : (
                            <Link href='/login'><button className="text-[16px] font-semibold">Login</button></Link>
                        )}
                    </div>
                    <div>  {isDivOpen && (
                        <div
                            className="bg-white h-auto w-auto rounded-xl fixed top-[12%]  z-50 left-[66%] p-5"
                            style={{
                                // Add styles for positioning the div (e.g., top, left, etc.)
                                // You can adjust the position as per your requirement
                                // For example, you can use top: '70px' to push it below the button
                            }}
                        >
                            <div className='flex justify-center items-center gap-2'>
                                <button className='flex text-[16px] font-normal items-center w-[141px] h-[39px] justify-center bg-[#D9D9D9] rounded-[10px]'>
                                    <Image src={basket} alt='img' />
                                    <p>Your Orders</p>
                                </button>
                                <button className='flex text-[16px] font-normal items-center w-[141px] h-[39px] justify-center bg-[#D9D9D9] rounded-[10px]'>
                                    <Image src={fav} alt='img' />
                                    <p>Your Orders</p>
                                </button>
                            </div>
                            <h1 className='mt-3 text-[16px] font-bold mx-2'>Account Settings</h1>
                            <div className='text-[16px] font-normal flex flex-col gap-2 mt-2'>
                                <div className='flex justify-between mx-3'>
                                    <p>Edit Profile</p>
                                    <Image src={right} alt='img' />
                                </div>
                                <div className='flex justify-between mx-3'>
                                    <p>Saved Addresses</p>
                                    <Image src={right} alt='img' />
                                </div>
                                <div className='flex justify-between mx-3'>
                                    <p>Help Center</p>
                                    <Image src={right} alt='img' />
                                </div>
                            </div>
                            <div className='flex items-center justify-center mt-4'>
                                <button onClick={handleLogout} className='text-[16px] font-normal flex justify-center items-center bg-[#D9D9D9] w-[124px] h-[39px] rounded-[10px]'>
                                    <Image src={logout} alt='img' />
                                    <p>Log Out</p>
                                </button>
                            </div>
                        </div>
                    )}</div>

                </div>
                <div>
                    <Image src={bag} alt='bag' />
                </div>
            </div>
        </div>
    );
};

export default Navbar;