import React from 'react';

function ServiceCard({ name, content }) {
  return (
    <div className="md:max-w-[300px] border-t pt-[40px] md:pt-0  md:border-t-0">
      <div className="">
        <div>
          <h3 className="text-[26px] md:text-[32px] mb-[20px]">{name}</h3>
          <p className=" text-[#7d7d7d]">{content}</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
