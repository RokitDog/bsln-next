import Head from 'next/head';
import Banner from '../components/Banner';
import CardsHome from '../components/CardsHome';
import Testimonials from '../components/Testimonials';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import SlickNextArrow from '../components/slick-arrow/SlickNextArrow';
import SlickPrevArrow from '../components/slick-arrow/SlickPrevArrow';
import { useInView } from 'react-intersection-observer';
import { gsap, Power2 } from 'gsap';

export default function Home() {
  let settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SlickNextArrow />,
    prevArrow: <SlickPrevArrow />,
  };
  const [ref, inView, entry] = useInView({
    threshold: 0.25,
  });

  if (inView) {
    const fadeInAnimation = gsap.to(entry.target, {
      y: 0,
      duration: 1.3,
      opacity: 1,
      ease: Power2.easeOut,
    });
  }
  return (
    <div className="px-[80px] ">
      <Head>
        <title>Baseline</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Banner />
        <CardsHome />
        <div className="testimonials opacity-0 translate-y-10" ref={ref}>
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
      </main>
    </div>
  );
}
