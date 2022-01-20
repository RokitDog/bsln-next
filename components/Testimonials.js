import React from 'react';
import Image from 'next/image';

function Testimonials({ text, image, name, org }) {
  return (
    <section className="flex justify-center">
      <div className=" max-w-[1140px]">
        <h2 className="text-[26px] md:text-[42px] tracking-[-1%] mb-[42.5px] md:mb-[63px] leading-[1.14]">
          {text}
        </h2>
        <div className="flex space-x-[15px]">
          <div>
            <Image
              src={image}
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>
          <div>
            <p className="text-[16px] text-[#7d7d7d] ">
              {name}
              <br />
              <span className=" text-black">{org}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
