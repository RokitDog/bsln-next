import { gsap, Power4, Power2 } from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { SplitText } from 'gsap/dist/SplitText';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(SplitText);

function Banner() {
  const splitText = useRef();
  const fadeIn = useRef();
  const slideIn = useRef();

  useEffect(() => {
    let mySplitText = new SplitText(splitText.current, { type: 'lines' });

    const splitTextAnimation = gsap.from(mySplitText.lines, 1.3, {
      y: 100,
      opacity: 0,
      ease: Power4.easeOut,
      delay: 0.5,
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
  const text = useRef();
  
  useEffect(() => {
    const colors = ['#FD8550', '#0E6C62', '#FDC52E'];
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

  const loaded = () => {
    ScrollTrigger.getAll().forEach((instance) => {
      instance.refresh()
    })
  }

  return (
    <section>
      <h1
        className=" text-[46px] tracking-[-0.01] md:text-[72px] leading-[1.08] md:pl-[70px] md:pt-[100px]"
        ref={splitText}
      >
        Where your brands voice <br />
        becomes visual.
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
          data-image-src="view"
          className="hover-js w-[100%] h-auto"
          autoPlay
          muted
          loop
          onPlay={loaded}
        >
          <source src='/video/Hecker.mp4' type='video/mp4'       
          />
        </video>
      </div>
    </section>
  );
}

export default Banner;
