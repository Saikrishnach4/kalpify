import React, { createContext, useContext, useState } from 'react';
import FacebookLogin from 'react-facebook-login'; 
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [googleAccessToken, setGoogleAccessToken] = useState(null); // New state for Google access token
  const [facebookAccessToken, setFacebookAccessToken] = useState(null); 
  const login = (googleToken, facebookToken) => {
    console.log("googletoken",googleToken)
    console.log("facebook",facebookToken)
    setIsLoggedIn(true);
    setGoogleAccessToken(googleToken);
    setFacebookAccessToken(facebookToken); // Set the Facebook access token
  };

  const logout = () => {
    setIsLoggedIn(false);
    setGoogleAccessToken(null); // Clear the Google access token
  };
  const facebookLogout = async () => {
    // Replace 'appId' with your actual Facebook App ID
    const appId = 307927011632867;

    // Call the Facebook API to log out
    // Make sure to handle errors and response accordingly
    const response = await FacebookLogin.logout(response => console.log("authcontext facebook logout",response), appId);

    console.log('Logged out from Facebook:', response);
  };
  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, googleAccessToken,facebookAccessToken,facebookLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
