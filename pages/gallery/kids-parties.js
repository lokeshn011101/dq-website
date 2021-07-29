import React, { useEffect, useState } from "react";
import AOS from "aos";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const KidsParties = () => {
  useEffect(() => {
    AOS.init({
      duration: 750,
    });
  }, []);
  return (
    <div className="gallery-container flex flex-col justify-center items-center overflow-hidden">
      <h1 className="headings text-center mx-2 font-adelia mb-16 mt-10 mdd:mb-8 smm:text-xl mdd:text-2xl lgg:text-3xl text-4xl">
        Curated Decor
      </h1>
      <div className="gallery-segment flex flex-row  justify-around items-center">
        <div className="gallery-element" data-aos="fade-right">
          <div className="flex justify-start items-center">
            <Image
              width={1026}
              height={828}
              src="/kp1.png"
              alt="kids-parties-images"
            />
          </div>
        </div>
        <div className="gallery-element-2" data-aos="fade-left">
          <div className="flex justify-start items-center">
            <Image
              width={574}
              height={828}
              src="/kp2.png"
              alt="kids-parties-images"
            />
          </div>
        </div>
      </div>
      <div className="gallery-segment flex flex-row justify-around items-center">
        <div className="gallery-element" data-aos="fade-right">
          <div className="flex justify-start items-center">
            <Image
              width={574}
              height={828}
              src="/kp3.png"
              alt="kids-parties-images"
            />
          </div>
        </div>
        <div className="gallery-element-2" data-aos="fade-left">
          <div className="flex justify-start items-center">
            <Image
              width={1026}
              height={828}
              src="/kp4.png"
              alt="kids-parties-images"
            />
          </div>
        </div>
      </div>
      <div className="gallery-segment flex flex-row  justify-around items-center">
        <div className="gallery-element" data-aos="fade-right">
          <div className="flex justify-start items-center">
            <Image
              width={800}
              height={828}
              src="/kp5.png"
              alt="kids-parties-images"
            />
          </div>
        </div>
        <div className="gallery-element-2" data-aos="fade-left">
          <div className="flex justify-start items-center">
            <Image
              width={800}
              height={828}
              src="/kp6.png"
              alt="kids-parties-images"
            />
          </div>
        </div>
      </div>
      <div className="gallery-segment flex flex-row justify-around items-center">
        <div className="gallery-element" data-aos="fade-right">
          <div className="flex justify-start items-center">
            <Image
              width={635}
              height={1016}
              src="/kp7.png"
              alt="kids-parties-images"
            />
          </div>
        </div>
        <div className="gallery-element-2" data-aos="fade-left">
          <div className="flex justify-start items-center">
            <Image
              width={965}
              height={1016}
              src="/kp8.png"
              alt="kids-parties-images"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KidsParties;
