import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import ProcessSection from './ProcessSection';

function Process() {
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
      <section className="relative philosophie max-w-[1600px] mx-auto">
        <div className="h-[100vh] w-[100%] wrapper wrapper-process relative  before:absolute before:bottom-[90vh] before:text-[#7D7D7D] before:left-[30px] before:max-w-[54px] before:font-medium lg:before:bottom-[25vh] before:text-[12px]">
          <ProcessSection
            imageSrc="/images/0.svg"
            content="Before we do - we get inspired
            imagine, doodle, brainstorm
            agree and disagree."
          />
          <ProcessSection
            imageSrc="/images/2.svg"
            content="We research and dwell, find
            various solutions and pick
            the best one with your help."
          />
          <ProcessSection
            imageSrc="/images/3.svg"
            content="
              We divide tasks: design,
              illustrate, write, code, and
              then - magic happens."
          />
          <ProcessSection
            imageSrc="/images/4.svg"
            content="
            You get the final product that
            helps your company succeed,
            while we get the satisfaction
            from working on it."
          />
        </div>
      </section>
    </div>
  );
}

export default Process;
