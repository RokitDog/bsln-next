import React from 'react';

function CursorBody() {
  return (
    <div className="cursor fixed top-0 left-0 z-[99999] pointer-events-none  before:content-[''] before:absolute before:top-[-24px] before:left-[-24px] before:block before:w-[48px] before:h-[48px] before:scale-[0.2] before:bg-[#0f0f0f] before:rounded-full hidden lg:block">
      <div className="cursor-media block w-[350px] h-[350px] overflow-hidden rounded-full scale-0 mt-[-175px] ml-[-175px] relative">
        <img
          src="/images/view.svg"
          alt="view"
          id="view"
          className="w-[100%] h-[100%] object-cover absolute block"
        />
        <img
          src="/images/drag.svg"
          alt="drag"
          id="drag"
          className="w-[100%]  h-[100%] object-cover absolute block"
        />
      </div>
    </div>
  );
}

export default CursorBody;
