import React, { useEffect } from 'react';
import { Cursor } from '../../components/Cursor';
import CursorBody from '../../components/CursorBody';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import BannerImage from '../../components/Works/BannerImage';
import WorksText from '../../components/Works/WorksText';
import Job from '../../components/Works/Job';
import Problem from '../../components/Works/Problem';
import Image from 'next/image';
import img1 from '../../public/images/hecker/HeckerLogoSketch.png';
import img2 from '../../public/images/hecker/HeckerHelmet.jpg';
import img3 from '../../public/images/hecker/HeckerLogo.png';
import img4 from '../../public/images/hecker/HeckerDoorMockup1.jpg';
import img5 from '../../public/images/hecker/HeckerDoorMockup2.jpg';
import img6 from '../../public/images/hecker/HeckerInvoice.jpg';
import Blogs from '../../components/Works/Blogs';
import Content from '../../components/Works/Content';

gsap.registerPlugin(ScrollTrigger);

function heckerconstruction() {
  const job = ['Logo Design', 'Brand Identity'];

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
      background: '#0031F9',
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

  return (
    <>
      <main>
        <div className="max-w-[1600px] mx-auto px-[30px] md:px-[50px]">
          <BannerImage imageSrc="/images/hecker/HeckerBanner.jpg" />
        </div>
        <section className="bg-[#0031F9] pt-[290px] pb-[250px] mt-[-220px]">
          <div className="max-w-[1600px] mx-auto">
            <WorksText text="Hecker Construction company (Tampa, Florida) specialises in all phases of marine construction and renovation since 1973." />
            <div className="flex items-start justify-between px-[120px]">
              <Job jobs={job} />
              <Problem text="The client reached out with the idea to develop a modern and easily recognizable brand identity, with simple, geometric shapes and minimalistic construction elements. The goal was to create a visual identity that would set Hecker Construction apart from other companies in the field, presenting a more professional image and bringing in fresh clients." />
            </div>
          </div>
        </section>
        <div className="max-w-[1600px] mx-auto px-[30px] md:px-[50px] mb-[100px]">
          <section className="second-section">
            <h3 className="pl-[70px] pt-[100px] max-w-[540px] text-[32px] leading-[1.3] tracking-[-1%] mb-[100px] fadeIn-text">
              With this brief in mind, we went straight to the drawing board.
            </h3>
            <div className="flex items-center justify-center">
              <Image src={img1} alt="work" className="fadeIn-text" />
            </div>
          </section>
        </div>
        <section className="opacity-0 third-section flex flex-col ">
          <div className="flex justify-center items-center">
            <Image src={img3} alt="logo" className="fadeIn-text" />
          </div>

          <section className="pt-[40vh] mb-[80px] max-w-[1600px] mx-auto px-[30px] md:px-[50px]">
            <div className="grid grid-cols-2 gap-[110px] mb-[80px]">
              <Image
                src="/images/hecker/HeckerTypography.jpg"
                height={675}
                width={620}
                alt="Hecker Typo"
                className="rounded-[10px] fadeIn-text "
                objectFit="cover"
                layout="responsive"
              />
              <Image
                src="/images/hecker/HeckerSolutions.png"
                height={675}
                width={620}
                alt="Hecker Solutions"
                className="fadeIn-text "
                objectFit="cover"
                layout="responsive"
              />
            </div>
            <Content
              content="Combining various hidden construction elements, we designed a logo with straight cut lines and a geometric form."
              paragraph="The structure of the logo consists of two L shapes, an abstract crane silhouette and a prefabricated concrete element, which forms the letter H. The rest of the brand identity was created in the same minimalistic style, with bold colours and geometric line illustrations."
              imageSrc={img2}
              white={true}
              row={true}
            />
            <Image
              src="/images/hecker/HeckerMockup.jpg"
              alt="typography"
              className="rounded-[10px] fadeIn-text"
              width={1280}
              height={624}
              layout="responsive"
            />
            <div className="flex items-center justify-center my-[190px]">
              <Image
                src="/images/hecker/HeckerShapes.png"
                alt="typography"
                className="rounded-[10px] fadeIn-text"
                width={840}
                height={171}
              />
            </div>
          </section>
        </section>
        <section className="max-w-[1600px] mx-auto px-[30px] md:px-[50px] mb-[80px]">
          <div className="flex space-x-[40px] mb-[120px]">
            <div className="flex-[20%] ">
              <Image
                src={img4}
                alt="mockups"
                className="rounded-[10px] fadeIn-text"
                layout="responsive"
              />
            </div>
            <div className="flex-[20%]">
              <Image
                src={img5}
                alt="mockups"
                className="rounded-[10px] fadeIn-text"
                layout="responsive"
              />
            </div>
            <div className="flex-[66.5%]">
              <Image
                src={img6}
                alt="mockups"
                className="rounded-[10px] fadeIn-text"
                layout="responsive"
              />
            </div>
          </div>
          <div className="flex space-x-[40px] mb-[120px]">
            <div className="flex-[25%]">
              <Image
                src="/images/hecker/illustration1.jpg"
                alt="illustration"
                className="fadeIn-text"
                width={290}
                height={197}
                layout="responsive"
              />
            </div>
            <div className="flex-[25%]">
              <Image
                src="/images/hecker/Illustration2.jpg"
                alt="illustration"
                className="fadeIn-text"
                width={290}
                height={197}
                layout="responsive"
              />
            </div>
            <div className="flex-[25%]">
              <Image
                src="/images/hecker/Illustration3.jpg"
                alt="illustration"
                className="fadeIn-text"
                width={290}
                height={197}
                layout="responsive"
              />
            </div>
            <div className="flex-[25%]">
              <Image
                src="/images/hecker/Illustration4.jpg"
                alt="illustration"
                className="fadeIn-text"
                width={290}
                height={197}
                layout="responsive"
              />
            </div>
          </div>
          <div>
            <Image
              src="/images/hecker/HeckerTshirt.jpg"
              alt="mockup"
              className="rounded-[10px] fadeIn-text"
              width={1280}
              height={624}
              layout="responsive"
            />
          </div>
        </section>
        <section className="max-w-[1600px] mx-auto px-[30px] md:px-[50px] mb-[80px]">
          <div className="flex justify-between items-center px-[70px] mb-[160px]">
            <h5 className="text-[20px]">Hecker Construction Inc.</h5>
            <p className="text-[20px] text-[#7d7d7d]">2018</p>
          </div>
        </section>
        <div className="bg-[#f3f3f3] rounded-[40px]">
          <div className="max-w-[1600px] mx-auto px-[30px] md:px-[50px]">
            <Blogs />
          </div>
        </div>
      </main>
      <CursorBody />
    </>
  );
}

export default heckerconstruction;
