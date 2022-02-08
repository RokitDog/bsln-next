import React, { useEffect, useRef } from 'react';
import Cta from '../components/Cta';
import { Cursor } from '../components/Cursor';
import CursorBody from '../components/CursorBody';
import HeadingSingle from '../components/HeadingSingle';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import { gsap, Power4, Power2 } from 'gsap';
import CardsStudio from '../components/CardsStudio';
import Link from 'next/link';
import Services from '../components/Services';
import StudioBrands from '../components/StudioBrands';
gsap.registerPlugin(ScrollTrigger);

function studio() {
  const imageRef = useRef();
  const bgTrigger = useRef();
  const textRef = useRef();
  const cardsRef = useRef();
  const revealSection = useRef();
  useEffect(() => {
    if (window.innerWidth > 1024) {
      Cursor();
    }

    gsap.from(imageRef.current, {
      opacity: 0,
      duration: 2,
      scale: 1.2,
      delay: 2,
      ease: Power4.easeOut,
    });

    gsap.from(textRef.current, {
      scrollTrigger: {
        trigger: textRef.current,
        // markers: true,
        start: 'top center',
        end: 'bottom center',
      },
      opacity: 0,
      duration: 1,
    });

    const bodyAnim = gsap.to(document.body, {
      scrollTrigger: {
        trigger: bgTrigger.current,
        toggleActions: 'play reverse play reverse',
        start: 'top center',
        end: 'bottom center',
        // markers: true,
      },
      backgroundColor: `#0f0f0f`,
      duration: 0.5,
      ease: Power2.easeOut,
    });

    gsap.from(revealSection.current, {
      scrollTrigger: {
        trigger: bgTrigger.current,
        start: 'bottom center',
        end: 'bottom center',
        toggleActions: 'play none none reverse',
        // markers: true,
      },
      opacity: 0,
      delay: 0.5,
      duration: 1,
    });

    gsap.registerEffect({
      name: 'swapText',
      effect: (targets, config) => {
        let tl = gsap.timeline({ delay: config.delay });
        tl.to(targets, { opacity: 0, duration: config.duration / 2 });
        tl.add(() => (targets[0].innerText = config.text));
        tl.to(targets, { opacity: 1, duration: config.duration });
        return tl;
      },
      defaults: { duration: 1 },
      extendTimeline: true,
    });

    let tl = gsap.timeline({ repeat: -1 });
    tl.swapText('.fading-text', {
      text: 'this is just a lorem that is a placeholder.',
      delay: 3,
    })
      .swapText('.fading-text', {
        text: 'And this is also lorem which makes it cool.',
        delay: 2,
      })
      .swapText('.fading-text', {
        text: 'create digital experience for analogue humans.',
        delay: 2,
      });

    return () => {
      ScrollTrigger.getAll().forEach((instance) => {
        instance.kill();
      });
      document.body.style.background = 'white';
    };
  }, []);

  useEffect(() => {
    const texts = gsap.utils.toArray('.team-cards');

    gsap.to('.team-cards', 1.3, {
      y: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: cardsRef.current,
        // markers: true,
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play reverse play reverse',
      },
      stagger: {
        amount: 1,
      },
    });
    gsap.to('body main', {
      opacity: 1,
      duration: 2,
      delay: 0.1,
    });
  }, []);

  return (
    <div>
      <main>
        <div className="max-w-[1600px] mx-auto px-[30px] md:px-[50px]  mb-[100px]">
          <div className="mt-[100px] md:px-[50px] ">
            <div className="max-w-[740px] ">
              <HeadingSingle
                title="Let's get digital - while staying human."
                sub="Studio"
                text="Baseline is an alliance of diversity: some of us code, some illustrate, others design.
              Whatever we do, we do it consistently, cohesively and exceptionally.  
              And we do it as a team - since 2008."
              />
            </div>
          </div>
          <section>
            <div ref={imageRef} className="rounded-[15px]">
              <Image
                src="/images/team.jpg"
                width={1280}
                height={640}
                layout="responsive"
                alt="team-picture"
                className="rounded-[15px]"
              />
            </div>
          </section>
          <section ref={bgTrigger} className="">
            <div className="flex justify-end ">
              <h2
                className="text-[30px] md:text-[42px] leading-[1.14] text-[white] tracking-[-1%] max-w-[730px] mt-[70px] md:mt-[150px] mb-[100px] md:mb-[150px]"
                ref={textRef}
              >
                We are a bunch of highly organized, embarrassingly geeky, hyper
                creative, digital freaks, who take darts playing at the office
                very seriously.
              </h2>
            </div>
            <div ref={cardsRef} className="mb-[100px] md:mb-[200px]">
              <CardsStudio />
            </div>
          </section>
          <section className="hidden md:block">
            <div
              className="flex items-center space-x-[110px]"
              ref={revealSection}
            >
              <div className="rounded-[10px] max-w-[440px]">
                <Image
                  src="/images/TeamSecond.jpg"
                  width={440}
                  height={592}
                  className="rounded-[10px]"
                  alt="team-image"
                />
              </div>
              <div>
                <h3 className="text-[32px] leading-[1.13] tracking-[-1%] mb-[40px]">
                  We believe that brands are similar to humans.
                  <br />
                  Each has a personality.
                </h3>
                <h3 className="text-[32px] leading-[1.13] tracking-[-1%]">
                  A set of values. <br />A goal. <br />A vision (for the
                  future).
                </h3>
                <p className="text-[#7D7D7D] max-w-[322px] mt-[40px] mb-[60px]">
                  Through creating unique digital experiences, we can help your
                  brand come to life.
                </p>
                <Link href="/work">
                  <a className="text-[14px] md:text-[16px] border-[0.5px] border-[#0f0f0f] rounded-full px-[15px] py-[10px] hover:bg-[#0f0f0f] hover:text-white transition ease-out duration-300">
                    See our work
                  </a>
                </Link>
              </div>
            </div>
          </section>
          <section className="max-w-[800px] mx-auto">
            <h3 className="text-[26px] text-left leading-[1.15] py-[150px] md:pt-[250px] md:pb-[170px] md:text-[32px] tracking-[-1%]  h-[100px] md:h-[initial]">
              <span className="text-[#7D7D7D]">We &nbsp;</span>
              <span className="fading-text">
                create digital experience for analogue humans.
              </span>
            </h3>
          </section>
        </div>
        <section className="bg-[#0f0f0f] rounded-t-[60px]">
          <Services />
        </section>
        <section className="bg-[#0f0f0f] pt-[125px] md:pt-[200px] pb-[150px] md:pb-[200px]">
          <h2 className="text-white text-center max-w-[644px] text-[30px] md:text-[42px] leading-[1.13] tracking-[-1%] mx-auto pb-[150px] md:pb-[200px] px-[15px]">
            Let us brag a little about the brands we've worked for.
          </h2>
          <StudioBrands />
        </section>

        <Cta />
      </main>
      <CursorBody />
    </div>
  );
}

export default studio;
