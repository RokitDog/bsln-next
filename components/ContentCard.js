import Link from 'next/link';
import React from 'react';

function ContentCard({ name, content, hoverText }) {
  return (
    <div className="xl:flex-[33%] lg:flex-shrink-0 lg:flex-grow-0 lg:max-w-[33%] mb-[45px]  translate-y-[50px] md:flex-[50%] lg:flex-[33%] relative  services-cards opacity-0">
      <div className="lg:m-[30px]">
        <div className="bg-[#EDEDED] lg:p-[30px] absolute left-0 top-0 w-[90%] rounded-[20px] opacity-0 invisible">
          <h4 className="font-medium text-[20px] md:text-[24px] mb-[20px]">
            {name}
          </h4>
          <p className="mb-[30px] text-[14px]">{hoverText}</p>
          <div className="space-y-[20px] flex flex-col">
            <Link href="/">
              <a className="text-[14px] underline">Learn More</a>
            </Link>
            <Link href="/">
              <a className="text-white text-[14px] bg-[#0f0f0f] rounded-full px-[15px] py-[10px] border border-[#0f0f0f] hover:bg-white hover:text-[#0f0f0f] transition-all duration-300 ease-out max-w-[108px]">
                Quick Start
              </a>
            </Link>
          </div>
        </div>
        <div className="">
          {' '}
          <h4 className="font-medium text-[20px] md:text-[24px] mb-[20px]">
            {name}
          </h4>
          <ul className="list-disc pl-[20px]  text-[15px] md:text-[18px] mb-[25px]">
            {content.map((item, i) => {
              return <li key={i}> {item}</li>;
            })}
          </ul>
          <div className="space-x-[20px] lg:hidden">
            <Link href="/">
              <a className="text-[14px] underline">Learn More</a>
            </Link>
            <Link href="/">
              <a className="text-white text-[14px] bg-[#0f0f0f] rounded-full px-[15px] py-[10px] border border-[#0f0f0f] hover:bg-white hover:text-[#0f0f0f] transition-all duration-300 ease-out">
                Quick Start
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentCard;
