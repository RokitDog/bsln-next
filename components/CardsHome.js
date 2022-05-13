import React from 'react';
import { useInView } from 'react-intersection-observer';
import { gsap, Power2 } from 'gsap';
import Card from './Card';
import Link from 'next/link';
import { urlFor } from '../sanity';

function CardsHome({
  slug,
  heading,
  subHeading,
  cardsUnderlinedWord,
  cards,
  cardsCtaContent,
  cardsCtaButton,
}) {
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
  return (
    <section className='mb-[142px] md:mb-[250px] cards-home'>
      <div ref={ref} className='opacity-0 translate-y-10'>
        <p className='font-medium text-[10px] md:text-[14px] text-[#7D7D7D]'>
          {slug}
        </p>
        <div>
          <h2 className='text-[30px] leading-[1.13] tracking-[-0.01rem] mt-[20px] md:mt-[40px] md:text-[42px] mb-[30px] max-w-[596px]'>
            {heading}
          </h2>
          <p className='text-[17px] md:text-[20px]'>
            {subHeading}{' '}
            <span className='underline text-[#367F61]'>
              {' '}
              <Link href='/contact'>
                <a>{cardsUnderlinedWord}</a>
              </Link>
            </span>
            .
          </p>
        </div>
      </div>
      <div className='grid md:grid-cols-2 gap-x-[40px] lg:grid-cols-3'>
        <div
          className='mt-[80px] opacity-0  translate-y-[100px] justify-self-center  lg:mt-[200px]'
          ref={ref2}
        >
          <Card
            name={cards.cardTitle1}
            text={cards.cardDescription1}
            image={urlFor(cards.cardImage1).url()}
            link='/work/hecker-construction'
          />
        </div>
        <div
          className='mt-[80px] opacity-0  translate-y-[100px] justify-self-center  lg:mt-[300px]'
          ref={ref3}
        >
          <Card
            name={cards.cardTitle2}
            text={cards.cardDescription2}
            image={urlFor(cards.cardImage2).url()}
            link='/work/nestle'
          />
        </div>
        <div className='md:flex md:justify-around md:col-span-2 md:gap-x-[40px] justify-self-center md:justify-self-auto lg:col-span-1 lg:flex-col lg:mt-[-100px]'>
          <div
            className='mt-[80px] opacity-0  translate-y-[100px] md:flex-[50%] '
            ref={ref4}
          >
            <Card
              name={cards.cardTitle3}
              text={cards.cardDescription3}
              image={urlFor(cards.cardImage3).url()}
              link='/work/mihano-momosa'
            />
          </div>
          <div
            className='mt-[80px] mb-[100px] opacity-0 translate-y-[100px]  justify-self-center    lg:mt-[160px] md:flex-[50%]'
            ref={ref5}
          >
            <Card
              name={cards.cardTitle4}
              text={cards.cardDescription4}
              image={urlFor(cards.cardImage4).url()}
              link='/work/qanya'
            />
          </div>
        </div>
      </div>
      <div
        className='max-w-full lg:max-w-[666px] xl:max-w-[880px] flex justify-center opacity-0 translate-y-10 lg:mt-[-200px]'
        ref={ref6}
      >
        <div>
          <h3 className='text-[26px] tracking-[-1%] leading-[1.15] md:text-[32px] mb-[35px] md:mb-[45px] max-w-[411px]'>
            {cardsCtaContent}
          </h3>
          <Link href='/work'>
            <a className='text-[14px] md:text-[16px] border-[0.5px] border-[#0f0f0f] rounded-full px-[15px] py-[10px] hover:bg-[#0f0f0f] hover:text-white transition ease-out duration-300'>
              {cardsCtaButton}
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CardsHome;
