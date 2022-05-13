import React from 'react';
import { useEffect } from 'react';
import { gsap, Power4, Power2 } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import CursorBody from '../../components/CursorBody';
import HeadingSingle from '../../components/HeadingSingle';
import { Cursor } from '../../components/Cursor';
import Cta from '../../components/Cta';
import Image from 'next/image';
import { useRef } from 'react';
import ServiceCard from '../../components/ServiceCard';
import { sanityClient } from '../../sanity';

gsap.registerPlugin(ScrollTrigger);

function branding({ content }) {
  const data = content[0];
  const image1 = useRef();
  const image2 = useRef();
  const contentRef = useRef();

  useEffect(() => {
    if (window.innerWidth > 1024) {
      Cursor();
    }
    gsap.to('body main', {
      opacity: 1,
      duration: 0.5,
    });

    const anim1 = gsap.from(image1.current, {
      duration: 1,
      opacity: 0,
      delay: 2,
      translateY: 100,
      ease: Power4.easeInOut,
    });
    const anim2 = gsap.from(image2.current, {
      duration: 1.3,
      opacity: 0,
      delay: 2.1,
      translateY: 100,
      ease: Power4.easeInOut,
      onComplete: () => {
        gsap.to(image2.current, {
          duration: 1.3,
          rotateZ: '15deg',
          ease: Power4.easeInOut,
        });
      },
    });
    const anim3 = gsap.from(contentRef.current, {
      y: 100,
      duration: 1.3,
      opacity: 0,
      ease: Power2.easeOut,
      delay: 1.5,
    });

    return () => {
      anim1.kill();
      anim2.kill();
      anim3.kill();
      document.body.style.background = 'white';
    };
  }, []);

  return (
    <div>
      <main>
        <div className='max-w-[1600px] mx-auto px-[30px] md:px-[50px]'>
          <section className='mb-[180px] md:mb-[150px] grid lg:grid-cols-2 2xl:gap-x-[231px]'>
            <div className='mt-[100px] lg:px-[50px] mb-[60px] max-w-[580px]'>
              <HeadingSingle
                title='Branding'
                sub='Services'
                text='Being the unique black sheep in a herd of white should be the biggest aspiration when it comes to forming an authentic brand that your customers will remember, and want to come back to.'
              />
            </div>
            <div className='relative flex lg:self-center lg:justify-self-center'>
              <div className='mr-[-100px]' ref={image1}>
                <Image
                  src='/images/Mihano Momosa.jpg'
                  width={240}
                  height={260}
                  alt='image'
                  priority
                />
              </div>
              <div className='mr-[30px] md:mr-0' ref={image2}>
                <Image
                  src='/images/Qanya.jpg'
                  width={240}
                  height={260}
                  alt='image'
                  priority
                />
              </div>
            </div>
          </section>
          <div ref={contentRef}>
            <section className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mb-[150px] md:mb-[200px] gap-x-[60px] 2xl:gap-x-[120px] md:px-[50px]'>
              <div className='xl:space-y-[70px]'>
                <div className='mb-[70px] xl:mb-0'>
                  <ServiceCard
                    title='Logo Design'
                    content='Even if you have been living under a rock, chances are you’ve seen the Apple logo and remember it. Logos tend to stick around in people’s heads. They are a visual representation of your brands identity, that elevates your professional appearance and separates your business from the rest. Everyone needs one.'
                  />
                </div>
                <div className='mb-[70px] xl:mb-0'>
                  <ServiceCard
                    title='Branding & Rebranding'
                    content="Feeling unseen in a sea of similar businesses?
          Branding is what will help you swim to the top
          and stay afloat. 
          
          It’s your business's unique presence and personality.
          The name, logo, colors, imagery, tone, 
          even the values you promote.
          
          Start from scratch or refresh and restart 
          the growth of your business today."
                  />
                </div>
                <div className='mb-[70px] xl:mb-0'>
                  <ServiceCard
                    title='Copywriting'
                    content='What is the difference between a boring block of text 
          you immediately want to click away from 
          and a simple sentence that makes you want to
          JOIN, BUY, CLICK, READ MORE?
           
          Good copy.'
                  />
                </div>
              </div>
              <div className='xl:space-y-[70px] '>
                <div className='mb-[70px] xl:mb-0'>
                  <ServiceCard
                    title='Corporate Identity'
                    content='You are introduced to a potential client.
          You tell them your name and website.
          
          They forget it the next day.
          
          What if you tried this:
          Business card. Memorandum. Envelope. All on brand.
          
          Because writing it out on a napkin is so last century and amnesia is not an excuse.'
                  />
                </div>
                <div className='mb-[70px] xl:mb-0'>
                  <ServiceCard
                    title='Illustration'
                    content='Adults are similar to children. 
          Our attention span is limited. 
          We like imagery more than words.
          
          Illustrations are engaging, clear, fun and self-explanatory.
          In a fast-paced world, this makes all the difference 
          in making your customers stick around.'
                  />
                </div>
              </div>
              <div className='xl:space-y-[70px] md:col-start-2 md:mt-[-400px] xl:mt-0 xl:col-start-auto'>
                <div className='mb-[70px] xl:mb-0'>
                  <ServiceCard
                    title='Brand Standards'
                    content='Imagine you have a friend called Steve. You like Steve.
          Steve is always on time, wears polo shirts 
          and is very shy in public.
          
          Suddenly, Steve is an hour late, he’s wearing a leather jacket,
          talking very loudly.
          
          How does this make you feel?
          
          Humans like consistency. It creates trust. 
          Brand standards provide rules and guides 
          for fonts, colors and imagery, so there are no surprises.
          
          You know you can always count on Steve to be Steve.'
                  />
                </div>
                <div className='mb-[70px] xl:mb-0'>
                  <ServiceCard
                    title='Packaging Design'
                    content="Yes, your product should be great. 
          But if your packaging sucks, 
          nobody will care enough to buy it 
          and get the chance to experience the greatness 
          that’s hiding on the inside. 
          
          There's too many good products out there. 
          Let's make yours stand out in any package crowd."
                  />
                </div>
              </div>
            </section>
          </div>
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

export default branding;

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
