import React from 'react';

function SlickNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src="/images/right-arrow.jpg"></img>
    </div>
  );
}

export default SlickNextArrow;
