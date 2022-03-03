import Image from 'next/image';
import React, { useEffect } from 'react';
import CursorBody from '../../components/CursorBody';
import BannerImage from '../../components/Works/BannerImage';
import Blogs from '../../components/Works/Blogs';
import Content from '../../components/Works/Content';
import Job from '../../components/Works/Job';
import Problem from '../../components/Works/Problem';
import WorksText from '../../components/Works/WorksText';
import img1 from '../../public/images/mihanomomosa/mihanoLogo.png';
import img2 from '../../public/images/mihanomomosa/MihanoPic1.jpg';
import { Cursor } from '../../components/Cursor';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Carousel from '../../components/Carousel';

gsap.registerPlugin(ScrollTrigger);

function mihanomomosa() {
  const job = ['Logo Design'];

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
      background: '#000',
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
    '/images/mihanomomosa/slide0.jpg',
    '/images/mihanomomosa/slide0.jpg',
    '/images/mihanomomosa/slide0.jpg',
    '/images/mihanomomosa/slide0.jpg',
    '/images/mihanomomosa/slide0.jpg',
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
          <BannerImage imageSrc="/images/mihanomomosa/mihanoBanner.jpg" />
        </div>
        <section className="bg-[#000] pt-[290px] pb-[250px] mt-[-220px]">
          <div className="max-w-[1600px] mx-auto">
            <WorksText text="Mihano Momosa is a brand devoted to women. Mihailo Anusic, the fashion designer behind the brand, insists on creating items that nurture individuality and enable women to feel as if in a modern fairy tale. Believing that each woman is unique in her own way, he approaches making every item with the same dose of enthusiasm, while still holding on to the feminine imperative." />
            <div className="flex items-start justify-between px-[120px]">
              <Job jobs={job} />
              <Problem text="After getting a call from Mihailo, we arranged a meeting to discuss the logo design for his brand. In a few short sentences, he explained exactly what he had in mind. It was refreshing to see such modesty and determination in a young person. When clients have a clear vision of what they want, the design process leans more toward collaboration and the end results are likely more satisfying for all parties." />
            </div>
          </div>
        </section>
        <div className="max-w-[1600px] mx-auto px-[30px] md:px-[50px] mb-[100px]">
          <section className="flex items-center h-[100vh] justify-center second-section">
            <div className="">
              <Image src={img1} alt="work" className="fadeIn-text" />
            </div>
          </section>
        </div>
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
        <section className="pt-[200px]">
          <div className="relative h-[50vh]">
            <Image
              src="/images/mihanomomosa/ManyLogos.png"
              layout="fill"
              alt="logos"
              objectFit="contain"
            />
          </div>
        </section>
        <section className="opacity-0 third-section flex flex-col">
          <section className="pt-[40vh] mb-[80px] max-w-[1600px] mx-auto px-[30px] md:px-[50px]">
            <Content
              content="Since Mihano Momosa is a brand that nourishes uniqueness and individuality, we wanted to keep the logo authentic."
              paragraph="We achieved this effect by writing the name various times on a piece of paper, picking the best but not the most perfect version, adjusting the strokes and finally vectorizing the Mihano Momosa signature. When we were confident in our solution, we presented it to Mihailo. That one design was all it took. Since then, the brand has achieved enormous success in the world of fashion. We would argue that 95% of it is due to his creations and hard work, but that 5% is thanks to the authenticity of the logo, which contains the entire essence of the brand in a single signature."
              imageSrc={img2}
              white={true}
            />
            <div className="grid grid-cols-2 gap-[40px]">
              <Image
                src="/images/Mihano Momosa.jpg"
                height={720}
                width={620}
                alt="fashion bag"
                className="rounded-[10px] fadeIn-text"
                objectFit="cover"
              />
              <div className="flex flex-col gap-[40px]">
                <Image
                  src="/images/mihanomomosa/clothes1.jpg"
                  height={340}
                  width={620}
                  alt="clothes"
                  objectFit="cover"
                  className="fadeIn-text"
                />
                <Image
                  src="/images/mihanomomosa/clothes2.jpg"
                  height={340}
                  width={620}
                  alt="clothes"
                  objectFit="cover"
                  className="fadeIn-text"
                />
              </div>
            </div>
          </section>
        </section>
        <section className="max-w-[1600px] mx-auto px-[30px] md:px-[50px] mb-[80px]">
          <Image
            src="/images/mihanomomosa/MihanoPattern.jpg"
            alt="typography"
            className="rounded-[10px] fadeIn-text"
            width={1280}
            height={624}
            layout="responsive"
          />
        </section>
        <section className="max-w-[1600px] mx-auto px-[30px] md:px-[50px] mb-[80px]">
          <div className="flex justify-between items-center px-[70px] mb-[160px]">
            <h5 className="text-[20px]">Mihano Momosa</h5>
            <p className="text-[20px] text-[#7d7d7d]">2017</p>
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

export default mihanomomosa;
