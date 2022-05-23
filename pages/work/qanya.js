import Image from 'next/image';
import React, { useEffect } from 'react';
import CursorBody from '../../components/CursorBody';
import BannerImage from '../../components/Works/BannerImage';
import Blogs from '../../components/Works/Blogs';
import Job from '../../components/Works/Job';
import Problem from '../../components/Works/Problem';
import WorksText from '../../components/Works/WorksText';
import { Cursor } from '../../components/Cursor';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Qanya() {
  const job = ['Illustrations and Graphic', 'Design for App Promotion'];

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
      background: '#2B7681',
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
        <div className='max-w-[1600px] mx-auto px-[30px] md:px-[50px]'>
          <BannerImage imageSrc='/images/nestle/NestleBanner.jpg' />
        </div>
        <section className='bg-[#2B7681] pt-[290px] pb-[250px] mt-[-220px]'>
          <div className='max-w-[1600px] mx-auto'>
            <WorksText text='Nestlé Health Science is a leader in the field of nutritional science, committed to redefining the management of health.' />
            <div className='flex items-start justify-between px-[120px]'>
              <Job jobs={job} />
              <Problem text='In partnership with LEVO Health, the client wanted a promotional campaign for an app that improves fertility through nutrition and lifestyle habits.' />
            </div>
          </div>
        </section>
        <div className='max-w-[1600px] mx-auto px-[30px] md:px-[50px] mb-[150px]'>
          <section className='second-section'>
            <div className='flex px-[70px] pt-[100px] mb-[200px] justify-between'>
              <h3 className='max-w-[550px] text-[32px] leading-[1.3] tracking-[-1%] fadeIn-text'>
                Being that the target audience mostly consisted of young people
                in their 20s and 30s, it was necessary to come up with graphic
                concepts that they would appreciate.
              </h3>
              <p className='text-[#7d7d7d] fadeIn-text max-w-[400px]'>
                We did several sets of illustrations and five different graphic
                solutions, all contemporary and fun. The illustrations mostly
                consist of lines and colour fills, simple but up to date, while
                the graphics are a modern combination of photographs and playful
                hand drawings. The colours are lively but gently desaturated
                into pastel tones. For all five concepts, we designed visuals
                that were presented on various promotional mockups (newspaper
                ads, posters, billboards).
              </p>
            </div>
            <div className='flex items-center justify-center'>
              <p className='text-[#7d7d7d] '>CONCEPT 01</p>
            </div>
          </section>
        </div>
        <section className='max-w-[1600px] mx-auto px-[30px] md:px-[50px] mb-[80px]'>
          <Image
            src='/images/nestle/NestleMockup1.jpg'
            alt='mockup'
            className='rounded-[10px] fadeIn-text'
            width={1280}
            height={624}
            layout='responsive'
          />
        </section>
        <section className='max-w-[1600px] mx-auto px-[30px] md:px-[50px] mb-[150px]'>
          <div className='grid grid-cols-2 gap-[40px]  mb-[200px]'>
            <div className='flex flex-col gap-[40px]'>
              <Image
                src='/images/nestle/NestleMockup2.jpg'
                height={340}
                width={620}
                alt='clothes'
                objectFit='contain'
                className='fadeIn-text'
              />
              <Image
                src='/images/nestle/NestleMockup3.jpg'
                height={340}
                width={620}
                alt='clothes'
                objectFit='contain'
                className='fadeIn-text'
              />
            </div>
            <Image
              src='/images/nestle/NestleMockup4.png'
              height={720}
              width={620}
              alt='fashion bag'
              className='rounded-[10px] fadeIn-text'
              objectFit='contain'
            />
          </div>
          <div className='flex items-center justify-center'>
            <p className='text-[#7d7d7d] '>CONCEPT 02</p>
          </div>
        </section>
        <section className='max-w-[1600px] mx-auto px-[30px] md:px-[50px] mb-[40px]'>
          <Image
            src='/images/nestle/NestleMockup5.jpg'
            alt='mockup'
            className='rounded-[10px] fadeIn-text'
            width={1280}
            height={624}
            layout='responsive'
          />
        </section>
        <section className='max-w-[1600px] mx-auto px-[30px] md:px-[50px] mb-[150px]'>
          <div className='grid grid-cols-2 gap-[40px]  mb-[200px]'>
            <Image
              src='/images/nestle/NestleMockup6.jpg'
              height={340}
              width={620}
              alt='clothes'
              objectFit='cover'
              className='fadeIn-text'
            />
            <Image
              src='/images/nestle/NestleMockup7.jpg'
              height={340}
              width={620}
              alt='clothes'
              objectFit='cover'
              className='fadeIn-text'
            />
          </div>
          <div className='flex items-center justify-center'>
            <p className='text-[#7d7d7d] '>CONCEPT 03</p>
          </div>
        </section>
        <div className='third-section'>
          <section className='max-w-[1600px] mx-auto px-[30px] md:px-[50px] mb-[40px]'>
            <Image
              src='/images/nestle/NestleMockup8.jpg'
              alt='mockup'
              className='rounded-[10px] fadeIn-text'
              width={1280}
              height={624}
              layout='responsive'
            />
          </section>
          <section className='max-w-[1600px] mx-auto px-[30px] md:px-[50px] mb-[150px]'>
            <div className='grid grid-cols-2 gap-[40px]  mb-[200px]'>
              <Image
                src='/images/nestle/NestleMockup9.jpg'
                height={340}
                width={620}
                alt='clothes'
                objectFit='cover'
                className='fadeIn-text'
              />
              <Image
                src='/images/nestle/NestleMockup10.jpg'
                height={340}
                width={620}
                alt='clothes'
                objectFit='cover'
                className='fadeIn-text'
              />
            </div>
            <div className='flex items-center justify-center'>
              <p className='text-[#7d7d7d] '>CONCEPT 04</p>
            </div>
          </section>
        </div>
        <section className='max-w-[1600px] mx-auto px-[30px] md:px-[50px] mb-[150px]'>
          <div className='grid grid-cols-2 gap-[40px]  mb-[200px]'>
            <Image
              src='/images/nestle/NestleMockup11.png'
              height={720}
              width={620}
              alt='fashion bag'
              className='rounded-[10px] fadeIn-text'
              objectFit='contain'
            />
            <div className='flex flex-col gap-[40px]'>
              <Image
                src='/images/nestle/NestleMockup12.jpg'
                height={340}
                width={620}
                alt='clothes'
                objectFit='contain'
                className='fadeIn-text'
              />
              <Image
                src='/images/nestle/NestleMockup13.jpg'
                height={340}
                width={620}
                alt='clothes'
                objectFit='contain'
                className='fadeIn-text'
              />
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <p className='text-[#7d7d7d] '>CONCEPT 05</p>
          </div>
        </section>
        <section className='max-w-[1600px] mx-auto px-[30px] md:px-[50px] mb-[40px]'>
          <div className='grid grid-cols-2 gap-[40px]'>
            <Image
              src='/images/nestle/NestleMockup15.jpg'
              height={340}
              width={620}
              alt='clothes'
              objectFit='contain'
              className='fadeIn-text'
            />
            <Image
              src='/images/nestle/NestleMockup16.jpg'
              height={340}
              width={620}
              alt='clothes'
              objectFit='contain'
              className='fadeIn-text'
            />
          </div>
        </section>
        <section className='max-w-[1600px] mx-auto px-[30px] md:px-[50px] mb-[80px]'>
          <Image
            src='/images/nestle/NestleMockup17.jpg'
            alt='mockup'
            className='rounded-[10px] fadeIn-text'
            width={1280}
            height={624}
            layout='responsive'
          />
        </section>
        <section className='max-w-[1600px] mx-auto px-[30px] md:px-[50px] mb-[80px]'>
          <div className='flex justify-between items-center px-[70px] mb-[160px]'>
            <h5 className='text-[20px]'>Nestlé Copes</h5>
            <p className='text-[20px] text-[#7d7d7d]'>2019</p>
          </div>
        </section>
        <div className='bg-[#f3f3f3] rounded-[40px]'>
          <div className='max-w-[1600px] mx-auto px-[30px] md:px-[50px]'>
            <Blogs />
          </div>
        </div>
      </main>
      <CursorBody />
    </div>
  );
}

export default Qanya;
