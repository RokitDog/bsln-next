import Image from 'next/image';
import React from 'react';

function ProcessSection({ imageSrc, content }) {
  return (
    <div className="h-[100vh] w-[100%] flex items-center justify-around p-[64px] point">
      <Image
        src={imageSrc}
        alt="random"
        width="628.4"
        height="438.8"
        className="image"
      />
      <article>
        <h3 className=" md:text-[32px] text-[26px] text-white leading-[1.13] max-w-[450px]">
          {content}
        </h3>
      </article>
    </div>
  );
}

export default ProcessSection;
