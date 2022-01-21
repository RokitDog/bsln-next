import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { gsap, Power2, Power4 } from 'gsap';
import { SplitText } from 'gsap/dist/SplitText';
gsap.registerPlugin(SplitText);

function HeadingSingle({ title, sub }) {
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

  const splitText = useRef();
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

    let resizeTimeout;
    const resizeComplete = () => {
      mySplitText.revert();
    };
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeComplete, 200);
    });
  }, []);

  return (
    <div
      ref={ref}
      className="opacity-0 translate-y-10 mb-[180px] md:mb-[200px]"
    >
      <p className="font-medium text-[10px] md:text-[14px] text-[#7D7D7D] mb-[36px]">
        {sub}
      </p>
      <div>
        <h1
          className={`text-[46px] leading-[1.08] tracking-[-0.01rem]  md:text-[72px] max-w-[1030px] inline md:inline-block`}
          ref={splitText}
        >
          {title}
        </h1>
      </div>
    </div>
  );
}

export default HeadingSingle;
