import React, { useEffect } from 'react';
import { Cursor } from '../components/Cursor';
import CursorBody from '../components/CursorBody';

function work() {

  useEffect(() => {
    Cursor()
  }, []);

  return (
    <div className="px-[80px]">
      <h1>This is Work Page</h1>
      <CursorBody />

    </div>
  );
}

export default work;
