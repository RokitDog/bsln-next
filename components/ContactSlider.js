import Image from 'next/image';
import React from 'react';

function ContactSlider({ imageSrc, content }) {
  return (
    <div className="h-[100%] w-[100%] flex lg:items-center justify-around p-[30px] md:p-[64px] point flex-col lg:flex-row py-[150px] lg:gap-x-[40px] space-y-[105px] lg:space-y-0">
      <article className="lg:flex-grow lg:shrink-0">
        <h3 className=" md:text-[72px] text-[28px] text-black leading-[1.13] max-w-[590px]">
          {content}
        </h3>
      </article>
      <Image
        src={imageSrc}
        alt="random"
        width="628"
        height="600"
        className="image"
        priority
      />
    </div>
  );
}

export default ContactSlider;
