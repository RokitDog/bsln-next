import React, { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { gsap } from 'gsap';
import { Cursor } from '../components/Cursor';
import HeadingSingle from '../components/HeadingSingle';
import CursorBody from '../components/CursorBody';
import InsightNews from '../components/InsightNews';
gsap.registerPlugin(ScrollTrigger);

function insights() {
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
        <div className="max-w-[1600px] mx-auto px-[30px] md:px-[50px] lg:px-[80px] mb-[100px]">
          <div className="mt-[100px] md:px-[50px] lg:px-[80px] max-w-[950px]">
            <HeadingSingle
              title="All of our latest updates, faces and stories from across our network."
              sub="Insights"
            />
          </div>
        </div>
        <section className="bg-[#f3f3f3] rounded-[40px] pt-[70px] md:pt-[100px]">
          <InsightNews />
        </section>
      </main>
      <CursorBody />
    </div>
  );
}

export default insights;
