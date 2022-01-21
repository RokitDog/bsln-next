import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Cta() {
  return (
    <section className="bg-[#FDC52E] px-[30px] md:px-[150px] py-[100px] md:py-[65px] ">
      <div className="flex justify-between items-center max-w-[1440px] mx-auto">
        <div>
          <div>
            <h2 className="text-[46px] leading-[1.13] text-white tracking-[-1%] md:text-[72px] mb-[65px]">
              Your brands evolution <br /> starts here.
            </h2>
          </div>
          <div className="flex space-x-[60px] items-center">
            <p className="text-white text-[16px]">Have a project in mind?</p>
            <Link href="/contact">
              <a className="text-[16px] text-white bg-black rounded-full px-[15px] py-[10px] hover:bg-white hover:text-black transition ease-out duration-300">
                Lets get to work
              </a>
            </Link>
          </div>
        </div>
        <div>
          <Image src="/images/Sketch1.png" width={366} height={400.32} />
        </div>
      </div>
    </section>
  );
}

export default Cta;
