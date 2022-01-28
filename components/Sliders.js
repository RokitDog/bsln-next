import Image from 'next/image';
import React from 'react';

function Sliders(props) {
  return (
    <div className="relative left-0 overflow-x-hidden">
      <div
        className={
          props.left ? 'animate-left flex ' : 'flex animate-right my-[50px]'
        }
      >
        <div className="flex space-x-[70px] shrink-0 relative  w-[500%] md:w-[300%] lg:w-[initial]">
          <Image src="/images/sliderImages/6.svg" width={200} height={100} />
          <Image src="/images/sliderImages/7.svg" width={200} height={100} />
          <Image src="/images/sliderImages/8.svg" width={200} height={100} />
          <Image src="/images/sliderImages/9.svg" width={200} height={100} />
          <Image src="/images/sliderImages/10.svg" width={200} height={100} />
          <Image src="/images/sliderImages/11.svg" width={200} height={100} />
          <Image src="/images/sliderImages/12.svg" width={200} height={100} />
          <Image src="/images/sliderImages/13.svg" width={200} height={100} />
          <Image src="/images/sliderImages/14.svg" width={200} height={100} />
          <Image src="/images/sliderImages/15.svg" width={200} height={100} />
          <Image src="/images/sliderImages/7.svg" width={200} height={100} />
          <Image src="/images/sliderImages/8.svg" width={200} height={100} />
          <Image src="/images/sliderImages/9.svg" width={200} height={100} />
          <Image src="/images/sliderImages/10.svg" width={200} height={100} />
          <Image src="/images/sliderImages/11.svg" width={200} height={100} />
          <Image src="/images/sliderImages/12.svg" width={200} height={100} />
          <Image src="/images/sliderImages/13.svg" width={200} height={100} />
          <Image src="/images/sliderImages/14.svg" width={200} height={100} />
          <Image src="/images/sliderImages/15.svg" width={200} height={100} />
        </div>
        <div className="flex space-x-[70px] shrink-0 relative w-[500%] md:w-[300%] lg:w-[initial]">
          <Image src="/images/sliderImages/6.svg" width={200} height={100} />
          <Image src="/images/sliderImages/7.svg" width={200} height={100} />
          <Image src="/images/sliderImages/8.svg" width={200} height={100} />
          <Image src="/images/sliderImages/9.svg" width={200} height={100} />
          <Image src="/images/sliderImages/10.svg" width={200} height={100} />
          <Image src="/images/sliderImages/11.svg" width={200} height={100} />
          <Image src="/images/sliderImages/12.svg" width={200} height={100} />
          <Image src="/images/sliderImages/13.svg" width={200} height={100} />
          <Image src="/images/sliderImages/14.svg" width={200} height={100} />
          <Image src="/images/sliderImages/15.svg" width={200} height={100} />
          <Image src="/images/sliderImages/6.svg" width={200} height={100} />
          <Image src="/images/sliderImages/7.svg" width={200} height={100} />
          <Image src="/images/sliderImages/8.svg" width={200} height={100} />
          <Image src="/images/sliderImages/9.svg" width={200} height={100} />
          <Image src="/images/sliderImages/10.svg" width={200} height={100} />
          <Image src="/images/sliderImages/11.svg" width={200} height={100} />
          <Image src="/images/sliderImages/12.svg" width={200} height={100} />
          <Image src="/images/sliderImages/13.svg" width={200} height={100} />
          <Image src="/images/sliderImages/14.svg" width={200} height={100} />
          <Image src="/images/sliderImages/15.svg" width={200} height={100} />
        </div>
      </div>
    </div>
  );
}

export default Sliders;
