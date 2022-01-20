import Image from 'next/image';
import React from 'react';

function Card({ name, text, image }) {
  return (
    <div className="max-w-[400px] hover-js" data-image-src="view">
      <div className='overflow-hidden max-w-[400px] h-[450px] relative'>
      <Image src={image} layout='fill' className="rounded-[10px]" />
      </div>
      <div className="mt-[40px] flex items-start space-x-[30px]">
        <h5 className="font-medium text-[17px] md:text-[20px]">{name}</h5>
        <p className=" text-[14px] md:text-[16px] text-[#7D7D7D]">{text}</p>
      </div>
    </div>
  );
}

export default Card;
