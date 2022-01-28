import React, { useEffect } from 'react';
import { Cursor } from '../components/Cursor';
import CursorBody from '../components/CursorBody';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { gsap } from 'gsap';
import Cta from '../components/Cta';
import CardsWork from '../components/CardsWork';
gsap.registerPlugin(ScrollTrigger);

function work() {
  useEffect(() => {
    if (window.innerWidth > 1024) {
      Cursor();
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
      <main>
        <div className="max-w-[1440px] mx-auto px-[80px]">
          <div className="mt-[100px]">
            <CardsWork />
          </div>
        </div>
        <Cta />
      </main>
      <CursorBody />
    </div>
  );
}

export default work;
