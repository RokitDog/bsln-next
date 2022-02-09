import React, { useEffect, useRef } from 'react';
import { gsap, Power2 } from 'gsap';
import Sliders from './Sliders';
import Image from 'next/image';

function Brands({ testimonialRef }) {
  const brands = useRef(null);
  const testimonialTrigger = useRef(null);

  useEffect(() => {
    const bodyAnim = gsap.to(document.body, {
      scrollTrigger: {
        trigger: testimonialTrigger.current,
        toggleActions: 'play none none reverse',
        start: 'bottom bottom',
      },
      backgroundColor: `#0f0f0f`,
      duration: 0.5,
      ease: Power2.easeOut,
    });

    gsap.to('.cards-home', {
      scrollTrigger: {
        trigger: testimonialTrigger.current,
        toggleActions: 'play none none reverse',
        start: 'bottom bottom',
      },
      autoAlpha: 0,
      duration: 0.5,
      ease: Power2.easeOut,
    });

    const testimonialAnim = gsap.to(testimonialRef.current, {
      scrollTrigger: {
        trigger: testimonialTrigger.current,
        toggleActions: 'play none none reverse',
        start: 'bottom bottom',
      },
      autoAlpha: 0,
      y: 0,
      duration: 1.3,
      ease: Power2.easeOut,
    });
  }, []);

  useEffect(() => {
    let tl;
    const texts = gsap.utils.toArray('.scrolling-text');
    texts.forEach((text, i) => {
      let toggle;
      i !== 2
        ? (toggle = 'play reverse play reverse')
        : (toggle = 'play pause play reverse');
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: text,
          pin: true,
          pinSpacing: false,
          // markers: true,
          start: 'top center',
          end: 'bottom center',
          toggleActions: toggle,
          onEnter: () => {
            if (i === 2) {
              gsap.to('.fade-in', {
                delay: 1,
                opacity: 1,
                y: 0,
                duration: 1,
              });
            }
            if (i === 0) {
              gsap.to('.scroll-down', {
                opacity: 1,
                duration: 1,
              });
            }
          },
          onLeave: () => {
            if (i === 2) {
              gsap.to('.scroll-down', {
                opacity: 0,
                duration: 1,
              });
            }
          },
        },
      });

      tl.to(text, {
        autoAlpha: 0,
        ease: Power2.easeInOut,
      }).to(
        text,
        {
          autoAlpha: 1,
          ease: Power2.easeInOut,
        },
        0
      );
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section ref={brands} className="mb-[600px] md:mb-[900px] relative">
      <div className="fixed bottom-[150px] left-[50%] scroll-down opacity-0">
        <Image src="/images/Union.svg" width={13} height={15} alt="icon" />
      </div>
      <div
        ref={testimonialTrigger}
        className=" text-[30px] tracking-[-1%] text-center text-white md:text-[42px]  flex justify-center items-center my-[200px] md:my-[300px] "
      >
        <h2>Big names that trust us</h2>
      </div>
      <div className="mb-[400px] md:mb-[900px]">
        <Sliders left={true} />
        <Sliders />
        <Sliders left2={true} />
      </div>
      <div className="h-[100vh] flex justify-center items-center relative px-[30px] md:px-0">
        <div>
          <h2 className="h-[300px] lg:h-[600px] max-w-[527px] opacity-0 scrolling-text   text-[30px] md:text-[42px] text-white text-center leading-[1.13]">
            You have an idea but you're not sure about it?
          </h2>
          <h2 className="h-[300px] lg:h-[600px] max-w-[448px] mx-auto opacity-0 scrolling-text   text-[30px] md:text-[42px] text-white text-center leading-[1.13]">
            It's too big, too small too crazy, too boring, or just too average?
          </h2>
          <div className="h-[300px] lg:h-[600px]  max-w-[527px]  opacity-0 scrolling-text  flex flex-col space-y-[20px] mx-auto">
            <h2 className=" text-[30px] md:text-[42px] text-white text-center leading-[1.13]">
              We've got you.
              <br />
            </h2>
            <span className="text-[20px] text-[#7D7D7D] fade-in opacity-0 translate-y-10 leading-[1.13] max-w-[300px] md:max-w-full mx-auto text-center">
              Let’s shape that idea of yours into something grand.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brands;
