import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import ProcessSection from './ProcessSection';

function Process({ processText1, processText2, processText3, processText4 }) {
  useEffect(() => {
    let points = gsap.utils.toArray('.point');

    let height = 100 * points.length;

    let tl = gsap.timeline({
      duration: points.length,
      scrollTrigger: {
        trigger: '.philosophie',
        start: 'top center',
        end: '+=' + height + '%',
        id: 'points',
        scrub: 0.1,
      },
    });

    let pinner = gsap.timeline({
      scrollTrigger: {
        trigger: '.philosophie .wrapper',
        start: 'top top',
        end: '+=' + height + '%',
        pin: '.philosophie .wrapper',
        pinSpacing: true,
        id: 'pinning',
        scrub: 0.1,
      },
    });

    points.forEach(function (elem, i) {
      gsap.set(elem, { position: 'absolute', top: 0 });

      tl.from(elem.querySelector('.image'), { autoAlpha: 0 }, i);
      tl.from(
        elem.querySelector('article'),
        { autoAlpha: 0, translateY: 100 },
        i
      );

      if (i != points.length - 1) {
        tl.to(
          elem.querySelector('article'),
          { autoAlpha: 0, translateY: -100 },
          i + 0.75
        );
        tl.to(elem.querySelector('.image'), { autoAlpha: 0 }, i + 0.6);
      }
    });
  }, []);
  return (
    <div>
      <section className='relative philosophie max-w-[1600px] mx-auto'>
        <div className='h-[100vh] w-[100%] wrapper wrapper-process relative  before:absolute before:bottom-[90vh] before:text-[#7D7D7D] before:left-[30px] before:max-w-[54px] before:font-medium lg:before:bottom-[25vh] before:text-[12px]'>
          <ProcessSection imageSrc='/images/0.svg' content={processText1} />
          <ProcessSection imageSrc='/images/2.svg' content={processText2} />
          <ProcessSection imageSrc='/images/3.svg' content={processText3} />
          <ProcessSection imageSrc='/images/4.svg' content={processText4} />
        </div>
      </section>
    </div>
  );
}

export default Process;
