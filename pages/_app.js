import Script from 'next/script';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';

import { NFTProvider } from '../context/NFTContext';
import { Navbar, Footer } from '../components';
import '../styles/globals.css';

// google analytics





// import '../styles/Animate.css';

const MyApp = ({ Component, pageProps }) => (
  <NFTProvider>
    <ThemeProvider attribute="class">
      <div className="dark:bg-nft-dark bg-white min-h-screen">
        <Head>
          <title>CriptoArts</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />


                  <script
            strategy="afterInteractive"
            src="https://googletagmanager.com/gtag/js?id=G-81BENZH159"
         
          />
          <script id="google-analytics" strategy="afterInteractive">
          {`                                       
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date ());          

                    gtag('config', 'G-81BENZH159');                                                           
          `}
          
          </script> 

        


        </Head>
        <Navbar />
        <div className="pt-40"> 
          <Component {...pageProps} />
        </div>
        <Footer />

      </div>
      <Script src="https://kit.fontawesome.com/77a74156e4.js" crossOrigin="anonymous" />


    </ThemeProvider>
  </NFTProvider>

);


export default MyApp;
