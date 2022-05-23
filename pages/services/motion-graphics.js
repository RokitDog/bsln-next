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

function Motiongraphics({ content }) {
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
          <section className='mb-[180px] md:mb-[150px] grid lg:grid-cols-2 2xl:gap-x-[200px]'>
            <div className='mt-[100px] lg:px-[50px] mb-[60px] max-w-[650px]'>
              <HeadingSingle
                title='Motion Graphics'
                sub='Services'
                text='We dare you not to look at a moving object. Impossible? Motion is mesmerizing. If you are trying to capture instant attention, animation is the way to go. Let’s move it!'
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
                    title='Logo Animation'
                    content="Afraid your logo will go unnoticed?

                    Let's add a subtle animation to it and see what happens. Even the slightest motion captures your eye. You can't help but look, can you?
                    
                    Your customers won't be able to either."
                  />
                </div>
                <div className='mb-[70px] xl:mb-0'>
                  <ServiceCard
                    title='Social Media Animations'
                    content="You’re scrolling.
                    It’s Instagram’s home page and a never ending stream of posts. Boring. Same.
                    
                    What's the thing that grabs your attention, finally? Movement. 
                    
                    With animation, your posts
                    will always be seen."
                  />
                </div>
              </div>
              <div className='xl:space-y-[70px] '>
                <div className='mb-[70px] xl:mb-0'>
                  <ServiceCard
                    title='Animations for Websites'
                    content="If you had to choose between browsing through a website that's completely static
                    and one that's interactive, interesting and alive, Which one would you prefer?
                    
                    Animation makes all the difference.
                    A website shouldn't just look great.
                    It should feel great as well."
                  />
                </div>
                <div className='mb-[70px] xl:mb-0'>
                  <ServiceCard
                    title='Explainer Video'
                    content='Explaining the concept of an explainer video would be contradictory to what the explainer video stands for, so go watch our explainer video for the explanation.'
                  />
                </div>
              </div>
              <div className='xl:space-y-[70px]  md:col-start-2 xl:col-start-auto'>
                <div className='mb-[70px] xl:mb-0 md:mt-[-10px] xl:mt-0'>
                  <ServiceCard
                    title='Animations for Ad Campaigns'
                    content='On a busy page full of colorful ads, 
                    which one do you notice:
                    
                    is it a static image of a toaster or the animated, dynamic version of bread flying out of that toaster over and over again?'
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

export default Motiongraphics;

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
