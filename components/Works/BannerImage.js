import Image from 'next/image';
import React from 'react';
import { gsap, Power4 } from 'gsap';
import { useEffect } from 'react';

function BannerImage({ imageSrc }) {
  useEffect(() => {
    const anim = gsap.from('.workBanner', {
      scale: 1.2,
      duration: 0.5,
      ease: Power4.easeInOut,
    });

    return () => {
      anim.kill();
    };
  }, []);
  return (
    <div className="workBannerParrent rounded-[10px] overflow-hidden">
      <Image
        src={imageSrc}
        width={1500}
        height={750}
        layout="responsive"
        alt="bannerImg"
        className="workBanner absolute rounded-[10px]"
        priority
      />
    </div>
  );
}

export default BannerImage;
