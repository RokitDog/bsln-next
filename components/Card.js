import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Card({ name, text, image, link }) {
  return (
    <Link href={link}>
      <a>
        <div className="w-[100%] hover-js" data-image-src="view">
          <div className="">
            <Image
              src={image}
              layout="responsive"
              className="rounded-[10px]"
              objectFit="cover"
              width={400}
              height={450}
              priority
              alt="logoimage"
            />
          </div>
          <div className="mt-[40px] flex items-start space-x-[30px]">
            <h5 className="font-medium text-[17px] md:text-[20px] leading-[1.22] ">
              {name}
            </h5>
            <p className=" text-[14px] md:text-[16px] text-[#7D7D7D] leading-[1.375]">
              {text}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default Card;
