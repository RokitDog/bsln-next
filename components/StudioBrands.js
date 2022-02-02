import Image from 'next/image';
import React from 'react';

const images = [];
for (let i = 0; i <= 46; i++) {
  images.push(`/images/sliderImages/${i}.svg`);
}

function StudioBrands() {
  return (
    <div className="flex flex-wrap px-[15px] md:px-[80px] justify-around md:justify-start gap-y-[40px] mx-auto max-w-[1600px] md:gap-x-[70px]">
      {images.map((image) => (
        <Image key={image} src={image} width={200} height={100} />
      ))}
    </div>
  );
}

export default StudioBrands;
