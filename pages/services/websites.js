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

function Websites({ content }) {
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
                title='Websites'
                sub='Services'
                text='Your website is your best outfit for a first date.
                We can help you make an impression your visitors will remember, turning them into paying clients and customers, getting you a second date.'
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
                    title='UI/UX'
                    content="Ever feel like you’re playing an escape game when you're trying to navigate a website or an app?

                    Let’s put an end to user torture 
                    with UI and UX design."
                  />
                </div>
                <div className='mb-[70px] xl:mb-0'>
                  <ServiceCard
                    title='Online Store'
                    content="We all like to window shop without anyone staring over our shoulder. 
                    Preferably, in our underwear. 
                    
                    Whatever you're selling, give your customers freedom to buy it whenever, 
                    from wherever."
                  />
                </div>
                <div className='mb-[70px] xl:mb-0'>
                  <ServiceCard
                    title='Content Writing'
                    content="Suddenly, you find yourself opening an article with a random title like: 
                    What's the link between good branding 
                    and your grandmother's soup bowl?
                    
                    And you can't stop reading.
                    
                    You didn't care about the topic, but you even learn a thing or two.
                    
                    And you’re left wondering:
                    What is this wizardry?!
                    
                    It’s quality content writing.
                    And a bit of witchcraft, yes."
                  />
                </div>
              </div>
              <div className='xl:space-y-[70px] '>
                <div className='mb-[70px] xl:mb-0'>
                  <ServiceCard
                    title='Web Design'
                    content="Does a spider walk around begging flies to come?
                    No. He invests his time into making the greatest web he can.
                    Then all he has to do is wait.
                    
                    Let's build a web(site).
                    And catch (sorry, convert!) those visitors.
                    
                    Jokes aside.
                    With an impressive website, you will reach more customers, seem more professional, sell more products,
                    and live happily ever after."
                  />
                </div>
                <div className='mb-[70px] xl:mb-0'>
                  <ServiceCard
                    title='Front-end
                    Development'
                    content='Unplug from the Matrix for
                    a second, Neo.
                    
                    Do you ever think about how the websites you visit, the images and colors and text you see and interact with - are actually just long lines of code?
                    
                    Thanks to front-end development,
                    we see the beauty and the functionality,
                    not the zeros and ones.'
                  />
                </div>
              </div>
              <div className='xl:space-y-[70px] md:col-start-2 md:mt-[-130px] xl:mt-0 xl:col-start-auto'>
                <div className='mb-[70px] xl:mb-0'>
                  <ServiceCard
                    title='Landing Pages'
                    content='It’s all about first impressions. 

                    When your landing page cuts to the chase providing value, precise information and clear calls to
                    action - get ready to watch
                    users instantly convert.'
                  />
                </div>
                <div className='mb-[70px] xl:mb-0'>
                  <ServiceCard
                    title='Back-end
                    Development'
                    content="If your website is a performance in the theatre, back-end developers are the puppet masters that do the work behind the scenes. 

                    If a show goes smoothly, 
                    It's because the puppeteers have done their magic right."
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

export default Websites;

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
