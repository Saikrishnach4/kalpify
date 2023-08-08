import '@/styles/globals.css'
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './utils/authcontext';
import Head from 'next/head';
export default function App({ Component, pageProps }) {
  return (
   <>
   <Head>
        <script src="https://apis.google.com/js/platform.js" async defer></script>
      </Head>
   <AuthProvider>
   <Component {...pageProps} />
      <ToastContainer/>
   </AuthProvider>

   </>
      
  );
}
