import { gsap, Power4, Power2 } from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';

function Banner() {
  const splitText = useRef();
  const fadeIn = useRef();
  const slideIn = useRef();

  const elements = gsap.utils.selector(splitText);
  useEffect(() => {
    const splitTextAnimation = gsap.from(elements('.absolute'), 1.3, {
      y: 100,
      opacity: 0,
      ease: Power4.easeOut,
      delay: 0.5,
      skewY: 7,
      stagger: {
        amount: 0.3,
      },
    });

    const fadeInAnimation = gsap.from(fadeIn.current, {
      y: 50,
      delay: 1.5,
      duration: 1.3,
      opacity: 0,
      ease: Power2.easeOut,
    });

    const slideInVideo = gsap.from(slideIn.current, 3, {
      transform: 'scaleX(0)',
      delay: 2,
      ease: Power4.easeOut,
    });
    return () => {
      splitTextAnimation.kill();
      fadeInAnimation.kill();
      slideInVideo.kill();
    };
  }, []);

  const [clock, setClock] = useState();
  const colors = ['#FD8550', '#0E6C62', '#FDC52E'];
  const text = useRef();

  useEffect(() => {
    if (text.current.textContent.match('b')) {
      text.current.style.color = colors[0];
    }
    if (text.current.textContent.match('l')) {
      text.current.style.color = colors[1];
    }
    if (text.current.textContent.match('g')) {
      text.current.style.color = colors[2];
    }

    return () => {};
  }, [clock]);

  return (
    <section>
      <h1
        className="text-[46px] tracking-[-0.01] md:text-[76px] leading-[1.08] md:pl-[70px] md:pt-[100px] font-medium "
        ref={splitText}
      >
        <div className="overflow-hidden relative h-[89px]">
          <span className="absolute">Where your brands voice</span>
        </div>
        <div className="overflow-hidden relative h-[89px]">
          <span className="absolute">becomes visual.</span>
        </div>
      </h1>
      <div className="md:pl-[70px] pt-[40px]" ref={fadeIn}>
        <p className="text-[20px] md:text-[28px]">
          Powerful branding and unique SEO friendly websites
          <br /> that help your businesses &nbsp;
          <span className="" ref={text}>
            <Typewriter
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              words={['bring in clients', 'grow', 'learn']}
              onType={(words) => {
                setClock(words);
              }}
            />
          </span>
        </p>
      </div>
      <div className="my-[100px] origin-left" ref={slideIn}>
        <video
          src="/video/Hecker.mp4"
          data-image-src="view"
          className="hover-js"
          autoPlay
          muted
          loop
        ></video>
      </div>
    </section>
  );
}

export default Banner;
