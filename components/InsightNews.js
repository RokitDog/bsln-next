import React, { useEffect, useRef, useState } from 'react';
import InsightCard from './InsightCard';
import { imagesJSON } from './blogArray';
import { gsap } from 'gsap';
import { Cursor } from './Cursor';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

function InsightNews() {
  const [blogs, setBlogs] = useState(8);
  const tl = gsap.timeline();
  const [anim, setAnim] = useState();

  useEffect(() => {
    setTimeout(() => {
      tl.to('.insight-card', {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: {
          amount: 0.5,
        },
      });
    }, 1);
    if (window.innerWidth > 1024) {
      Cursor();
    }
  }, [anim]);

  return (
    <div className=" max-w-[1600px] mx-auto px-[30px] md:px-[50px]  pb-[100px] md:pb-[150px] ">
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 1024: 3, 1280: 4 }}
      >
        <Masonry gutter="40px">
          {imagesJSON.map(
            (image, i) =>
              i < blogs && (
                <InsightCard
                  key={i}
                  image={image.image}
                  date={image.date}
                  heading={image.heading}
                  content={image.content}
                />
              )
          )}
        </Masonry>
      </ResponsiveMasonry>
      <div className="flex justify-center mt-[70px] md:mt-[100px] transition-all duration-500">
        {blogs < imagesJSON.length && (
          <button
            className="text-[14px] md:text-[16px] border-[0.5px] border-[#0f0f0f] rounded-full px-[15px] py-[10px] hover:bg-[#0f0f0f] hover:text-white transition-all ease-out duration-300"
            onClick={() => {
              setBlogs(blogs + 4);
              tl.play();
              setAnim(!anim);
            }}
          >
            See more insights
          </button>
        )}
      </div>
    </div>
  );
}

export default InsightNews;
