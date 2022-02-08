import Image from 'next/image';
import React from 'react';

function Content({ content, paragraph, imageSrc, bigImageSrc }) {
  return (
    <div>
      <div className="grid grid-cols-2 gap-x-[110px] mb-[80px]">
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-[32px] tracking-[-1%] leading-[1.3] fadeIn-text">
              {content}
            </h3>
          </div>
          <div className="leading-[1.375] text-[#7d7d7d] fadeIn-text">
            {paragraph}
          </div>
        </div>
        <Image src={imageSrc} alt="mockup" className="fadeIn-text" />
      </div>
      <Image
        src={bigImageSrc}
        alt="mockup"
        layout="responsive"
        className="fadeIn-text"
      />
    </div>
  );
}

export default Content;
