import Image from 'next/image';
import React from 'react';

function Content({ content, paragraph, imageSrc, bigImageSrc, row, white }) {
  return (
    <div>
      <div className="grid grid-cols-2 gap-x-[110px] mb-[80px]">
        <div
          className={
            row
              ? 'flex flex-col justify-between'
              : 'flex flex-col justify-between col-start-2 col-end-3 row-start-1'
          }
        >
          <div>
            <h3
              className={
                white
                  ? 'text-[32px] tracking-[-1%] leading-[1.3] fadeIn-text text-white'
                  : 'text-[32px] tracking-[-1%] leading-[1.3] fadeIn-text'
              }
            >
              {content}
            </h3>
          </div>
          <div
            className={
              white
                ? 'leading-[1.375] text-white fadeIn-text'
                : 'leading-[1.375] text-[#7d7d7d] fadeIn-text'
            }
          >
            {paragraph}
          </div>
        </div>
        <Image
          src={imageSrc}
          alt="mockup"
          layout="responsive"
          width={730}
          objectFit="cover"
          className={
            row
              ? 'fadeIn-text  rounded-[10px]'
              : 'fadeIn-text col-start-1 col-end-1 row-start-1 row-end-2 rounded-[10px]'
          }
        />
      </div>
      {bigImageSrc && (
        <Image
          src={bigImageSrc}
          alt="mockup"
          layout="responsive"
          className="fadeIn-text"
        />
      )}
    </div>
  );
}

export default Content;
