import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { gsap, Power2, Power4 } from 'gsap';
import Card from './Card';
import { SplitText } from 'gsap/dist/SplitText';
import HeadingSingle from './HeadingSingle';
gsap.registerPlugin(SplitText);

function CardsWork() {
  useEffect(() => {}, []);
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
    let innerWindowWidthh = window.innerWidth;

    const fadeInAnimation = gsap.to(entry2.target, {
      y: 0,
      duration: 1,
      opacity: 1,
      ease: Power2.easeOut,
      delay: innerWindowWidthh > 1535 ? 1.3 : 0,
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
    let innerWindowWidthh = window.innerWidth;
    const fadeInAnimation = gsap.to(entry4.target, {
      y: 0,
      duration: 1,
      opacity: 1,
      ease: Power2.easeOut,
      delay: innerWindowWidthh > 1535 ? 1.3 : 0,
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
    threshold: 0,
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
  const [ref9, inView9, entry9] = useInView({
    threshold: 0,
  });
  if (inView9) {
    const fadeInAnimation = gsap.to(entry9.target, {
      y: 0,
      duration: 1.3,
      opacity: 1,
      ease: Power2.easeOut,
    });
  }

  return (
    <section className="mb-[142px] md:mb-[250px]">
      <div ref={ref} className="opacity-0 translate-y-10 md:pl-[80px]">
        <div className="max-w-[980px]">
          <HeadingSingle
            title="Because all brands are unique, our solutions tell a different story each time."
            sub="Work"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-x-[40px] lg:grid-cols-3">
        <div
          className="mt-[80px] opacity-0  translate-y-[100px] justify-self-center lg:mt-[200px]"
          ref={ref2}
        >
          <Card
            name="FLOWER COUTURE"
            text="Magna ultrices dictum odio morbi sagittis quis at orci."
            image="/images/FlowerCouture.jpg"
            link="/work/flower-couture"
          />
        </div>
        <div
          className="mt-[80px] opacity-0  translate-y-[100px] justify-self-center lg:mt-[300px]"
          ref={ref3}
        >
          <Card
            name="Nestlé"
            text="Cursus id volutpat eleifend id quis in natoque velit. Integer risus adipiscing sed platea quis platea a purus consectetur."
            image="/images/Nestle.jpg"
            link="/work/nestle"
          />
        </div>
        <div className="md:flex md:justify-around md:col-span-2 md:gap-x-[40px] justify-self-center md:justify-self-auto lg:col-span-1 lg:flex-col lg:mt-[-100px]">
          <div
            className="mt-[80px] opacity-0  translate-y-[100px] md:flex-[50%]"
            ref={ref4}
          >
            <Card
              name="Mihano Momosa"
              text="Nisl diam sed porttitor amet ullamcorper velit enim, faucibus sed."
              image="/images/Mihano Momosa-alt.jpg"
              link="/work/mihano-momosa"
            />
          </div>
          <div
            className="mt-[80px] mb-[100px] opacity-0 translate-y-[100px]  justify-self-center    lg:mt-[160px] md:flex-[50%]"
            ref={ref5}
          >
            <Card
              name="luv Michael"
              text="Vitae, massa rhoncus ac velit in ac cras. Suspendisse facilisis eget arcu vestibulum lacus, faucibus."
              image="/images/luv Michael.jpg"
              link="/work/luv-michael"
            />
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-x-[40px] lg:grid-cols-3">
        <div
          className="mt-[80px] opacity-0  translate-y-[100px] justify-self-center  lg:mt-[0px]"
          ref={ref6}
        >
          <Card
            name="FinSource Accounting"
            text="Laoreet amet nec et varius leo, sollicitudin aliquet suspendisse tristique. Faucibus lobortis potenti et tortor sed in magnis velit ac."
            image="/images/FinSource.jpg"
            link="/work/finsource"
          />
        </div>
        <div
          className="mt-[80px] opacity-0  translate-y-[100px] justify-self-center  lg:mt-[-100px]"
          ref={ref7}
        >
          <Card
            name="Hecker Construction"
            text="CImperdiet sed volutpat nullam fermentum. Quam proin sagittis volutpat diam proin non dui velit. Eget sed sollicitudin ipsum sed tincidunt magna venenatis condimentum. Eu tincidunt donec montes, quis."
            image="/images/Hecker.jpg"
            link="/work/hecker-construction"
          />
        </div>
        <div
          className="mt-[80px] opacity-0  translate-y-[100px]  md:col-span-1 md:gap-x-[40px] justify-self-center lg:mt-[350px]"
          ref={ref8}
        >
          <div className="mb-[100px]">
            <Card
              name="QANYA"
              text="Laoreet amet nec et varius leo, sollicitudin aliquet suspendisse tristique. Faucibus lobortis potenti et tortor sed in magnis velit ac."
              image="/images/Qanya.jpg"
              link="/work/qanya"
            />
          </div>
        </div>
      </div>
      <div
        className="max-w-full lg:max-w-[666px] xl:max-w-[880px] flex justify-center opacity-0 translate-y-10 lg:mt-[-200px]"
        ref={ref9}
      >
        <div>
          <h3 className="text-[26px] tracking-[-1%] leading-[1.15] md:text-[32px] mb-[35px] md:mb-[45px] max-w-[470px]">
            Each brand has a story to tell. By finding the authenticity that's
            already there, we use design to enhance the heck out of it.
          </h3>
          <Link href="/work">
            <a className="text-[14px] md:text-[16px] border-[0.5px] border-[#0f0f0f] rounded-full px-[15px] py-[10px] hover:bg-[#0f0f0f] hover:text-white transition ease-out duration-300">
              Get Started
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CardsWork;
