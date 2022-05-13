import React from 'react';
import { useEffect } from 'react';
import { gsap, Power4, Power2 } from 'gsap';
import CursorBody from '../../components/CursorBody';
import HeadingSingle from '../../components/HeadingSingle';
import { Cursor } from '../../components/Cursor';
import Cta from '../../components/Cta';
import Image from 'next/image';
import { useRef } from 'react';
import ServiceCard from '../../components/ServiceCard';
import { sanityClient } from '../../sanity';

function printdesign({ content }) {
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
                title='Print Design'
                sub='Services'
                text="Offline marketing isn't dead. Unlike in the case of digital advertising, printed ads can be converted into paper planes after they’ve completed their mission!"
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
              <div className='xl:space-y-[70px] '>
                <div className='mb-[70px] xl:mb-0'>
                  <ServiceCard
                    title='Brochures'
                    content='Do you need a cost effective way to advertise your business?

                    Branded and personalized,
                    with information about your company,
                    your products or services.
                    
                    Throw them in the air, spread them around or share them online.
                    
                    Potential customers are just a
                    brochure away.'
                  />
                </div>
                <div className='mb-[70px] xl:mb-0'>
                  <ServiceCard
                    title='Indoor & Outdoor Advertising'
                    content="Should you advertise your company on a gigantic billboard
                    or put a sign up in a coffee shop?
                    
                    Your choice. 
                    
                    But who will notice it?
                    That's not a choice.
                    If the design is done right, everyone will."
                  />
                </div>
              </div>
              <div className='xl:space-y-[70px] '>
                <div className='mb-[70px] xl:mb-0'>
                  <ServiceCard
                    title='Sales Sheets'
                    content="A brochure doesn't quite cut it for you?

                    The product you’re selling is so extraordinary, you just need a bit more space to describe it.
                    
                    Sale sheets give you that space, 
                    on a single piece of paper."
                  />
                </div>
                <div className='mb-[70px] xl:mb-0'>
                  <ServiceCard
                    title='Posters'
                    content="Offline marketing isn't dead. It’s all around us.

                    A cleverly thought-out poster will catch anyone’s attention,
                    and leave them wanting to know more 
                    about your business or product.
                    
                    And the best part - your grandmother will see it too."
                  />
                </div>
              </div>
              <div className='xl:space-y-[70px]  md:col-start-2 xl:col-start-auto'>
                <div className='mb-[70px] xl:mb-0 md:mt-[-80px] xl:mt-0'>
                  <ServiceCard
                    title='Print Ads'
                    content="Imagine your company sells designer chairs.

                    Jane buys an interior design magazine
                    and sees the fabulously designed designer chair ad 
                    for your designer chair.
                    
                    Bingo.
                    
                    With print ads, the odds are always in your favor.
                    
                    Let's get your chair a Jane."
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

export default printdesign;

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
