import React, { useEffect } from 'react';
import { Cursor } from '../../components/Cursor';
import CursorBody from '../../components/CursorBody';
import BannerImage from '../../components/Works/BannerImage';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { gsap } from 'gsap';
import WorksText from '../../components/Works/WorksText';
import Job from '../../components/Works/Job';
import Problem from '../../components/Works/Problem';
import Explanation from '../../components/Works/Explanation';
import Image from 'next/image';
import fs1 from '../../public/images/finsource/finsource-design.jpg';
import fs2 from '../../public/images/finsource/finsource-logo.svg';
import fs3 from '../../public/images/finsource/finsource-typo.jpg';
import fs4 from '../../public/images/finsource/finsource-mockup.jpg';
import fs5 from '../../public/images/finsource/finsource-mockup2.png';
import fs6 from '../../public/images/finsource/finsource-mockup3.jpg';
import fs7 from '../../public/images/finsource/finsource-mockup4.jpg';
import Content from '../../components/Works/Content';
import Blogs from '../../components/Works/Blogs';

gsap.registerPlugin(ScrollTrigger);

function finsource() {
  useEffect(() => {
    if (window.innerWidth > 1024) {
      Cursor();
    }
    gsap.to('body main', {
      opacity: 1,
      duration: 0.5,
    });
    const fadeInTexts = gsap.utils.toArray('.fadeIn-text');
    fadeInTexts.forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        translateY: 100,
        duration: 1.3,
        stagger: {
          amount: 1,
        },
        scrollTrigger: {
          trigger: text,
          start: 'top bottom',
          end: 'bottom bottom',
        },
      });
    });

    gsap.to('body main', {
      background: '#0B2F28',
      scrollTrigger: {
        trigger: '.third-section',
        start: 'top center',
        end: '92% center',
        toggleActions: 'play reverse play reverse',
        onEnter: () => {
          gsap.to('.second-section', {
            opacity: 0,
            duration: 0.5,
          });
          gsap.to('.third-section', {
            opacity: 1,
            duration: 0.5,
          });
        },
        onLeaveBack: () => {
          gsap.to('.second-section', {
            opacity: 1,
            duration: 0.5,
          });
          gsap.to('.third-section', {
            opacity: 0,
            duration: 0.5,
          });
        },
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((instance) => {
        instance.kill();
      });
      document.body.style.background = 'white';
    };
  }, []);

  const job = ['Brand Discovery', 'Website Design', 'Development'];
  return (
    <div>
      <main>
        <div className="max-w-[1600px] mx-auto px-[30px] md:px-[50px]">
          <BannerImage imageSrc="/images/finsource/finsource-banner.jpg" />
        </div>
        <section className="bg-[#0b2f28] pt-[290px] pb-[250px] mt-[-220px]">
          <div className="max-w-[1600px] mx-auto">
            <WorksText text="FinSource Accounting is a tailored accounting and bookkeeping family-owned and operated firm which understands the unique challenges of running a business and a family. Founded by a corporate alumna of Deloitte and BNP Paribas, with over 15 years of experience in the financial industry." />
            <div className="flex items-center justify-between px-[120px]">
              <Job jobs={job} />
              <Problem text="Since the company was at its early stages, the client asked us to design a logo and a temporary one-page website that would expand and develop over time, as the business grew. Because FinSource Accounting makes “complex financials simple”, our task was to create their visual identity accordingly." />
            </div>
          </div>
        </section>
        <div className="max-w-[1600px] mx-auto px-[30px] md:px-[50px] mb-[100px]">
          <section className="flex items-center justify-between second-section py-[250px] px-[70px]">
            <Explanation text="We were asked to design a simple but memorable logo that will differentiate them from competitors and a user-friendly website that their future customers can easily navigate." />
            <Image src={fs1} alt="work" className="fadeIn-text" />
          </section>
          <section className="opacity-0 third-section flex flex-col ">
            <div className=" flex items-center justify-center pb-[50vh]">
              <Image src={fs2} alt="logo" />
            </div>
            <div className=" relative rounded-[10px]  mb-[40px]">
              <Image
                src={fs3}
                alt="typography"
                className="rounded-[10px] fadeIn-text"
                width={1280}
                height={624}
                layout="responsive"
              />
            </div>
            <div className=" relative rounded-[10px] ">
              <Image
                src={fs4}
                alt="mockup"
                className="rounded-[10px] fadeIn-text"
                width={1280}
                height={624}
                layout="responsive"
              />
            </div>
            <div className=" relative rounded-[10px] text-center mt-[300px]">
              <Image
                src={fs5}
                alt="mockup"
                className="fadeIn-text"
                width={943}
                height={425}
              />
            </div>
          </section>
          <section className="pt-[40vh] mb-[80px]">
            <Content
              content="It makes no difference to us whether the client we’re working with is big or small, just starting out or already successful in their business ventures. We treat every project with undivided attention and care, giving all of our clients an equal chance at a fresh start."
              paragraph="In this case, we began by assembling the colour pallet, choosing and combining the right typography, and putting in many hours of work into developing the best yet most simple logo design, specially tailored for the client. Great quality content made the whole process of designing the website from start to finish much smoother. The site was live in less than a month, optimised to the extent that its score is 99/100 for the desktop version and 85/100 for mobile phones, making it fully responsive."
              imageSrc={fs6}
              bigImageSrc={fs7}
              row={true}
            />
          </section>
          <div className="flex justify-between items-center px-[70px] mb-[160px]">
            <h5 className="text-[20px]">FinSource Accounting</h5>
            <p className="text-[20px] text-[#7d7d7d]">2021</p>
          </div>
        </div>
        <div className="bg-[#f3f3f3] rounded-[40px]">
          <div className="max-w-[1600px] mx-auto px-[30px] md:px-[50px]">
            <Blogs />
          </div>
        </div>
      </main>
      <CursorBody />
    </div>
  );
}

export default finsource;
