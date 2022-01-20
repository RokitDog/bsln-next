import React, { useEffect } from 'react';

function ContentCard({ name, content }) {
  return (
    <div className="flex-[33%] flex-shrink-0 flex-grow-0 max-w-[33%] mb-[80px] services-cards opacity-0 translate-y-[50px]">
      <h4 className="font-medium text-[20px] md:text-[24px] mb-[20px]">
        {name}
      </h4>
      <ul className="list-disc pl-[16px]  text-[15px] md:text-[18px] ">
        {content.map((item, i) => {
          return <li key={i}> {item}</li>;
        })}
      </ul>
    </div>
  );
}

export default ContentCard;
