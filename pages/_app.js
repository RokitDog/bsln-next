import '../styles/globals.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Bottom from '../components/Footer/Bottom';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';

function MyApp({ Component, pageProps }) {
  const [loaded, setLoaded] = useState(false);

  const loader = setTimeout(() => {
    setLoaded(true);
  }, 3000);

  return (
    <AnimatePresence>
      {loaded && (
        <div className="App origin-right">
          <div className="scroll">
            <div className="z-10 ">
              <Header />
            </div>
            <div className="pt-[100px]">
              <Component {...pageProps} />
            </div>
            <div>
              <Footer />
              <Bottom />
            </div>
          </div>
        </div>
      )}

      {!loaded && (
        <motion.div
          className="transition-all  h-[100vh] flex items-center justify-center bg-black flex-col"
          initial={{ opacity: '100%' }}
          animate={{ opacity: '100%' }}
          exit={{ opacity: 0 }}
          key="modal"
          transition={{ duration: 0.3 }}
        >
          <div className="relative w-[250px] h-[50px] md:w-[450px] md:h-[80px]">
            <Image
              alt="logo"
              src="/images/Logo.svg"
              className="transition animate-pulse duration-300 "
              layout="fill"
              priority
              objectFit="contain"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MyApp;
