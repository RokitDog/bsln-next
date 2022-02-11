import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Cta() {
  return (
    <section className="bg-[#FDC52E] px-[30px] md:px-[50px] lg:px-[150px] py-[100px] md:py-[65px] ">
      <div className="flex flex-col  max-w-[1600px] mx-auto lg:flex-row lg:justify-between">
        <div className="flex flex-col items-center md:items-start">
          <div>
            <h2 className="max-w-[770px] text-[46px] leading-[1.13] text-white tracking-[-1%] md:text-[72px] mb-[50px] md:mb-[65px]">
              Your brands evolution starts here.
            </h2>
          </div>
          <div className="mb-[50px] lg:hidden">
            <Image
              src="/images/Sketch2.png"
              width={259}
              height={295}
              alt="illustration"
            />
          </div>
          <div className="flex justify-between w-full md:w-[initial] md:space-x-[60px] items-center">
            <p className="text-white text-[14px] md:text-[16px]">
              Have a project in mind?
            </p>

            <Link href="/contact">
              <a className="text-[14px] md:text-[16px] text-white bg-[#0f0f0f] rounded-full px-[15px] py-[10px] hover:bg-white hover:text-[#0f0f0f] transition ease-out duration-300 border border-black">
                Let's get to work
              </a>
            </Link>
          </div>
        </div>
        <div className="hidden lg:block">
          <Image
            src="/images/Sketch1.png"
            width={366}
            height={400.32}
            alt="illustration"
          />
        </div>
      </div>
    </section>
  );
}

export default Cta;
