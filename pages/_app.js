import '../styles/globals.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Bottom from '../components/Footer/Bottom';
import { useState } from 'react';
import Image from 'next/image';

function MyApp({ Component, pageProps }) {
  const [loaded, setLoaded] = useState(false);

  const loader = setTimeout(() => {
    setLoaded(true);
  }, 5000);

  return loaded ? (
    <div className="App">
      <div className="scroll">
        <div className="z-10 ">
          <Header />
        </div>
        <Component {...pageProps} />
        <div>
          <Footer />
          <Bottom />
        </div>
      </div>
    </div>
  ) : (
    <div className="transition-all duration-300 w-[100%] h-[100vh] flex items-center justify-center bg-black flex-col">
      <div className="relative w-[450px] h-[80px]">
        <Image
          alt="logo"
          src="/images/logo-retina.png"
          className="transition animate-pulse duration-300"
          layout="fill"
          priority
          objectFit="contain"
        />
      </div>
      <div className="h-[5px] w-[450px]  bg-white rounded-full mt-[25px] animated-line origin-left"></div>
    </div>
  );
}

export default MyApp;
