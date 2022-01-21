import { ListSharp } from '@material-ui/icons';
import React from 'react';

function ServiceBox({ title, content, list, numberOfItems }) {
  return (
    <div
      className="hover-js border-t border-[#7D7D7D] pl-[80px] pt-[60px] pb-[100px] flex space-x-[220px] items-cente hover:opacity-50 transition duration-300"
      data-image-src="view"
    >
      <div>
        <h3 className="font-medium text-[26px] md:text-[32px] mb-[20px]">
          {title}
        </h3>
        <p className="max-w-[370px]">{content}</p>
      </div>
      <div className="flex justify-between grow ">
        <div className="flex-[50]">
          <ul className="list-disc space-y-[5px] text-[15px] md:text-[20px]">
            {list.map((item, i) => {
              return i < numberOfItems ? <li key={i}> {item}</li> : null;
            })}
          </ul>
        </div>
        <div className="flex-[50]">
          <ul className="list-disc space-y-[5px] text-[15px] md:text-[20px]">
            {list.map((item, i) => {
              return i >= numberOfItems ? <li key={i}> {item}</li> : null;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ServiceBox;
