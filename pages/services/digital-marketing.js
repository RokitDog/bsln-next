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

function digitalmarketing({ content }) {
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
                title='Digital Marketing'
                sub='Services'
                text="Everyone’s online. If your not using the opportunity to reach millions of potential clients in the era of unlimited connection, let's get you on that train ASAP. It's a heck of a ride!"
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
                    title='SEO'
                    content='They say the best place to hide a dead body is page two of Google. 

                    Let’s optimize your website, so clients can easily find you through Google search, without having to hire a private investigator.'
                  />
                </div>
                <div className='mb-[70px] xl:mb-0'>
                  <ServiceCard
                    title='Strategy'
                    content='Are you posting content inconsistently
                    and reaching no one?
                    
                    What you need is a plan of action:
                    what to post, where to post,
                    when to post, how often to post.
                    
                    With a proper Strategy, you will make stronger connections, and more
                    dollars in the bank.'
                  />
                </div>
              </div>
              <div className='xl:space-y-[70px] '>
                <div className='mb-[70px] xl:mb-0'>
                  <ServiceCard
                    title='Google Ad Campaigns'
                    content='Do you have a great product but have no idea how to reach potential customers?

                    With Google Ads and precise targeting,
                    we can get your message in front of millions interested in exactly
                    what you are selling.'
                  />
                </div>
                <div className='mb-[70px] xl:mb-0'>
                  <ServiceCard
                    title='SEO Copywriting'
                    content="SEO copywriting is basically just using the words SEO copywriting fifty times in an article about SEO copywriting.

                    Not exactly - it's writing in a way that will help Google understand you and put you on the front page, where you belong."
                  />
                </div>
              </div>
              <div className='xl:space-y-[70px]  md:col-start-2 xl:col-start-auto'>
                <div className='mb-[70px] xl:mb-0 md:mt-[-10px] xl:mt-0'>
                  <ServiceCard
                    title='Social Media'
                    content="Maybe your dad went door to door selling products. But you don't have to.

                    Sharing content has never been this easy, widespread or free. Seize the era of online connection - millions of potential customers are just a click away."
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

export default digitalmarketing;

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
