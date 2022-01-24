import React from 'react';
import Person from './Person';

function CardsStudio() {
  return (
    <div className="flex flex-wrap gap-x-[40px] gap-y-[60px] ">
      <Person
        name="Sava Marinkovic"
        position="CEO & Founder"
        linkedIn="#"
        instagram="#"
        image="/images/Qanya.jpg"
      />
      <Person
        name="Nenad Milicev"
        position="Front-End Developer"
        linkedIn="#"
        instagram="#"
        image="/images/Qanya.jpg"
      />
      <Person
        name="Miloš Savuljic"
        position="Web & Graphic Designer"
        linkedIn="#"
        instagram="#"
        image="/images/Qanya.jpg"
      />
      <Person
        name="Milan Ciric"
        position="Motion & Graphic Designer"
        linkedIn="#"
        instagram="#"
        image="/images/Qanya.jpg"
      />
      <Person
        name="Nikola Popovic"
        position="Illustrator & Graphic Designer"
        linkedIn="#"
        instagram="#"
        image="/images/Qanya.jpg"
      />
      <Person
        name="Bojan Martinov"
        position="Front'End Developer"
        linkedIn="#"
        instagram="#"
        image="/images/Qanya.jpg"
      />
      <Person
        name="Lea Kurtek"
        position="Copywriter"
        linkedIn="#"
        instagram="#"
        image="/images/Qanya.jpg"
      />
      <Person name="Your Name" position="Position" />
    </div>
  );
}

export default CardsStudio;
