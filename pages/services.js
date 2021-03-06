import React, { useEffect } from 'react';
import Cta from '../components/Cta';
import { Cursor } from '../components/Cursor';
import CursorBody from '../components/CursorBody';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { gsap, Power2 } from 'gsap';
import HeadingSingle from '../components/HeadingSingle';
import ServiceBox from '../components/ServiceBox';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { sanityClient } from '../sanity';

gsap.registerPlugin(ScrollTrigger);

function Services({ content }) {
  const data = content[0];
  const [ref, inView, entry] = useInView();

  if (inView) {
    let innerWindowWidthh = window.innerWidth;
    const fadeInAnimation = gsap.to(entry.target, {
      y: 0,
      duration: 1.3,
      opacity: 1,
      delay: innerWindowWidthh >= 768 ? 1.5 : 0,
      ease: Power2.easeOut,
    });
  }

  useEffect(() => {
    if (window.innerWidth > 1024) {
      Cursor();
    }
    gsap.to('body main', {
      opacity: 1,
      duration: 2,
      delay: 0.1,
    });
    return () => {
      ScrollTrigger.getAll().forEach((instance) => {
        instance.kill();
      });
      document.body.style.background = 'white';
    };
  }, []);

  const items1 = [
    'Logo Design',
    'Corporate Identity',
    'Brand Standards',
    'Branding & Re-Branding',
    'Illustrations',
    'Packaging Design',
    'Copywriting',
  ];
  const items2 = [
    'Brochures',
    'Catalogues',
    'Sale Sheets',
    'Print Ads',
    'Indoor & Outdoor Ads',
    'Posters',
  ];
  const items3 = [
    'UI/UX',
    'Web Design',
    'Content Writing',
    'Online Store',
    'Front-end Development',
    'Back-end Development',
    'React Websites',
    'Wordpress Websites',
  ];
  const items4 = [
    'SEO',
    'Strategy',
    'Google Ad Campaigns',
    'Social Media',
    'SEO Copywriting',
  ];
  const items5 = [
    'Logo Animation',
    'Animations for Website',
    'Animations for Ad Campaign',
    'Social Media Animations',
    'Explainer Videos',
  ];

  return (
    <div>
      <main>
        <div className='max-w-[1600px] mx-auto px-[30px] md:px-[50px]  mb-[100px]'>
          <div className='mt-[100px] md:px-[50px] mb-[180px] md:mb-[150px]'>
            <HeadingSingle
              title='Helping businesses grow and brands evolve since 2008'
              sub='Services'
            />
          </div>
          <section
            ref={ref}
            className='opacity-0 translate-y-[100px] service-page-container transition-all duration-300 ease-out'
          >
            <Link href='/services/branding'>
              <a>
                <ServiceBox
                  title='Branding'
                  content='Being the unique black sheep in a herd of white should be the biggest aspiration when it comes to forming an authentic brand that your customers will remember, and want to come back to.'
                  list={items1}
                  numberOfItems={4}
                  link='/services/branding'
                />
              </a>
            </Link>
            <Link href='/services/print-design'>
              <a>
                <ServiceBox
                  title='Print Design'
                  content="Offline marketing isn't dead. Unlike in the case of digital advertising, printed ads can be converted into paper planes after they???ve completed their mission!"
                  list={items2}
                  numberOfItems={4}
                  link='/services/print-design'
                />
              </a>
            </Link>
            <Link href='/services/websites'>
              <a>
                <ServiceBox
                  title='Websites'
                  content='Your website is your best outfit for a first date. We can help you make an impression your visitors will remember, turning them into paying clients and customers, getting you a second date.'
                  list={items3}
                  numberOfItems={4}
                  link='/services/websites'
                />
              </a>
            </Link>
            <Link href='/services/digital-marketing'>
              <a>
                <ServiceBox
                  title='Digital Marketing'
                  content="Everyone???s online. If your not using the opportunity to reach millions of potential clients in the era of unlimited connection, let's get you on that train ASAP. It's a heck of a ride!"
                  list={items4}
                  numberOfItems={3}
                  link='/services/digital-marketing'
                />
              </a>
            </Link>
            <Link href='/services/motion-graphics'>
              <a>
                <ServiceBox
                  title='Motion Graphics'
                  content='We dare you not to look at a moving object. Impossible? Motion is mesmerizing. If you are trying to capture instant attention, animation is the way to go. Let???s move it!'
                  list={items5}
                  numberOfItems={3}
                  link='/services/motion-graphics'
                />
              </a>
            </Link>
          </section>
        </div>
        <Cta
          footerHeading={data.footerHeading}
          footerSubHeading={data.footerSubHeading}
          footerButton={data.footerButton}
        />
      </main>
      <CursorBody />
    </div>
  );
}

export default Services;

export const getServerSideProps = async () => {
  const query = `
  *[_type == "HomePage"]{
    footerHeading,
    footerSubHeading,
    footerButton
  }
  
  `;

  const content = await sanityClient.fetch(query);

  return {
    props: {
      content,
    },
  };
};
