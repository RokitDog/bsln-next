import Head from 'next/head';
import Banner from '../components/Banner';
import CardsHome from '../components/CardsHome';
import Testimonials from '../components/Testimonials';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import SlickNextArrow from '../components/slick-arrow/SlickNextArrow';
import SlickPrevArrow from '../components/slick-arrow/SlickPrevArrow';
import Brands from '../components/Brands';
import Services from '../components/Services';
import Process from '../components/Process';
import Cta from '../components/Cta';
import { useEffect, useRef } from 'react';
import { Cursor } from '../components/Cursor';
import CursorBody from '../components/CursorBody';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { gsap } from 'gsap';
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  let settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SlickNextArrow />,
    prevArrow: <SlickPrevArrow />,
  };

  const testimonials = useRef(null);

  useEffect(() => {
    if (window.innerWidth > 1024) {
      Cursor();
    }
    if (window.innerWidth < 768) {
      ScrollTrigger.config({
        autoRefreshEvents: 'DOMContentLoaded,load,visibilitychange',
      });
    }
    return () => {
      ScrollTrigger.getAll().forEach((instance) => {
        instance.kill();
      });
      document.body.style.background = 'white';
    };
  }, []);

  return (
    <div>
      <Head>
        <title>Baseline</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="max-w-[1600px] mx-auto px-[30px] md:px-[50px] lg:px-[80px]">
          <Banner />
          <CardsHome excerpt={true} />
          <div
            className="testimonials translate-y-10 mb-[100px] md:mb-[220px] "
            ref={testimonials}
          >
            <Slider {...settings}>
              <Testimonials
                text="“Arcu adipiscing tincidunt tristique euismod mi. Sed non id enim id malesuada. Ullamcorper porttitor pharetra fringilla bibendum amet consectetur dui ridiculus interdum.”"
                image="/images/Levo Testimonials.jpg"
                name="Fergus Linskey."
                org="LEVO Health"
              />
              <Testimonials
                text="“Arcu adipiscing tincidunt tristique euismod mi. Sed non id enim id malesuada. Ullamcorper porttitor pharetra fringilla bibendum amet consectetur dui ridiculus interdum.”"
                image="/images/Levo Testimonials.jpg"
                name="Fergus Linskey."
                org="LEVO Health"
              />
            </Slider>
          </div>
        </div>
        <Brands testimonialRef={testimonials} />
        <Services />
        <Process />
        <Cta />
      </main>
      <CursorBody />
    </div>
  );
}
