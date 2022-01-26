import { gsap, Power2, Expo } from 'gsap';
import React, { useState, useRef } from 'react';

function ContactForm({ ref1, ref2 }) {
  const [isClicked, setIsClicked] = useState(false);
  const form = useRef();

  const onButtonSubmit = (e) => {
    e.preventDefault();
    gsap.to(ref1.current, {
      paddingTop: 0,
      paddingBottom: 0,
      height: 0,
      delay: 0.25,
      duration: 2,
      ease: Expo.easeInOut,
    });
    gsap.to(form.current, {
      opacity: 0,
      duration: 1,
      ease: Expo.easeInOut,
    });
    gsap.to(ref2.current, {
      display: 'block',
      duration: 2,
      ease: Expo.easeInOut,
    });
  };

  return (
    <form
      onSubmit={onButtonSubmit}
      className="text-[26px] leading-[1.13] tracking-[-1%] md:text-[32px] max-w-[1200px] mx-auto"
      ref={form}
    >
      <div className="mb-[20px]">
        <span className="text-white align-middle">You usually go by </span>
        <div className="inline whitespace-nowrap">
          <input
            type="text"
            className="border-t-0 border-l-0 border-r-0 border-b-1  border-[#7D7D7D] bg-transparent  relative focus:outline-none focus:ring-0 focus:border-[#7D7D7D] text-white max-w-[400px] w-[100%] leading-[1.2] text-[26px] pb-[0] "
          />
          <sup className="form-sub">(name)</sup>
        </div>
        <span className="text-white align-middle">
          {' '}
          and you're not mad when
        </span>
      </div>
      <div className="mb-[20px]">
        <span className="text-white align-middle">someone emails you at </span>
        <div className="inline whitespace-nowrap">
          <input
            type="email"
            className="border-t-0 border-l-0 border-r-0 border-b-1  border-[#7D7D7D] bg-transparent  relative focus:outline-none focus:ring-0 focus:border-[#7D7D7D] text-white max-w-[487px] w-[100%] leading-[1.2] text-[26px] pb-[0] "
          />
          <span className="text-white align-middle">.</span>
          <sup className="form-sub">(e-mail)</sup>
        </div>
        <span className="text-white align-middle"> Your business is</span>
      </div>
      <div className="mb-[20px]">
        <span className="text-white align-middle">
          awesome but you need a bit of help with{' '}
        </span>
        <div className="inline whitespace-nowrap">
          <select className="border-t-0 border-l-0 border-r-0 border-b-1  border-[#7D7D7D] bg-transparent  relative focus:outline-none focus:ring-0 focus:border-[#7D7D7D] text-white max-w-[380px] w-[100%] leading-[1.2] text-[26px] pb-[0] select-field appearance-none text-center">
            <option
              className="bg-black text-center"
              disabled
              defaultValue={''}
            ></option>
            <option className="bg-black text-center">Website</option>
            <option className="bg-black text-center">Logo</option>
            <option className="bg-black text-center">Cooking</option>
          </select>
          <span className="text-white align-middle"> .</span>
        </div>
        <span className="text-white align-middle"> and you've</span>
      </div>
      <div className="mb-[20px]">
        <span className="text-white align-middle">
          decided to have it done by{' '}
        </span>
        <div className="inline whitespace-nowrap">
          <input
            type="text"
            className="border-t-0 border-l-0 border-r-0 border-b-1  border-[#7D7D7D] bg-transparent  relative focus:outline-none focus:ring-0 focus:border-[#7D7D7D] text-white max-w-[280px] w-[100%] leading-[1.2] text-[26px] pb-[0]"
          />
          <span className="text-white align-middle">.</span>
          <sup className="form-sub">(deadline)</sup>
        </div>
        <span className="text-white align-middle">
          {' '}
          You have a limited budget
        </span>
      </div>
      <div className="mb-[20px]">
        <span className="text-white align-middle">which is around </span>
        <div className="inline whitespace-nowrap">
          <select className="border-t-0 border-l-0 border-r-0 border-b-1  border-[#7D7D7D] bg-transparent  relative focus:outline-none focus:ring-0 focus:border-[#7D7D7D] text-white max-w-[300px] w-[100%] leading-[1.2] text-[26px] pb-[0] select-field appearance-none text-center">
            <option
              className="bg-black text-center"
              disabled
              defaultValue={''}
            ></option>
            <option className="bg-black text-center">Under 100.000$</option>
            <option className="bg-black text-center">
              100.000$ - 150.000$
            </option>
            <option className="bg-black text-center">Over 150.000$</option>
          </select>
        </div>
      </div>
      <div>
        <p className="text-white mt-[60px] max-w-[963px]">
          Space for free flowing ideas you might have (or we can come up with
          them together):
        </p>
        <textarea
          className="w-[1140px] max-w-[100%] bg-transparent text-white text-[26px] rounded-md mt-[20px] leading-[1.5] focus:border-white focus:ring-0 min-h-[200px]"
          placeholder="Write us here"
        ></textarea>
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="bg-[#fdc52e] text-[14px] md:text-[16px] rounded-full px-[15px] py-[10px] mt-[40px] md:mt-[70px] hover:bg-white hover:text-black transition ease-out duration-300"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
