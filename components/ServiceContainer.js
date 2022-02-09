import React from 'react';
import ServiceCard from './ServiceCard';

function ServiceContainer({ content }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 mb-[200px]  lg:px-[50px] space-y-[80px] md:space-y-0 md:gap-x-[60px] lg:grid-cols-3">
      <div className="md:border-r space-y-[70px] md:mb-[70px] lg:mb-0">
        {content.map((item, i) => {
          return i <= 2 ? (
            <ServiceCard key={i} name={item.name} content={item.content} />
          ) : null;
        })}
      </div>
      <div className="lg:border-r space-y-[70px]">
        {content.map((item, i) => {
          return i > 2 && i <= 4 ? (
            <ServiceCard key={i} name={item.name} content={item.content} />
          ) : null;
        })}
      </div>
      <div className=" space-y-[70px] md:col-start-2 md:mt-[-400px!important] lg:col-start-auto lg:mt-[0!important]">
        {content.map((item, i) => {
          return i > 4 ? (
            <ServiceCard key={i} name={item.name} content={item.content} />
          ) : null;
        })}
      </div>
    </section>
  );
}

export default ServiceContainer;
