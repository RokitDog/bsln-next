import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { gsap, Power2 } from 'gsap';
import Sliders from './Sliders';

function Brands() {
  const [ref, inView, entry] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      gsap.to(document.body, {
        backgroundColor: `black`,
        duration: 1,
        ease: Power2.easeOut,
      });
      gsap.to('.testimonials', {
        opacity: 0,
        duration: 2,
      });
    } else {
      gsap.to(document.body, {
        backgroundColor: `transparent`,
        duration: 1,
        ease: Power2.easeOut,
      });
      gsap.to('.testimonials', {
        opacity: 1,
        duration: 2,
      });
    }
  }, [inView]);

  return (
    <section>
      <div
        ref={ref}
        className="font-medium text-[30px] tracking-[-1%] text-center text-white md:text-[42px] h-[100vh] flex justify-center items-center"
      >
        <h2>Big names that trust us</h2>
      </div>
      <div>
        <Sliders />
      </div>
    </section>
  );
}

export default Brands;
