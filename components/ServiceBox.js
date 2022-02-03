import Link from 'next/link';
import React from 'react';

function ServiceBox({ title, content, list, numberOfItems, link }) {
  return (
    <div className="border-t border-[#7D7D7D] pl-[0] md:pl-[50px] lg:pl-[80px] pt-[60px] pb-[100px] transition-all duration-300">
      <div
        className="hover-js flex xl:space-x-[220px] flex-col xl:flex-row xl:items-center  transition duration-300 space-y-[20px] xl:space-y-[0px]"
        data-image-src="view"
      >
        <div>
          <h3 className="font-medium text-[26px] md:text-[32px] mb-[20px]">
            {title}
          </h3>
          <p className="lg:max-w-[370px]">{content}</p>
        </div>
        <div className="flex justify-between grow pl-[15px] xl:pl-[0] flex-col md:flex-row space-y-[5px] md:space-y-[0]">
          <div className="flex-[50]">
            <ul className="font-medium space-y-[5px] xl:space-y-[15px] text-[15px] md:text-[20px] list-disc xl:list-none">
              {list.map((item, i) => {
                return i < numberOfItems ? <li key={i}> {item}</li> : null;
              })}
            </ul>
          </div>
          <div className="flex-[50]">
            <ul className="font-medium space-y-[5px] xl:space-y-[15px] text-[15px] md:text-[20px] list-disc xl:list-none">
              {list.map((item, i) => {
                return i >= numberOfItems ? <li key={i}> {item}</li> : null;
              })}
            </ul>
          </div>
        </div>
        <div className="underline text-[14px] md:text-[16px] lg:hidden mt-[30px]">
          <Link href={link}>
            <a>Learn More</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServiceBox;
