import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import Twitter from '@material-ui/icons/Twitter';
import Instagram from '@material-ui/icons/Instagram';
import LinkedIn from '@material-ui/icons/LinkedIn';
import LogoComponent from './LogoComponent';
import { gsap, Expo } from 'gsap';

function Header() {
  const ref = useRef();
  const headerRef = useRef();
  const [clicked, setClicked] = useState(false);
  const menuToggle = gsap.timeline({ paused: true, reversed: true });

  useEffect(() => {
    let controlit = ref.current;
    menuToggle

      .add('rotate')
      .to(' .top', 0.2, { y: '5' }, 'rotate')
      .to(' .bot', 0.2, { y: '-5' }, 'rotate')
      .to(' .top', 0.2, { rotationZ: 45, transformOrigin: '50% 50%' }, 'rotate')
      .to(
        ' .bot',
        0.2,
        { rotationZ: -45, transformOrigin: '50% 50%' },
        'rotate'
      );
    // .set('#burger .mid', {opacity:0})//temp fix for stupid iOS rotate y bug

    controlit.addEventListener('click', function () {
      menuToggle.reversed() ? menuToggle.restart() : menuToggle.reverse();
      controlit.classList.toggle('openmenu');
    });
  }, []);

  useEffect(() => {
    if (ref.current.classList.contains('openmenu')) {
      gsap.to(headerRef.current, {
        height: '100px',
        overflow: 'hidden',
        background: 'white',
        paddingBottom: '0px',
        position: 'initial',
        duration: 0.5,
        ease: Expo.easeInOut,
      });
    } else {
      gsap.to(headerRef.current, {
        height: '100vh',
        paddingBottom: '100px',
        duration: 0.5,
        position: 'fixed',
        ease: Expo.easeInOut,
        background: 'black',
      });
    }
  }, [clicked]);

  return (
    <header
      className="h-[100px] flex md:flex-row flex-col justify-between md:items-center md:max-w-[1440px] mx-auto md:px-[50px] lg:px-[80px] px-[30px] pt-[40px] pb-[100px] md:pt-0 md:pb-0 md:relative md:bg-transparent w-full z-[500] top-0"
      ref={headerRef}
    >
      <svg
        ref={ref}
        id="burger"
        width="30"
        className="openmenu md:hidden absolute right-[30px] top-[35px] cursor-pointer text-white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 30 30"
        onClick={() => {
          setClicked(!clicked);
        }}
      >
        <path className="top invert mix-blend-difference" d="M0 9h30v2H0z" />
        <path className="bot invert mix-blend-difference" d="M0 19h30v2H0z" />
      </svg>
      <div className="w-[93px]">
        <Link href="/">
          <a>
            <LogoComponent className="mb-[50px] md:mb-0" />
          </a>
        </Link>
      </div>
      <nav>
        <ul className="md:flex md:space-x-[40px] text-[46px] md:text-[16px] text-white md:text-black">
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
          <li className="hidden md:block">
            <Link href="/contact">
              <a className="px-[15px] py-[10px] bg-[#0F0F0F] rounded-3xl text-white">
                Start here
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="md:hidden">
        <div className="space-x-[30px] text-white">
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
        <div className="flex flex-col space-y-[10px] mt-[50px]">
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
    </header>
  );
}

export default Header;
