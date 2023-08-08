import React from 'react';
import { useAuth } from '../pages/utils/authcontext';
import Navbar from '@/Components/Navbar/Navbar';
import { signIn } from 'next-auth/react';
import styles from "./login.module.css"
import { useState, useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import logo from '../assets/logo/Top Bar.png'
import logolarge from '../assets/logo/Group 1.png'
import google from '../assets/logo/Component 2.png'
import facebook from '../assets/logo/Component 3.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';
import Link from 'next/link';
import { jetBrains_Mono } from '@/font';
import Router, { useRouter } from 'next/router';
import { LoginSocialFacebook,FacebookLogout } from 'reactjs-social-login';
import {setIsLoggedIn} from "../pages/utils/authcontext"
import axios from 'axios';
import { gapi } from 'gapi-script';
const login = () => {
  const { login } = useAuth();
  const route = useRouter()
  const [user, setUser] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const router = useRouter();
  

  const handleLoginSuccess = async (response) => {
    console.log('facebook login successfull', response);
    const facebookToken = response.data.accessToken; // Replace with the actual token
   console.log("facebooktoken in loginpage",facebookToken)
    // Since you need both Google and Facebook tokens, you would call login with both tokens
    const googleToken=null
    login(googleToken,facebookToken);// Replace with the actual token
   
    try {
      const apiResponse = await fetch('/api/facebookdb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(response.data),
      });

      if (apiResponse.ok) {
        toast.success('facebook login successfull!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
        });
        login(); 
        router.push("/")
      
      } else {
        toast.error('An error occurred while saving user data.', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
        });
      }
    } catch (error) {
      console.error('Error while sending API request:', error);
      toast.error('An error occurred while saving user data.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
      });
    }
  };

 
  const handleLoginError = (error) => {
    console.log(error); 
  };
  ////////////////////////////////////////////////////////////////////////////////////////////////
  const handleGoogleSuccess = async (response) => {
    
    console.log('Google login success:', response.profileObj);
console.log("accesstoken",response.accessToken)
const accessToken = response.accessToken;

document.cookie = `accessToken=${accessToken}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
// Replace with the actual token
    login(accessToken);
    try {
      const apiResponse = await fetch('/api/googledb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(response.profileObj),
      });

      if (apiResponse.ok) {
        toast.success('Google login successful!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
        });
        login(); 
        router.push("/")
      } else {
        toast.error('An error occurred while saving user data.', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
        });
      }
    } catch (error) {
      console.error('Error while sending API request:', error);
      toast.error('An error occurred while saving user data.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
      });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Adding the '+' sign in front of the phone number
      const formattedPhoneNumber = '+' + phoneNumber;

      const response = await axios.post('/api/2fa', { phoneNo: formattedPhoneNumber });
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  const handleGoogleFailure = (error) => {
    console.error('Google login error:', error);

    toast.error('Google login failed. Please try again.', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: true,
    });
  };


 

  useEffect(()=>{
    function start(){
      gapi.client.init({
        clientId:"577785444355-g14dh0t6iamb86dvalq6kaeg17pgnva5.apps.googleusercontent.com",
        scope:""
      })
    }
    gapi.load('client:auth2',start);
  })
  return (
    <div className='pt-16 lg:pt-10'>
   

      <div className='flex justify-center items-center'>
        <div className='w-[342px] h-[58px] lg:w-[300px] lg:h-auto'>
          <Image src={logo} alt='Logo' className='w-full h-full lg:hidden' />
          <div className='flex justify-center'>
            <Image src={logolarge} alt='Logo' className='hidden lg:block' />
          </div>
        </div>
      </div>
      <div className=' max-w-screen-sm mx-auto'>
        <h1 className='text-[#858585] lg:text-[black] lg:text-[30px] font-semibold text-[20px] text-center tracking-[1.7px] lg:mt-5'>Welcome Back</h1>
        <p className='hidden lg:block text-center text-[18px] text-[#747474] font-normal'>Lorem ipsum dolor sit amet consectetur. Placerat in suspendisse donec eget elementum bibendum sed. Maecenas lectus.</p>
        <h1 className='text-[32px] font-semibold text-[#444242] tracking-[1.7px] leading-[48px] text-center lg:hidden'>Login</h1>
        <form onSubmit={handleSubmit} className='mx-8 lg:mx-0 tracking-[1.7px] my-8'>

          <div>
            <p className='text-[#7D7D7D] font-normal text-[13px] ms-3 lg:text-[20px]'>Email/Phone</p>
            <input
              type="number"
              className='outline-none h-[43px] px-3 bg-[#E9E9E9] w-full rounded-[9px] mt-1 lg:text-black lg:text-[18px] lg:h-[60px]'
              placeholder='+91 86531 38715'
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className='flex justify-center items-center mt-12'>
            <button
              className='text-[20px] lg:text-[24px] lg:w-[200px] lg:h-[55px] text-[#FFFFFF] bg-[#444242] lg:bg-[#303030] w-[115px] h-[41px] rounded-[7px]'
             
            >
              Send OTP
            </button>
          </div>
          <div className={jetBrains_Mono.className}>
            <p className='text-[#858585] text-[15px] font-normal lg:text-center mt-5 lg:text-[16px] lg:text-black'>Don’t have an Account?  <Link href='/signup' className='text-[#303030] lg:text-black font-bold'>Register</Link></p>
          </div>
          <div className='lg:max-w-screen-sm mx-auto lg:mx-20'>
            <div className='flex justify-center items-center gap-2 mt-5'>
              <hr className='w-full h-[1px] lg:h-[2px] bg-black lg:bg-[#263238]' />
              <p>OR</p>
              <hr className='w-full h-[1px] lg:h-[2px] bg-black lg:bg-[#263238]' />
            </div>
          </div>
        </form>
        <div>
          <p className='text-center text-[#222222] text-[15px] font-normal lg:text-[16px]'>Continue With</p>
          <div className='flex justify-center items-center gap-3 mt-3 mb-16'>
            <GoogleLogin
            icon={false}
            className={styles.google}
             style={{boxShadow:"none"}}
              clientId="577785444355-g14dh0t6iamb86dvalq6kaeg17pgnva5.apps.googleusercontent.com"
              onSuccess={handleGoogleSuccess}
              onFailure={handleGoogleFailure}
              isSignedIn={true}
              cookiePolicy={'single_host_origin'}
            >
              <button className='w-[43px] h-[43px] lg:w-[61px] lg:h-[61px] rounded-[12px] bg-[#1B1919] flex justify-center items-center'>
                <Image src={google} alt='google' />
              </button>
            </GoogleLogin>
            <LoginSocialFacebook
              appId='1611723405981801'
              onResolve={handleLoginSuccess}
              onReject={handleLoginError}
              isSignedIn={true}
              cookiePolicy={'single_host_origin'}
            >
              <button
                className='w-[43px] h-[43px] lg:w-[61px] lg:h-[61px] rounded-[12px] bg-[#1B1919] flex justify-center items-center'

              >
                <Image src={facebook} alt='facebook' />
              </button>
            </LoginSocialFacebook>

          </div>
        </div>

      </div>
      <ToastContainer />
    </div>
  );
};

export default login;