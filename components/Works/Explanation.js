import React from 'react';

function Explanation({ text }) {
  return (
    <>
      {text ? (
        <div className="max-w-[440px]">
          <p className="text-[32px] tracking-[-1%] leading-[1.3] fadeIn-text">
            {text}
          </p>
        </div>
      ) : null}
    </>
  );
}

export default Explanation;
