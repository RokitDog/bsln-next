import { useEffect, useRef, useState } from 'react';
import { gsap, Power4 } from 'gsap';
import '../styles/globals.css';
import Header from '../components/Header/Header';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // UTILS

    // Linear interpolation
    const lerp = (a, b, n) => (1 - n) * a + n * b;

    // Gets the mouse position
    const getMousePos = (e) => {
      let posx = 0;
      let posy = 0;
      if (!e) e = window.event;
      if (e.clientX || e.clientY) {
        posx = e.clientX;
        posy = e.clientY;
      }
      return { x: posx, y: posy };
    };

    const getSiblings = (e) => {
      // for collecting siblings
      let siblings = [];
      // if no parent, return no sibling
      if (!e.parentNode) {
        return siblings;
      }
      // first child of the parent node
      let sibling = e.parentNode.firstChild;
      // collecting siblings
      while (sibling) {
        if (sibling.nodeType === 1 && sibling !== e) {
          siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
      }
      return siblings;
    };

    // Grab the mouse position and set it to mouse state
    let mouse = { x: 0, y: 0 };
    window.addEventListener('mousemove', (ev) => (mouse = getMousePos(ev)));
    class Cursor {
      constructor(el) {
        // Varibles
        this.Cursor = el;
        this.Cursor.style.opacity = 0;

        this.cursorConfigs = {
          x: { previous: 0, current: 0, amt: 0.2 },
          y: { previous: 0, current: 0, amt: 0.2 },
        };
        this.onMouseMoveEv = () => {
          this.cursorConfigs.x.previous = this.cursorConfigs.x.current =
            mouse.x;
          this.cursorConfigs.y.previous = this.cursorConfigs.y.previous =
            mouse.y;

          gsap.to(this.Cursor, {
            duration: 1,
            ease: Power4.easeOut,
            opacity: 1,
          });
          this.onScaleMouse();

          requestAnimationFrame(() => this.render());
          window.removeEventListener('mousemove', this.onMouseMoveEv);
        };
        window.addEventListener('mousemove', this.onMouseMoveEv);
      }

      onScaleMouse() {
        const hoverLinks = document.querySelectorAll('.hover-js');
        hoverLinks.forEach((link) => {
          this.setImage(link);
          if (link.matches(':hover')) {
            this.setImage(link);
          }

          link.addEventListener('mouseenter', () => {
            this.setImage(link);
            this.ScaleCursor(this.Cursor.children[0], 0.3);
            this.Cursor.classList.add('media-blend');
          });
          link.addEventListener('mouseleave', () => {
            this.ScaleCursor(this.Cursor.children[0], 0);
            this.Cursor.classList.remove('media-blend');
          });
        });
      }

      setImage(el) {
        let src = el.getAttribute('data-image-src');
        let image = document.querySelector(`#${src}`);
        let siblings = getSiblings(image);

        if (image.id == src) {
          gsap.set(image, { zIndex: 4, opacity: 1 });
          siblings.forEach((i) => {
            gsap.set(i, { zIndex: 1, opacity: 0 });
          });
        }
      }

      ScaleCursor(el, amount) {
        gsap.to(el, {
          duration: 0.6,
          scale: amount,
          ease: Power4.easeOut,
        });
      }

      render() {
        this.cursorConfigs.x.current = mouse.x;
        this.cursorConfigs.y.current = mouse.y;

        // lerp
        for (const key in this.cursorConfigs) {
          this.cursorConfigs[key].previous = lerp(
            this.cursorConfigs[key].previous,
            this.cursorConfigs[key].current,
            this.cursorConfigs[key].amt
          );
        }
        this.Cursor.style.transform = `translateX(${this.cursorConfigs.x.previous}px) translateY(${this.cursorConfigs.y.previous}px)`;
        // RAF
        requestAnimationFrame(() => this.render());
      }
    }
    window.onload = () => {
      const cursor = new Cursor(document.querySelector('.cursor'));
    };
  }, []);

  const headerRef = useRef();
  useEffect(() => {
    const headerFadeAnimation = gsap.from(headerRef.current, {
      y: -100,
      duration: 2,
      opacity: 0,
      ease: Power4.easeOut,
    });

    return () => {
      headerFadeAnimation.kill();
    };
  }, []);

  return (
    <div>
      <div className="max-w-[1440px] mx-auto selection:bg-black-500">
        <div ref={headerRef} className="z-10 px-[80px]">
          <Header />
        </div>
        <Component {...pageProps} />
        <div className="cursor fixed top-0 left-0 z-10 pointer-events-none  before:content-[''] before:absolute before:top-[-24px] before:left-[-24px] before:block before:w-[48px] before:h-[48px] before:scale-[0.2] before:bg-black before:rounded-full">
          <div className="cursor-media invert block w-[350px] h-[350px] overflow-hidden rounded-full scale-0 mt-[-175px] ml-[-175px] relative">
            <img src="/images/view.jpg" alt="view" id="view" />
            <img src="/images/drag.jpg" alt="drag" id="drag" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyApp;
