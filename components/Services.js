import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { gsap, Power2 } from 'gsap';
import ContentCard from './ContentCard';
import { useRouter } from 'next/router';

function Services() {
  const [ref, inView, entry] = useInView({
    threshold: 0.25,
  });

  if (inView) {
    const fadeInAnimation = gsap.to(entry.target, {
      y: 50,
      duration: 1.3,
      opacity: 1,
      ease: Power2.easeOut,
    });
  }

  useEffect(() => {
    const texts = gsap.utils.toArray('.services-cards');
    if (inView) {
      gsap.to('.services-cards', 1.3, {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: {
          amount: 1,
        },
      });
    }
  }, [inView]);

  const items1 = [
    'Logo Design',
    'Corporate Identity',
    'Brand Standards',
    'Branding & Re-Branding',
    'Illustrations',
    'Packaging Design',
    'Copywriting',
  ];
  const items2 = [
    'Brochures',
    'Catalogues',
    'Sale Sheets',
    'Print Ads',
    'Indoor & Outdoor Ads',
    'Posters',
  ];
  const items3 = [
    'UI/UX',
    'Web Design',
    'Landing Pages',
    'Online Store',
    'Front-end Development',
    'Back-end Development',
    'Content Writing',
  ];
  const items4 = [
    'SEO',
    'Strategy',
    'Google Ad Campaigns',
    'Social Media',
    'SEO Copywriting',
  ];
  const items5 = [
    'Logo Animation',
    'Animations for Website',
    'Animations for Ad Campaign',
    'Social Media Animations',
    'Explainer Videos',
  ];
  const router = useRouter().pathname;

  return (
    <section className="bg-[#F3F3F3] rounded-[40px] px-[30px] md:px-[50px]  py-[60px] lg:py-[160px]">
      <div className=" xl:space-x-[140px] xl:flex max-w-[1600px] mx-auto">
        <div className="xl:flex-[25%] xl:flex-grow-0 xl:flex-shrink-0">
          <div ref={ref} className="opacity-0 translate-y-60">
            <p className="text-[10px] md:text-[14px] text-[#7D7D7D] font-medium">
              Services
            </p>
            <div>
              <h2 className="text-[30px] leading-[1.13] tracking-[-0.01rem] mt-[20px] md:mt-[40px] md:text-[32px] mb-[30px] text-[#0f0f0f]">
                Helping business <br />
                grow and brands <br /> evolve since 2008
              </h2>
            </div>
          </div>
        </div>
        <div className="xl:flex-[75%] xl:flex-grow-1 xl:flex-shrink-1 flex flex-col md:flex-row md:flex-wrap pt-[70px] xl:pt-[0]">
          <ContentCard
            name="Branding"
            content={items1}
            hoverText="Being the unique black sheep in a herd of white should be the biggest aspiration when it comes to forming an authentic brand that your customers will remember,  and want to come baa-ck to."
          />
          <ContentCard
            name="Print Design"
            content={items2}
            hoverText="Offline marketing isn't dead. Unlike in the case of digital advertising, printed ads can be converted into paper planes after they’ve completed their mission!"
          />
          <ContentCard
            name="Websites"
            content={items3}
            hoverText="Your website is your best outfit for a first date. We can help you make an impression your visitors will remember, turning them into paying clients and customers, getting you a second date."
          />
          <ContentCard
            name="Digital Marketing"
            content={items4}
            hoverText="Everyone’s online. If your not using the opportunity to reach millions of potential clients in the era of unlimited connection, let's get you on that train ASAP. It's a heck of a ride!"
          />
          <ContentCard
            name="Motion Graphics"
            content={items5}
            hoverText="We dare you not to look at a moving object. Impossible? Motion is mesmerizing. If you are trying to capture instant attention, animation is the way to go. Let’s move it!"
          />
        </div>
      </div>
    </section>
  );
}

export default Services;
