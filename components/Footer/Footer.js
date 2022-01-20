import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import Twitter from '@material-ui/icons/Twitter';
import Instagram from '@material-ui/icons/Instagram';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-[1440px] mx-auto py-[100px] flex justify-between items-center">
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
        <div className="grow-1 mt-[100px]">
          <div className="space-x-[30px]">
            <Link href="#">
              <a>
                <FacebookIcon />
              </a>
            </Link>
            <Link href="#">
              <a>
                <Twitter />
              </a>
            </Link>
            <Link href="#">
              <a>
                <Instagram />
              </a>
            </Link>
            <Link href="#">
              <a>
                <LinkedIn />
              </a>
            </Link>
          </div>
          <div className="flex space-x-[50px] mt-[50px]">
            <div>
              <p className="text-[#7D7D7D] font-medium">United States</p>
              <a className="text-[#7D7D7D]">us@wearebaseline.com</a>
            </div>
            <div>
              <p className="text-[#7D7D7D] font-medium">Europe</p>
              <a className="text-[#7D7D7D]">europe@wearebaseline.com</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
