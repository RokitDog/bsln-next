import React, { useEffect, useRef } from 'react';
import { Cursor } from '../components/Cursor';
import CursorBody from '../components/CursorBody';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { gsap } from 'gsap';
import ContactSlider from '../components/ContactSlider';
import ContactForm from '../components/ContactForm';
gsap.registerPlugin(ScrollTrigger);

function contact() {
  useEffect(() => {
    if (window.innerWidth > 1024) {
      Cursor();
    }

    return () => {
      ScrollTrigger.getAll().forEach((instance) => {
        instance.kill();
      });
      document.body.style.background = 'white';
    };
  }, []);

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
          i + 0.6
        );
        tl.to(elem.querySelector('.image'), { autoAlpha: 0 }, i + 0.6);
      }
    });
  }, []);

  useEffect(() => {
    ScrollTrigger.defaults({
      scroller: '.App',
    });
    return () => {
      ScrollTrigger.getAll().forEach((instance) => {
        instance.kill();
      });
      document.body.style.background = 'white';
    };
  }, []);

  const thankYouRef = useRef();
  const formRef = useRef();
  const sliderRef = useRef();

  return (
    <div>
      <main>
        <div className="max-w-[1440px] mx-auto px-[30px] md:px-[50px] lg:px-[80px] ">
          <div>
            <section className="relative philosophie pb-[100px] md:pb-[150px] ">
              <div
                className="h-[893px] md:h-[100vh] w-[100%] wrapper relative"
                ref={sliderRef}
              >
                <ContactSlider
                  imageSrc="/images/Contact0.svg"
                  content="If your website is in desperate need of a polish."
                />
                <ContactSlider
                  imageSrc="/images/Contact0.svg"
                  content="If your branding is anything but consistent and -on brand-"
                />
                <ContactSlider
                  imageSrc="/images/Contact0.svg"
                  content="
                  If your logo is outdated, non-existent or you are often asked the question “What is this supposed to be?”"
                />
                <ContactSlider
                  imageSrc="/images/Contact0.svg"
                  content="
            You get the final product that
            helps your company succeed,
            while we get the satisfaction
            from working on it."
                />
              </div>
              <div className="mb-[40px] md:mb-[60px]">
                <h2 className="text-center text-[30px] leading-[1.13] tracking-[-0.1%] md:text-[48px]">
                  Whatever the reason, we’re here to help.
                </h2>
              </div>
              <div>
                <p className="text-center text-[16px] md:text-[20px]">
                  So let's get started!
                </p>
              </div>
            </section>
          </div>
        </div>
        <section
          className="pt-[100px] md:pt-[160px] md:pb-[150px]  bg-black origin-bottom"
          ref={formRef}
        >
          <div className="max-w-[1440px] mx-auto px-[30px] md:px-[50px] lg:px-[80px]">
            <ContactForm ref1={formRef} ref2={thankYouRef} />
          </div>
        </section>
        <section
          className=" md:py-[150px] text-center overflow-hidden hidden"
          ref={thankYouRef}
        >
          <div className="space-y-[40px] md:space-y-[60px]">
            <h2 className="text-[30px] md:text-[48px] tracking-[-1%] leading-[1.13] max-w-[850px] mx-auto">
              Thanks for trusting us with your project! We’ll get back to you
              ASAP.
            </h2>
            <p>
              Or you can email us directly at{' '}
              <span className="text-[#367F61] underline font-medium">
                contact@wearebaseline.com
              </span>
            </p>
          </div>
        </section>
      </main>
      <CursorBody />
    </div>
  );
}

export default contact;
