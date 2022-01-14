import React from 'react';

function SlickPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src="/images/left-arrow.svg"></img>
    </div>
  );
}

export default SlickPrevArrow;
