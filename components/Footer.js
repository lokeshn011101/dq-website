import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  return (
    <div className="footer mx-auto px-16 mdd:px-4 lg:mt-40 md:mt-36 sm:mt-24 smm:mt-20 bg-footer-pink flex smm:flex-col items-center justify-around lg:text-lg md:text-base sm:text-sm smm:text-sm">
      <div className="leftft lg:pl-16 flex flex-col justify-center items-start smm:items-center w-1/6 sm:w-2/6 smm:w-full text-white font-light">
        <div>The Design Quotient</div>
        <div> +91 9840484457</div>
        <div>info@designquotient.net</div>
      </div>
      <div className="centerft uppercase text-5xl mdd:text-3xl text-white w-3/6 sm:w-2/6 smm:w-full text-center">
        design quotient
      </div>
      <div className="rytft flex flex-row justify-around items-center w-1/6 sm:w-2/6 smm:w-full">
        <img
          src="/fb.png"
          alt="facebook"
          className="fb cursor-pointer w-8 h-8"
        />
        <img
          src="/insta.png"
          alt="insta"
          className="fb cursor-pointer w-8 h-8"
        />
        <img
          src="/mail.png"
          alt="mail"
          className="fb cursor-pointer w-10 h-6"
        />
      </div>
    </div>
  );
};

export default Footer;
