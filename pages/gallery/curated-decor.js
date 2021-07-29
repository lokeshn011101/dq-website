import React, { useEffect, useState } from "react";
import AOS from "aos";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CuratedDecor = () => {
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
              src="/cd1.png"
              alt="decor-images"
            />
          </div>
        </div>
        <div className="gallery-element-2" data-aos="fade-left">
          <div className="flex justify-start items-center">
            <Image width={574} height={828} src="/cd2.png" alt="decor-images" />
          </div>
        </div>
      </div>
      <div className="gallery-segment flex flex-row justify-around items-center">
        <div className="gallery-element" data-aos="fade-right">
          <div className="flex justify-start items-center">
            <Image width={574} height={828} src="/cd3.png" alt="decor-images" />
          </div>
        </div>
        <div className="gallery-element-2" data-aos="fade-left">
          <div className="flex justify-start items-center">
            <Image
              width={1026}
              height={828}
              src="/cd4.png"
              alt="decor-images"
            />
          </div>
        </div>
      </div>
      <div className="gallery-segment flex flex-row  justify-around items-center">
        <div className="gallery-element" data-aos="fade-right">
          <div className="flex justify-start items-center">
            <Image width={800} height={828} src="/cd5.png" alt="decor-images" />
          </div>
        </div>
        <div className="gallery-element-2" data-aos="fade-left">
          <div className="flex justify-start items-center">
            <Image width={800} height={828} src="/cd6.png" alt="decor-images" />
          </div>
        </div>
      </div>
      <div className="gallery-segment flex flex-row  justify-around items-center">
        <div>
          <div
            className="gallery-element flex justify-start items-center"
            data-aos="fade-up"
          >
            <Image
              width={1640}
              height={884}
              src="/cd7.png"
              alt="decor-images"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CuratedDecor;
