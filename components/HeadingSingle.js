import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { gsap, Power2, Power4 } from 'gsap';
import { SplitText } from 'gsap/dist/SplitText';
gsap.registerPlugin(SplitText);

function HeadingSingle({ title, sub, text }) {
  const [ref, inView, entry] = useInView({
    threshold: 0.75,
  });

  if (inView) {
    const fadeInAnimation = gsap.to(entry.target, {
      y: 0,
      duration: 1.3,
      opacity: 1,
      ease: Power2.easeOut,
    });
  }
  const [ref2, inView2, entry2] = useInView({
    threshold: 0.75,
  });
  if (inView2) {
    const fadeInAnimation = gsap.to(entry2.target, {
      y: 0,
      duration: 1.3,
      opacity: 1,
      ease: Power2.easeOut,
      delay: 1.5,
    });
  }

  const splitText = useRef();
  const [isFontLoaded, setIsFontLoaded] = useState();

  useEffect(() => {
    const fontLoaded = () => {
      if (document.fonts.check('72px Helvetica Neue')) {
        setIsFontLoaded(!isFontLoaded);
      } else {
      }
    };
    clearTimeout(loadTimeout);
    const loadTimeout = setTimeout(fontLoaded, 1);
  }, []);

  useEffect(() => {
    if (isFontLoaded) {
      let mySplitText;

      mySplitText = new SplitText(splitText.current, {
        type: 'lines',
      });
      const splitTextAnimation = gsap.from(mySplitText.lines, 1.3, {
        y: 100,
        opacity: 0,
        ease: Power4.easeOut,
        delay: 0.5,
        stagger: {
          amount: 0.3,
        },
      });

      let resizeTimeout;
      const resizeComplete = () => {
        mySplitText?.revert();
      };
      window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(resizeComplete, 200);
      });
    }
  }, [isFontLoaded]);

  return (
    <div>
      {sub && (
        <p
          className="font-medium text-[10px] md:text-[14px] text-[#7D7D7D] mb-[36px] opacity-0 translate-y-10"
          ref={ref}
        >
          {sub}
        </p>
      )}
      <div>
        <h1
          className={`text-[46px] leading-[1.08] tracking-[-0.01rem]  md:text-[72px] max-w-[1030px] inline md:inline-block`}
          ref={splitText}
        >
          {title}
        </h1>
        {text && (
          <p
            className="md:text-[20px] text-[16px] text-[#0F0F0F] leading-[1.5] mt-[15px] md:mt-[40px] opacity-0 translate-y-10"
            ref={ref2}
          >
            {text}
          </p>
        )}
      </div>
    </div>
  );
}

export default HeadingSingle;
