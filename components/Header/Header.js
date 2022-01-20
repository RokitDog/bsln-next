import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import logoImage from '../../public/baseline-logo.svg';
import Link from 'next/link';

function Header() {
  return (
    <header className="h-[100px] flex justify-between items-center max-w-[1440px] mx-auto  px-[80px]">
      <div className="w-[93px]">
        <Link href="/">
          <a>
            <Image
              src={logoImage}
              alt="logo"
              className="cursor-pointer"
              priority
            />
          </a>
        </Link>
      </div>
      <nav>
        <ul className="flex space-x-[40px] text-[16px]">
          <li>
            <Link href="/work">
              <a className="header-links">Work</a>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <a className="header-links">Services</a>
            </Link>
          </li>
          <li>
            <Link href="/studio">
              <a className="header-links">Studio</a>
            </Link>
          </li>
          <li>
            <Link href="/insights">
              <a className="header-links">Insights</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className="header-links">Contact</a>
            </Link>
          </li>
          <li>
            <Link href="/starthere">
              <a className="px-[15px] py-[10px] bg-[#0F0F0F] rounded-3xl text-white">
                Start here
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
