import React from 'react';
import Person from './Person';

function CardsStudio() {
  return (
    <div className="flex flex-wrap gap-x-[40px] gap-y-[60px] ">
      <Person
        name="Sava Marinkovic"
        position="CEO & Founder"
        image="/images/studio/Sava.jpg"
      />
      <Person
        name="Nenad Milicev"
        position="Front-End Developer"
        image="/images/studio/Nenad.jpg"
      />
      <Person
        name="Milos Savuljic"
        position="Web & Graphic Designer"
        image="/images/studio/Milos.jpg"
      />
      <Person
        name="Milan Ciric"
        position="Motion & Graphic Designer"
        image="/images/studio/Milan.jpg"
      />
      <Person
        name="Nikola Popovic"
        position="Illustrator & Graphic Designer"
        image="/images/studio/Nikola.jpg"
      />
      <Person
        name="Bojan Martinov"
        position="Front-End Developer"
        image="/images/studio/Bojan.jpg"
      />
      <Person
        name="Lea Kurtek"
        position="Copywriter"
        image="/images/studio/Lea.jpg"
      />
      <Person
        name="Ognjen"
        position="SEO Specialist"
        image="/images/studio/Sava.jpg"
      />
      <Person
        name="Petar"
        position="Graphic Designer"
        image="/images/studio/Sava.jpg"
      />
    </div>
  );
}

export default CardsStudio;
