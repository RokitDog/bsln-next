import React, { useEffect, useState } from 'react';
import Card from '../Card';

function Blogs() {
  const cards = [
    {
      render: false,
      name: 'Nestlé',
      text: 'Cursus id volutpat eleifend id quis in natoque velit. Integer risus adipiscing sed platea quis platea a purus consectetur.',
      image: '/images/Nestle.jpg',
      link: '/work/nestle',
      href: 'nestle',
    },
    {
      render: false,
      name: 'Luv Michael',
      text: 'Cursus id volutpat eleifend id quis in natoque velit. Integer risus adipiscing sed platea quis platea a purus consectetur.',
      image: '/images/luv Michael.jpg',
      link: '/work/luv-michael',
      href: 'luv-michael',
    },
    {
      render: false,
      name: 'FinSource Accounting',
      text: 'Laoreet amet nec et varius leo, sollicitudin aliquet suspendisse tristique. Faucibus lobortis potenti et tortor sed in magnis velit ac.',
      image: '/images/FinSource.jpg',
      link: '/work/finsource',
      href: 'finsource',
    },
    {
      render: false,
      name: 'Mihano Momosa',
      text: 'Nisl diam sed porttitor amet ullamcorper velit enim, faucibus sed.',
      image: '/images/Mihano Momosa.jpg',
      link: '/work/mihano-momosa',
      href: 'mihano-momosa',
    },
    {
      render: false,
      name: 'FC Jedinstvo Gospodjinci',
      text: 'Nisl diam sed porttitor amet ullamcorper velit enim, faucibus sed.',
      image: '/images/fcjedinstvo/Mockup.jpg',
      link: '/work/fc-jedinstvo-gospodjinci',
      href: 'fc-jedinstvo-gospodjinci',
    },
    {
      render: false,
      name: 'Hecker Construction',
      text: 'Nisl diam sed porttitor amet ullamcorper velit enim, faucibus sed.',
      image: '/images/HeckerHome.jpg',
      link: '/work/hecker-construction',
      href: 'hecker-construction',
    },
  ];
  const [blogCards, setBlogCards] = useState();

  useEffect(() => {
    const currentLocation = window.location.href.split('/');
    const length = currentLocation.length;
    const location = currentLocation[length - 1];

    const randomNumbers = [];
    while (randomNumbers.length < 3) {
      let random = Math.floor(Math.random() * 5);
      if (randomNumbers.indexOf(random) === -1) {
        randomNumbers.push(random);
      }
    }
    cards.forEach((card, i) => {
      if (card.href.match(location)) {
        cards.splice(i, 1);
      }
    });
    randomNumbers.forEach((number) => {
      cards[number].render = true;
    });
    setBlogCards(cards);
  }, []);

  return (
    <section className="grid grid-cols-3 gap-x-[40px] pt-[100px] pb-[230px]">
      {blogCards?.map((card, i) => {
        if (card.render) {
          return (
            <Card
              key={i}
              name={card.name}
              text={card.text}
              image={card.image}
              link={card.link}
            />
          );
        }
      })}
    </section>
  );
}

export default Blogs;
