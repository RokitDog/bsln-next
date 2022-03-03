import Image from 'next/image';
import React, { useEffect } from 'react';
import CursorBody from '../../components/CursorBody';
import BannerImage from '../../components/Works/BannerImage';
import Blogs from '../../components/Works/Blogs';
import Content from '../../components/Works/Content';
import Job from '../../components/Works/Job';
import Problem from '../../components/Works/Problem';
import WorksText from '../../components/Works/WorksText';
import img1 from '../../public/images/fcjedinstvo/Mockup1.jpg';
import img2 from '../../public/images/fcjedinstvo/JedinstvoMockup2.jpg';
import { Cursor } from '../../components/Cursor';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Carousel from '../../components/Carousel';

gsap.registerPlugin(ScrollTrigger);

function fcjedinstvogospodjinci() {
  const job = ['Monograph Design'];

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
      background: '#C29E60',
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

  const items = [
    '/images/fcjedinstvo/slide0.jpg',
    '/images/fcjedinstvo/slide0.jpg',
    '/images/fcjedinstvo/slide0.jpg',
    '/images/fcjedinstvo/slide0.jpg',
    '/images/fcjedinstvo/slide0.jpg',
  ];

  const setting = {
    dragSpeed: 1,
    itemWidth: 540,
    itemHeight: 720,
    itemSideOffsets: 15,
  };

  const itemStyle = {
    width: `${setting.itemWidth}px`,
    height: `${setting.itemHeight}px`,
    margin: `0px ${setting.itemSideOffsets}px`,
  };
  return (
    <div>
      <main>
        <div className="max-w-[1600px] mx-auto px-[30px] md:px-[50px]">
          <BannerImage imageSrc="/images/fcjedinstvo/JedinstvoBanner.jpg" />
        </div>
        <section className="bg-[#C29E60] pt-[290px] pb-[250px] mt-[-220px]">
          <div className="max-w-[1600px] mx-auto">
            <WorksText text="The Football Club “Jedinstvo” in the small village of Gospođinci has a long history. People in the village started playing this sport after World War I, as early as 1919." />
            <div className="flex items-start justify-between px-[120px]">
              <Job jobs={job} />
              <Problem text="The clients first came to us with the idea of designing a brochure to celebrate the 100th anniversary of the Football Club “Jedinstvo”. After hearing how much the club and football tradition meant to the local community, we managed to convince them to do something bigger for this historic event." />
            </div>
          </div>
        </section>
        <div className="max-w-[1600px] mx-auto px-[30px] md:px-[50px]">
          <section className="flex items-center h-[100vh] justify-center second-section">
            <div className="w-[75%] mt-[200px]">
              <Image
                src={img1}
                alt="work"
                className="fadeIn-text"
                layout="responsive"
              />
            </div>
          </section>
        </div>
        <section className="pt-[40vh] mb-[200px] max-w-[1600px] mx-auto px-[30px] md:px-[50px]">
          <Content
            content="The brochure eventually evolved into an 80 page, hard cover photo monograph, with details in gold print. The inside captures the rich history of the club and it was designed to be modern but timeless, by combining interesting layouts, creating illustrations, and playing with typography and grids."
            paragraph="Once the design was finished and the monograph printed, the club and the most loyal fans received copies of the book, commemorating a century of existence through photographs and words, capturing history. To quote the book “The photo-monograph of the Football Club “Jedinstvo” Gospođinci represents both a debt and an obligation to the thousands of those who’ve worn red and white – but also for the young ones who have yet to earn the trust and honour!’’"
            imageSrc={img2}
            row={true}
          />
        </section>
        <section
          className="work-slider h-[720px] w-[100%] hover-js"
          data-image-src="drag"
        >
          <Carousel _data={items} {...setting}>
            {items.map((i, _i) => (
              <div key={_i} className="item" style={{ ...itemStyle }}>
                <Image
                  src={i}
                  alt="images"
                  height={720}
                  width={540}
                  layout="responsive"
                />
              </div>
            ))}
          </Carousel>
        </section>
        <section className="pt-[120px] max-w-[1600px] mx-auto px-[30px] md:px-[50px] mb-[80px] third-section">
          <div className="relative flex justify-center mb-[120px]">
            <Image
              src="/images/fcjedinstvo/JedinstvoTypography.jpg"
              width={920}
              height={534}
              alt="logos"
            />
          </div>
          <div className="grid grid-cols-2 gap-[40px]">
            <Image
              src="/images/fcjedinstvo/Trifold1.jpg"
              height={720}
              width={620}
              alt="fashion bag"
              className="rounded-[10px] fadeIn-text"
              objectFit="cover"
            />
            <div className="flex flex-col gap-[40px]">
              <Image
                src="/images/fcjedinstvo/Trifold2.jpg"
                height={340}
                width={620}
                alt="clothes"
                objectFit="cover"
                className="fadeIn-text"
              />
              <Image
                src="/images/fcjedinstvo/Trifold3.jpg"
                height={340}
                width={620}
                alt="clothes"
                objectFit="cover"
                className="fadeIn-text"
              />
            </div>
          </div>
        </section>
        <section className="max-w-[1600px] mx-auto px-[30px] md:px-[50px] mb-[80px]">
          <div className="flex justify-center">
            <Image
              src="/images/fcjedinstvo/JedinstvoArticle.jpg"
              alt="typography"
              className="rounded-[10px] fadeIn-text"
              width={920}
              height={531}
            />
          </div>
        </section>
        <section className="max-w-[1600px] mx-auto px-[30px] md:px-[50px] mb-[80px]">
          <div className="flex justify-between items-center px-[70px] mb-[160px]">
            <h5 className="text-[20px]">FC Jedinstvo Gospodjinci</h5>
            <p className="text-[20px] text-[#7d7d7d]">2019</p>
          </div>
        </section>
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

export default fcjedinstvogospodjinci;
