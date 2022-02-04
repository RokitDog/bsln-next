import Image from 'next/image';
import React from 'react';

function Sliders(props) {
  let movement;
  if (props.left) {
    movement = 'flex animate-left';
  } else if (props.left2) {
    movement = 'flex animate-left2';
  } else {
    movement = 'flex animate-right py-[50px]';
  }
  return (
    <div className="relative left-0 overflow-x-hidden">
      <div className={movement}>
        <div className="flex shrink-0 relative max-w-[350%] md:max-w-[100%]">
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
        <div className="flex shrink-0 relative max-w-[350%] md:max-w-[100%]">
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
        <div className="hidden md:flex shrink-0 relative max-w-[100%] ">
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
        <div className="hidden md:flex shrink-0 relative max-w-[100%] ">
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
