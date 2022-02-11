import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import Twitter from '@material-ui/icons/Twitter';
import Instagram from '@material-ui/icons/Instagram';
import LinkedIn from '@material-ui/icons/LinkedIn';
import LogoComponent from './LogoComponent';
import { gsap, Expo } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';

function Header() {
  const ref = useRef();
  const headerRef = useRef();
  const logoRef = useRef();
  const overflowRef = useRef();
  const [clicked, setClicked] = useState(false);
  const menuToggle = gsap.timeline({ paused: true, reversed: true });

  useEffect(() => {
    let controlit = ref.current;
    gsap.set(headerRef.current, {
      background: 'white',
    });
    gsap.to(headerRef.current, {
      opacity: 1,
      duration: 2,
      ease: Expo.easeInOut,
    });
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
      ref.current.classList.toggle('inverted');
      logoRef.current.classList.toggle('inverted');
      if (window.innerWidth < 768) {
        overflowRef.current.classList.toggle('overflow');
      }
    });
  }, []);

  useEffect(() => {
    let controlit = ref.current;

    const headerTLOpen = gsap.timeline({ paused: true });
    headerTLOpen.to(headerRef.current, {
      background: '#0f0f0f',
      height: '100vh',
      duration: 1,
      ease: Expo.easeInOut,
      onStart: () => {
        gsap.set(document.body, {
          overflowY: 'hidden',
        });
      },
    });

    const links = gsap.utils.toArray('.header-links');
    links.forEach((link) => {
      link.addEventListener('click', () => {
        menuToggle.reverse();
        controlit.classList.remove('openmenu');
        ref.current.classList.remove('inverted');
        logoRef.current.classList.remove('inverted');
        if (window.innerWidth < 768) {
          overflowRef.current.classList.toggle('overflow');
        }

        headerTLClose.play();
      });
    });
    logoRef.current.addEventListener('click', () => {
      menuToggle.reverse();
      controlit.classList.remove('openmenu');
      ref.current.classList.remove('inverted');
      logoRef.current.classList.remove('inverted');
      if (window.innerWidth < 768) {
        overflowRef.current.classList.toggle('overflow');
      }

      headerTLClose.play();
    });
    const headerTLClose = gsap.timeline({ paused: true });
    headerTLClose.to(headerRef.current, {
      background: 'white',
      height: '100px',
      duration: 1,
      ease: Expo.easeInOut,
      onStart: () => {
        gsap.set(document.body, {
          overflowY: 'scroll',
        });
      },
      onComplete: () => {
        ScrollTrigger.getAll().forEach((instance) => {
          instance.refresh();
        });
      },
    });

    if (ref.current.classList.contains('openmenu')) {
      headerTLOpen.play();
    } else {
      headerTLClose.play();
    }
  }, [clicked]);

  useEffect(() => {
    let prevScrollpos = window.pageYOffset;

    let headerDiv = headerRef.current;
    let headerBottom = headerDiv.offsetTop + headerDiv.offsetHeight;
    let didScroll;

    window.onscroll = () => {
      didScroll = true;
    };

    setInterval(() => {
      if (didScroll) {
        hasScrolled();
        didScroll = false;
      }
    }, 250);

    const hasScrolled = () => {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos || currentScrollPos < headerBottom) {
        headerDiv.style.top = '0';
      } else {
        headerDiv.style.top = '-100px';
      }
      prevScrollpos = currentScrollPos;
    };
  }, []);

  const [isVisible, setIsVisible] = useState(false);

  return (
    <header
      className="z-[500] top-0 fixed left-0 right-0  transition-all duration-300 ease-out overflow-hidden md:overflow-visible h-[100px] lg:h-auto opacity-0"
      ref={headerRef}
    >
      <div
        className="md:max-w-[1600px] mx-auto w-full flex md:flex-row flex-col justify-between md:items-center h-[100%] md:px-[50px] px-[30px] pt-[40px] pb-[40px] md:pt-0 md:pb-0"
        ref={overflowRef}
      >
        <svg
          ref={ref}
          id="burger"
          width="30"
          className=" md:hidden absolute right-[30px] top-[35px] cursor-pointer text-white transition-all duration-1000"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
          onClick={() => {
            setClicked(!clicked);
          }}
        >
          <path className="top " d="M0 9h30v2H0z" />
          <path className="bot " d="M0 19h30v2H0z" />
        </svg>
        <div className="w-[93px]">
          <Link href="/">
            <a>
              <LogoComponent
                className="mb-[50px] md:mb-0 transition-all duration-1000"
                reference={logoRef}
                width={93}
                height={18}
              />
            </a>
          </Link>
        </div>
        <nav>
          <ul className="md:flex md:space-x-[40px] text-[46px] md:text-[16px] text-white md:text-[#0f0f0f]">
            <li className="md:pb-[40px] md:mt-[40px]">
              <Link href="/work">
                <a className="header-links">Work</a>
              </Link>
            </li>
            <li
              className="relative md:pb-[40px] md:mt-[40px]"
              onMouseEnter={() => {
                setIsVisible(true);
              }}
              onMouseLeave={() => {
                setIsVisible(false);
              }}
            >
              <Link href="/services">
                <a className="header-links submenu-parent">Services</a>
              </Link>
              <AnimatePresence>
                {isVisible ? (
                  <motion.ul
                    className="absolute bg-[#0f0f0f] text-white text-[14px] leading-[1.19] space-y-[5px] left-[-15px] rounded-[10px] w-[150px] top-[40px] submenu px-[20px] hidden md:block origin-top"
                    initial={{
                      height: 0,
                      paddingTop: 0,
                      paddingBottom: 0,
                      overflow: 'hidden',
                    }}
                    animate={{
                      height: 145,
                      paddingTop: 20,
                      paddingBottom: 20,
                      overflow: 'visible',
                    }}
                    exit={{
                      height: 0,
                      paddingTop: 0,
                      paddingBottom: 0,
                      overflow: 'hidden',
                    }}
                  >
                    <li className="submenu-item">
                      <Link href="/services/branding">
                        <a
                          // onClick={() => {
                          //   setIsVisible(false);
                          // }}
                          className="hover:opacity-70 focus:opacity-70 submenu-item"
                        >
                          Branding
                        </a>
                      </Link>
                    </li>
                    <li className="submenu-item">
                      <Link href="/services/print-design">
                        <a
                          // onClick={() => {
                          //   setIsVisible(false);
                          // }}
                          className="hover:opacity-70 focus:opacity-70 submenu-item"
                        >
                          Print Design
                        </a>
                      </Link>
                    </li>
                    <li className="submenu-item">
                      <Link href="/services/websites">
                        <a
                          // onClick={() => {
                          //   setIsVisible(false);
                          // }}
                          className="hover:opacity-70 focus:opacity-70 submenu-item"
                        >
                          Websites
                        </a>
                      </Link>
                    </li>
                    <li className="submenu-item">
                      <Link href="/services/digital-marketing">
                        <a
                          // onClick={() => {
                          //   setIsVisible(false);
                          // }}
                          className="hover:opacity-70 focus:opacity-70 submenu-item"
                        >
                          Digital Marketing
                        </a>
                      </Link>
                    </li>
                    <li className="submenu-item">
                      <Link href="/services/motion-graphics">
                        <a
                          // onClick={() => {
                          //   setIsVisible(false);
                          // }}
                          className="hover:opacity-70 focus:opacity-70 submenu-item"
                        >
                          Motion Graphics
                        </a>
                      </Link>
                    </li>
                  </motion.ul>
                ) : null}
              </AnimatePresence>
            </li>
            <li className="md:pb-[40px] md:mt-[40px]">
              <Link href="/studio">
                <a className="header-links">Studio</a>
              </Link>
            </li>
            <li className="md:pb-[40px] md:mt-[40px]">
              <Link href="/insights">
                <a className="header-links">Insights</a>
              </Link>
            </li>
            <li className="md:pb-[40px] md:mt-[40px]">
              <Link href="#footer">
                <a className="header-links">Contact</a>
              </Link>
            </li>
            <li className="hidden md:block md:pb-[40px] md:mt-[40px]">
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
      </div>
    </header>
  );
}

export default Header;
