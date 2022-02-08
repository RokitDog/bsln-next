import React from 'react';

function Problem({ text }) {
  return (
    <p className="text-white leading-[1.375] max-w-[400px] fadeIn-text">
      {text}
    </p>
  );
}

export default Problem;
