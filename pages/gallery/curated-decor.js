import React, { useEffect, useState } from "react";
import AOS from "aos";
import Image from "next/image";
import GalleryCarousel from "../../components/GalleryCarousel";

const CuratedDecor = () => {
  const [imageClick, setImageClick] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    AOS.init({
      duration: 750,
    });
  }, []);
  useEffect(() => {
    if (imageClick) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [imageClick]);

  const images = [
    "/images/cd1g1.jpg",
    "/images/lw6g2cd2.jpg",
    "/images/f3cd3.jpeg",
    "/images/f4cd4.jpg",
    "/images/cd5.jpeg",
    "/images/f6g4cd6.jpeg",
    "/images/cd7.jpg",
  ];

  return (
    <div className="gallery-container flex flex-col justify-center items-center overflow-hidden">
      <h1 className="headings text-center mx-2 font-adelia mb-16 mt-10 mdd:mb-8 smm:text-xl mdd:text-2xl lgg:text-3xl text-4xl">
        Curated Decor
      </h1>
      {imageClick ? (
        <div className="gal-car w-full h-full fixed overflow-hidden flex justify-start items-start top-0 left-0">
          <GalleryCarousel
            setImageClick={setImageClick}
            currentImage={currentImage}
            images={images}
          />
        </div>
      ) : (
        <></>
      )}
      <div className="gallery-segment flex flex-row  justify-around items-center">
        <div
          onClick={() => setImageClick(true)}
          className="cursor-pointer gallery-element"
          data-aos="fade-right"
        >
          <div
            className="flex justify-start items-center"
            onClick={() => setCurrentImage(1)}
          >
            <Image
              width={1026}
              height={828}
              src="/cd1.png"
              alt="decor-images"
            />
          </div>
        </div>
        <div
          onClick={() => setImageClick(true)}
          className="cursor-pointer gallery-element-2"
          data-aos="fade-left"
        >
          <div
            className="flex justify-start items-center"
            onClick={() => setCurrentImage(2)}
          >
            <Image width={574} height={828} src="/cd2.png" alt="decor-images" />
          </div>
        </div>
      </div>
      <div className="gallery-segment flex flex-row justify-around items-center">
        <div
          onClick={() => setImageClick(true)}
          className="cursor-pointer gallery-element"
          data-aos="fade-right"
        >
          <div
            className="flex justify-start items-center"
            onClick={() => setCurrentImage(3)}
          >
            <Image width={574} height={828} src="/cd3.png" alt="decor-images" />
          </div>
        </div>
        <div
          onClick={() => setImageClick(true)}
          className="cursor-pointer gallery-element-2"
          data-aos="fade-left"
        >
          <div
            className="flex justify-start items-center"
            onClick={() => setCurrentImage(4)}
          >
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
        <div
          onClick={() => setImageClick(true)}
          className="cursor-pointer gallery-element"
          data-aos="fade-right"
        >
          <div
            className="flex justify-start items-center"
            onClick={() => setCurrentImage(5)}
          >
            <Image width={800} height={828} src="/cd5.png" alt="decor-images" />
          </div>
        </div>
        <div
          onClick={() => setImageClick(true)}
          className="cursor-pointer gallery-element-2"
          data-aos="fade-left"
        >
          <div
            className="flex justify-start items-center"
            onClick={() => setCurrentImage(6)}
          >
            <Image width={800} height={828} src="/cd6.png" alt="decor-images" />
          </div>
        </div>
      </div>
      <div className="gallery-segment flex flex-row  justify-around items-center">
        <div onClick={() => setImageClick(true)}>
          <div
            className="cursor-pointer gallery-element flex justify-start items-center"
            data-aos="fade-up"
            onClick={() => setCurrentImage(7)}
          >
            <Image
              width={1640}
              height={1099}
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
