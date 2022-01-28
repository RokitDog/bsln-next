import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import Twitter from '@material-ui/icons/Twitter';
import Instagram from '@material-ui/icons/Instagram';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-[1440px] lg:px-[150px] 2xl:px-0 mx-auto px-[30px] py-[100px] flex flex-col justify-between items-start md:flex-row">
        <ul className="space-y-[20px]">
          <li>
            <Link href="/work">
              <a className="footer-link">Work</a>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <a className="footer-link">Services</a>
            </Link>
          </li>
          <li>
            <Link href="/studio">
              <a className="footer-link">Studio</a>
            </Link>
          </li>
          <li>
            <Link href="/insights">
              <a className="footer-link">Insights</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className="footer-link">Contact</a>
            </Link>
          </li>
        </ul>
        <div className="grow-1 mt-[40px] md:mt-[100px]">
          <div className="space-x-[30px]">
            <Link href="#">
              <a>
                <FacebookIcon className="hover:scale-125 transition-transform duration-300 ease-out" />
              </a>
            </Link>
            <Link href="#">
              <a>
                <Twitter className="hover:scale-125 transition-transform duration-300 ease-out" />
              </a>
            </Link>
            <Link href="#">
              <a>
                <Instagram className="hover:scale-125 transition-transform duration-300 ease-out" />
              </a>
            </Link>
            <Link href="#">
              <a>
                <LinkedIn className="hover:scale-125 transition-transform duration-300 ease-out" />
              </a>
            </Link>
          </div>
          <div className="flex space-y-[10px] md:space-y-0 md:space-x-[50px] mt-[50px] flex-col md:flex-row">
            <div>
              <p className="text-[#7D7D7D] font-medium">United States</p>
              <a className="text-[#7D7D7D] header-links cursor-pointer">
                us@wearebaseline.com
              </a>
            </div>
            <div>
              <p className="text-[#7D7D7D] font-medium">Europe</p>
              <a className="text-[#7D7D7D] header-links cursor-pointer">
                europe@wearebaseline.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
