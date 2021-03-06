import { gsap, Power2, Expo } from 'gsap';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin);

function ContactForm({ ref1, ref2 }) {
  const form = useRef();

  const onButtonSubmit = (e) => {
    e.preventDefault();

    // if (form.current.checkValidity()) {
    // emailjs
    //   .sendForm(
    //     'gmail',
    //     'template_ac33cva',
    //     form.current,
    //     `user_Nseu4oxLKkloEobmRTyOB`
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );

    gsap.to(ref1.current, {
      paddingTop: 0,
      paddingBottom: 0,
      height: 0,
      delay: 0.25,
      duration: 2,
      ease: Expo.easeInOut,
      onStart: () => {
        gsap.to(window, {
          duration: 1,
          scrollTo: { y: ref1.current, offsetY: 100 },
        });
      },
      onComplete: () => {
        gsap.to(window, {
          duration: 1,
          scrollTo: { y: ref2.current, offsetY: 100 },
        });
        gsap.to(form.current, {
          display: 'none',
          duration: 1,
          ease: Expo.easeInOut,
        });
      },
    });
    gsap.to(form.current, {
      autoAlpha: 0,
      duration: 1,
      ease: Expo.easeInOut,
    });
    gsap.to(ref2.current, {
      height: 300,
      paddingTop: 50,
      paddingBottom: 50,
      delay: 2.25,
      duration: 2,
      ease: Expo.easeInOut,
      onComplete: () => {
        ScrollTrigger.getAll().forEach((instance) => {
          instance.refresh();
        });
      },
    });
    // }
  };

  return (
    <form
      className="text-[26px] tracking-[-1%] md:text-[32px] max-w-[1200px] mx-auto leading-[1.5]"
      ref={form}
      encType="form-data"
      onSubmit={onButtonSubmit}
    >
      <div className="inline  xl:whitespace-nowrap ">
        <span className="text-white align-middle">You usually go by </span>
        <div className="md:inline block max-w-[100%] md:max-w-[400px] w-[100%]">
          <input
            type="text"
            className="border-t-0 border-l-0 border-r-0 border-b-1  border-[#7D7D7D] bg-transparent  relative focus:outline-none focus:ring-0 focus:border-[#7D7D7D] text-white  leading-[1.2] text-[26px] pb-[0] mb-[40px] md:mb-[0px] placeholder:text-center mx-[15px]"
            name="name"
            required
            placeholder="(name)"
          />
        </div>
        <span className="text-white align-middle hidden xl:inline-block">
          {' '}
          and you're not mad when
        </span>
        <span className="text-white align-middle xl:hidden">
          and you're not mad when someone emails you at
        </span>
      </div>
      <div className="inline  xl:whitespace-nowrap">
        <span className="text-white align-middle hidden xl:inline-block">
          someone emails you at{' '}
        </span>
        <div className="md:inline block max-w-[487px] w-[100%]">
          <input
            type="email"
            name="email"
            placeholder="(e-mail)"
            className="border-t-0 border-l-0 border-r-0 border-b-1  border-[#7D7D7D] bg-transparent  relative focus:outline-none focus:ring-0 focus:border-[#7D7D7D] text-white  leading-[1.2] text-[26px] pb-[0] mb-[40px] md:mb-[0px] placeholder:text-center mx-[15px]"
            required
          />
          <span className="text-white align-middle">.</span>
        </div>
        <span className="text-white align-middle hidden xl:inline-block">
          {' '}
          Your business is
        </span>
        <span className="text-white align-middle xl:hidden">
          {' '}
          Your business is awesome but you need a bit of help with
        </span>
      </div>
      <div className="inline  xl:whitespace-nowrap">
        <span className="text-white align-middle hidden xl:inline-block">
          awesome but you need a bit of help with{' '}
        </span>
        <div className="md:inline block">
          <select
            className="border-t-0 border-l-0 border-r-0 border-b-1  border-[#7D7D7D] bg-transparent  relative focus:outline-none focus:ring-0 focus:border-[#7D7D7D] text-white max-w-[380px] w-[100%] leading-[1.2] text-[26px] pb-[0] select-field appearance-none text-center mb-[40px] md:mb-[0px] mx-[15px]"
            name="option"
            required
          >
            <option
              className="bg-[#0f0f0f] text-center"
              disabled
              defaultValue={''}
            ></option>
            <option className="bg-[#0f0f0f] text-center">Website</option>
            <option className="bg-[#0f0f0f] text-center">Logo</option>
            <option className="bg-[#0f0f0f] text-center">Cooking</option>
          </select>
        </div>
        <span className="text-white align-middle hidden xl:inline-block">
          {' '}
          and you've
        </span>
        <span className="text-white align-middle xl:hidden">
          {' '}
          and you've decided to have it done by
        </span>
      </div>
      <div className="inline  xl:whitespace-nowrap">
        <span className="text-white align-middle hidden xl:inline-block">
          decided to have it done by{' '}
        </span>
        <div className="md:inline block">
          <input
            type="date"
            name="deadline"
            required
            className="border-t-0 border-l-0 border-r-0 border-b-1  border-[#7D7D7D] bg-transparent  relative focus:outline-none focus:ring-0 focus:border-[#7D7D7D] text-white max-w-[280px] w-[100%] leading-[1.2] text-[26px] pb-[0] mb-[40px] md:mb-[0px] text-center mx-[15px]"
          />
          <span className="text-white align-middle">.</span>
        </div>
        <span className="text-white align-middle hidden xl:inline-block">
          {' '}
          You have a limited budget
        </span>
      </div>
      <div className="inline  xl:whitespace-nowrap">
        <span className="text-white align-middle xl:hidden">
          You have a limited budget which is around{' '}
        </span>
        <span className="text-white align-middle hidden xl:inline-block">
          which is around{' '}
        </span>
        <div className="md:inline block ">
          <select
            className="border-t-0 border-l-0 border-r-0 border-b-1  border-[#7D7D7D] bg-transparent  relative focus:outline-none focus:ring-0 focus:border-[#7D7D7D] text-white max-w-[300px] w-[100%] leading-[1.2] text-[26px] pb-[0] select-field appearance-none text-center mx-[15px]"
            name="pricing"
            required
          >
            <option
              className="bg-[#0f0f0f] text-center"
              disabled
              defaultValue={''}
            ></option>
            <option className="bg-[#0f0f0f] text-center">Under 100.000$</option>
            <option className="bg-[#0f0f0f] text-center">
              100.000$ - 150.000$
            </option>
            <option className="bg-[#0f0f0f] text-center">Over 150.000$</option>
          </select>
        </div>
      </div>
      <div className="">
        <p className="text-white mt-[60px] max-w-[963px]">
          Space for free flowing ideas you might have (or we can come up with
          them together):
        </p>
        <textarea
          className="w-[1140px] max-w-[100%] bg-transparent text-white text-[26px] mt-[20px] leading-[1.5] focus:border-white focus:ring-0 min-h-[200px] border-l-0 border-r-0"
          placeholder="Write us here"
          name="message"
          required
        ></textarea>
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="bg-[#fdc52e] text-[14px] md:text-[16px] rounded-full px-[15px] py-[10px] mt-[40px] md:mt-[70px] hover:bg-white hover:text-[#0f0f0f] transition ease-out duration-300 mb-[100px] xl:mb-0"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
