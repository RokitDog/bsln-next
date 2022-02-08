import React from 'react';
import Card from '../Card';

function Blogs() {
  return (
    <section className="grid grid-cols-3 gap-x-[40px] pt-[100px] pb-[230px]">
      <Card
        name="Nestlé"
        text="Cursus id volutpat eleifend id quis in natoque velit. Integer risus adipiscing sed platea quis platea a purus consectetur."
        image="/images/Nestle.jpg"
        link="/work/nestle"
      />
      <Card
        name="Luv Michael"
        text="Vitae, massa rhoncus ac velit in ac cras. Suspendisse facilisis eget arcu vestibulum lacus, faucibus."
        image="/images/luv Michael.jpg"
        link="/work/luv-michael"
      />
      <Card
        name="Mihano Momosa"
        text="Nisl diam sed porttitor amet ullamcorper velit enim, faucibus sed."
        image="/images/Mihano Momosa-alt.jpg"
        link="/work/mihano-momosa"
      />
    </section>
  );
}

export default Blogs;
