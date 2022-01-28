import Link from 'next/link';
import React from 'react';

function ContentCard({ name, content }) {
  return (
    <div className="xl:flex-[33%] lg:flex-shrink-0 lg:flex-grow-0 lg:max-w-[33%] mb-[80px] services-cards opacity-0 translate-y-[50px] md:flex-[50%] lg:flex-[33%]">
      <h4 className="font-medium text-[20px] md:text-[24px] mb-[20px]">
        {name}
      </h4>
      <ul className="list-disc pl-[16px]  text-[15px] md:text-[18px] mb-[25px]">
        {content.map((item, i) => {
          return <li key={i}> {item}</li>;
        })}
      </ul>
      <div className="space-x-[20px] lg:hidden">
        <Link href="/">
          <a className="text-[14px] underline">Learn More</a>
        </Link>
        <Link href="/">
          <a className="text-white text-[14px] bg-black rounded-full px-[15px] py-[10px] border border-black hover:bg-white hover:text-black transition-all duration-300 ease-out">
            Quick Start
          </a>
        </Link>
      </div>
    </div>
  );
}

export default ContentCard;
