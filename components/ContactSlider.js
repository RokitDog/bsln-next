import Image from 'next/image';
import React from 'react';

function ContactSlider({ imageSrc, content }) {
  return (
    <div className="h-[calc(100vh-100px)] w-[100%] flex items-center justify-between p-[64px] point gap-x-[100px]">
      <article className="flex-grow shrink-0">
        <h3 className=" md:text-[72px] text-[46px] text-black leading-[1.13] max-w-[590px]">
          {content}
        </h3>
      </article>
      <Image
        src={imageSrc}
        alt="random"
        width="628"
        height="600"
        className="image"
      />
    </div>
  );
}

export default ContactSlider;
