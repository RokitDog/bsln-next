import React from 'react';
import Person from './Person';

function CardsStudio() {
  return (
    <div className="flex flex-wrap gap-x-[40px] gap-y-[60px] ">
      <Person
        name="Sava Marinkovic"
        position="CEO & Founder"
        image="/images/Qanya.jpg"
      />
      <Person
        name="Nenad Milicev"
        position="Front-End Developer"
        image="/images/Qanya.jpg"
      />
      <Person
        name="Milos Savuljic"
        position="Web & Graphic Designer"
        image="/images/Qanya.jpg"
      />
      <Person
        name="Milan Ciric"
        position="Motion & Graphic Designer"
        image="/images/Qanya.jpg"
      />
      <Person
        name="Nikola Popovic"
        position="Illustrator & Graphic Designer"
        image="/images/Qanya.jpg"
      />
      <Person
        name="Bojan Martinov"
        position="Front-End Developer"
        image="/images/Qanya.jpg"
      />
      <Person
        name="Lea Kurtek"
        position="Copywriter"
        image="/images/Qanya.jpg"
      />
    </div>
  );
}

export default CardsStudio;
