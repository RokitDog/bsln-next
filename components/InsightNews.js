import React from 'react';
import InsightCard from './InsightCard';
import { imagesJSON } from './blogArray';

function InsightNews() {
  return (
    <div className=" max-w-[1440px] mx-auto px-[80px] pb-[100px] md:pb-[150px]">
      <div className="flex flex-wrap gap-y-[88px] justify-between ">
        {imagesJSON.map((image, i) => (
          <InsightCard
            key={i}
            image={image.image}
            date={image.date}
            heading={image.heading}
            content={image.content}
          />
        ))}
      </div>
      <div className="flex justify-center mt-[70px] md:mt-[100px]">
        <button className="text-[14px] md:text-[16px] border-[0.5px] border-[#0f0f0f] rounded-full px-[15px] py-[10px] hover:bg-black hover:text-white transition ease-out duration-300">
          Check our our favourite projects
        </button>
      </div>
    </div>
  );
}

export default InsightNews;
