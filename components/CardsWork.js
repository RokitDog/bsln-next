import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { gsap, Power2, Power4 } from 'gsap';
import Card from './Card';
import { SplitText } from 'gsap/dist/SplitText';
gsap.registerPlugin(SplitText);

function CardsWork() {
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
    threshold: 0,
  });

  if (inView2) {
    const fadeInAnimation = gsap.to(entry2.target, {
      y: 0,
      duration: 1,
      opacity: 1,
      ease: Power2.easeOut,
      delay: 1.5
    });
  }

  const [ref3, inView3, entry3] = useInView({
    threshold: 0,
  });

  if (inView3) {
    const fadeInAnimation = gsap.to(entry3.target, {
      y: 0,
      duration: 1,
      opacity: 1,
      ease: Power2.easeOut,
    });
  }
  const [ref4, inView4, entry4] = useInView({
    threshold: 0,
  });

  if (inView4) {
    const fadeInAnimation = gsap.to(entry4.target, {
      y: 0,
      duration: 1,
      opacity: 1,
      ease: Power2.easeOut,
      delay: 1.5
    });
  }
  const [ref5, inView5, entry5] = useInView({
    threshold: 0,
  });

  if (inView5) {
    const fadeInAnimation = gsap.to(entry5.target, {
      y: 0,
      duration: 1,
      opacity: 1,
      ease: Power2.easeOut,
    });
  }

  const [ref6, inView6, entry6] = useInView({
    threshold: 0.75,
  });

  if (inView6) {
    const fadeInAnimation = gsap.to(entry6.target, {
      y: 0,
      duration: 1.3,
      opacity: 1,
      ease: Power2.easeOut,
    });
  }

  const [ref7, inView7, entry7] = useInView({
    threshold: 0,
  });
  if (inView7) {
    const fadeInAnimation = gsap.to(entry7.target, {
      y: 0,
      duration: 1.3,
      opacity: 1,
      ease: Power2.easeOut,
    });
  }

  const [ref8, inView8, entry8] = useInView({
    threshold: 0,
  });
  if (inView8) {
    const fadeInAnimation = gsap.to(entry8.target, {
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
    <section className="mb-[142px] md:mb-[250px]">
      <div ref={ref} className="opacity-0 translate-y-10">
        <p className="font-medium text-[10px] md:text-[14px] text-[#7D7D7D] mb-[36px]">
          Work
        </p>
        <div>
          <h1
            className="text-[46px] leading-[1.08] tracking-[-0.01rem]  md:text-[72px] max-w-[878px] inline md:inline-block"
            ref={splitText}
          >
            Because all brands are <br />unique, our solutions tell a different story
            each time.
          </h1>
        </div>
      </div>
      <div className="flex justify-between mt-[180px] flex-wrap">
        <div className="mt-[200px] opacity-0  translate-y-[100px]" ref={ref2}>
          <Card
            name="FLOWER COUTURE"
            text="Magna ultrices dictum odio morbi sagittis quis at orci."
            image="/images/FlowerCouture.jpg"
          />
        </div>
        <div className="mt-[300px] opacity-0  translate-y-[100px]" ref={ref3}>
          <Card
            name="Nestlé"
            text="Cursus id volutpat eleifend id quis in natoque velit. Integer risus adipiscing sed platea quis platea a purus consectetur."
            image="/images/Nestle.jpg"
          />
        </div>
        <div className="mt-[-100px] opacity-0  translate-y-[100px]" ref={ref4}>
          <Card
            name="Mihano Momosa"
            text="Nisl diam sed porttitor amet ullamcorper velit enim, faucibus sed."
            image="/images/Mihano Momosa.jpg"
          />
          <div className="mt-[160px] opacity-0  translate-y-[100px]" ref={ref5}>
            <Card
              name="luv Michael"
              text="Vitae, massa rhoncus ac velit in ac cras. Suspendisse facilisis eget arcu vestibulum lacus, faucibus."
              image="/images/luv Michael.jpg"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between">
        <div
          className="flex justify-center max-w[880px] grow mt-[-200px] opacity-0  translate-y-[100px]"
          ref={ref8}
        >
          <Card
            name="Hecker Construction"
            text="Imperdiet sed volutpat nullam fermentum. Quam proin sagittis volutpat diam proin non dui velit. Eget sed sollicitudin ipsum sed tincidunt magna venenatis condimentum. Eu tincidunt donec montes, quis."
            image="/images/Hecker.jpg"
          />
        </div>
        <div className="mt-[80px] md:mt-[250px] ">
          <div className="opacity-0  translate-y-[100px]" ref={ref7}>
            <Card
              name="QANYA"
              text="Laoreet amet nec et varius leo, sollicitudin aliquet suspendisse tristique. Faucibus lobortis potenti et tortor sed in magnis velit ac."
              image="/images/Qanya.jpg"
            />
          </div>
        </div>
      </div>
      <div
        className="max-w-[880px] flex justify-center opacity-0 translate-y-10 mt-[-200px]"
        ref={ref6}
      >
        <div>
          <h3 className="text-[26px] tracking-[-1%] leading-[1.15] md:text-[32px] mb-[35px] md:mb-[45px] ">
            Each brand has a story to tell. <br />
            By finding the authenticity that's
            <br />
            already there, we use design to <br />
            enhance the heck out of it.
          </h3>
          <Link href="/work">
            <a className="text-[14px] md:text-[16px] border-[0.5px] border-[#0f0f0f] rounded-full px-[15px] py-[10px] hover:bg-black hover:text-white transition ease-out duration-300">
              See more projects
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CardsWork;