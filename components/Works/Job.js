import React from 'react';

function Job({ jobs }) {
  return (
    <ul className="text-white font-medium text-[20px] leading-[1.5] fadeIn-text">
      {jobs.map((job, i) => {
        return <li key={i}>{job}</li>;
      })}
    </ul>
  );
}

export default Job;
