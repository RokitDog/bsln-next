import '../styles/globals.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Bottom from '../components/Footer/Bottom';
import { useRef, useEffect, useState } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

function MyApp({ Component, pageProps }) {
  const app = useRef();
  const scrollContainer = useRef();
  // const [windowHeight, setWindowHeight] = useState();
  // const [windowWidth, setWindowWidth] = useState();

  // const skewConfigs = {
  //   ease: 0.1,
  //   current: 0,
  //   previous: 0,
  //   rounded: 0,
  // };

  // useEffect(() => {
  //   ScrollTrigger.scrollerProxy(document.body, {
  //     scrollTop(value) {
  //       if (arguments.length) {
  //         bodyScrollBar.scrollTop = value;
  //       }
  //       return bodyScrollBar.scrollTop;
  //     },
  //   });

  //   document.body.style.height = `${
  //     scrollContainer.current.getBoundingClientRect().height
  //   }px`;

  //   let resizeTimeout;
  //   const resizeComplete = () => {
  //     setWindowHeight(window.innerHeight);
  //     setWindowWidth(window.innerWidth);
  //   };
  //   window.addEventListener('resize', () => {
  //     clearTimeout(resizeTimeout);
  //     resizeTimeout = setTimeout(resizeComplete, 200);
  //   });

  //   setWindowHeight(
  //     setTimeout(() => {
  //       return window.innerHeight;
  //     }, 200)
  //   );
  // }, [windowHeight]);

  // useEffect(() => {
  //   requestAnimationFrame(() => skewScrolling());
  // }, []);

  // const skewScrolling = () => {
  //   skewConfigs.current = window.scrollY;
  //   skewConfigs.previous +=
  //     (skewConfigs.current - skewConfigs.previous) * skewConfigs.ease;
  //   skewConfigs.rounded = Math.round(skewConfigs.previous * 100) / 100;

  //   const difference = skewConfigs.current - skewConfigs.rounded;

  //   scrollContainer.current.style.transform = `translateY(-${skewConfigs.rounded}px)`;

  //   requestAnimationFrame(() => skewScrolling());
  // };

  return (
    <div className="App" ref={app}>
      <div className="scroll" ref={scrollContainer}>
        <div className="z-10">
          <Header />
        </div>
        <Component {...pageProps} />
        <div>
          <Footer />
          <Bottom />
        </div>
      </div>
    </div>
  );
}

export default MyApp;
