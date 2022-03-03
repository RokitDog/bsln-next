import Image from 'next/image';
import React from 'react';

function Person({ name, position, image }) {
  return (
    <div className="max-w-[290px] team-cards opacity-0 translate-y-[50px]">
      {image ? (
        <Image
          src={image}
          width={290}
          height={370}
          className="rounded-[10px] mb-[20px]"
          alt="person image"
        />
      ) : (
        <div className="w-[290px] h-[370px] border border-dashed rounded-[10px] border-[#7D7D7D] mb-[20px]"></div>
      )}
      <div className="flex items-center justify-between">
        <div>
          <h5 className="text-[white] font-medium text-[17px] md:text-[20px]">
            {name}
          </h5>
          <p className="text-[#7d7d7d] text-[14px] md:text-[16px]">
            {position}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Person;
