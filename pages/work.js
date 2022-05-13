import React, { useEffect } from 'react';
import { Cursor } from '../components/Cursor';
import CursorBody from '../components/CursorBody';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { gsap } from 'gsap';
import Cta from '../components/Cta';
import CardsWork from '../components/CardsWork';
import { sanityClient } from '../sanity';
gsap.registerPlugin(ScrollTrigger);

function work({ content }) {
  const data = content[0];
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

  return (
    <div>
      <main>
        <div className='max-w-[1600px] mx-auto px-[30px] md:px-[50px] '>
          <div className='mt-[100px]'>
            <CardsWork />
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

export default work;

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
