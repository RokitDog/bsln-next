import Image from 'next/image';
import React from 'react';

function InsightCard({ image, date, heading, content }) {
  return (
    <div
      className="max-w-[100%] opacity-0 translate-y-[50px] insight-card hover-js transition-all duration-300 ease-out  justify-self-center pb-[88px]"
      data-image-src="view"
      id="insight-card-id"
    >
      <div className="mb-[10px]">
        <Image
          src={image}
          alt="insightImage"
          className=" rounded-[10px]"
          layout="responsive"
          width={290}
          height={290}
          objectFit="cover"
        />
      </div>
      <p className="text-[#7D7D7D] text-[10px] mb-[10px]">{date}</p>
      <h5 className="font-medium text-[17px] md:text-[20px] leading-[1.13] mb-[15px] md:mb-[20px] ">
        {heading}
      </h5>
      <p className="text-[#7D7D7D] leading-[1.3] text-[14px] md:text-[16px]">
        {content}
      </p>
    </div>
  );
}

export default InsightCard;
