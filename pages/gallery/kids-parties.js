import React, { useEffect, useState } from "react";
import AOS from "aos";
import Image from "next/image";
import GalleryCarousel from "../../components/GalleryCarousel";

const KidsParties = () => {
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
    "/kp1.png",
    "/kp2.png",
    "/kp3.png",
    "/kp4.png",
    "/kp5.png",
    "/kp6.png",
    "/kp7.png",
    "/kp8.png",
  ];
  return (
    <div className="gallery-container flex flex-col justify-center items-center overflow-hidden">
      <h1 className="headings text-center mx-2 font-adelia mb-16 mt-10 mdd:mb-8 smm:text-xl mdd:text-2xl lgg:text-3xl text-4xl">
        Kids Parties
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
              src="/kp1.png"
              alt="kids-parties-images"
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
        <div
          onClick={() => setImageClick(true)}
          className="cursor-pointer gallery-element"
          data-aos="fade-right"
        >
          <div
            className="flex justify-start items-center"
            onClick={() => setCurrentImage(3)}
          >
            <Image
              width={574}
              height={828}
              src="/kp3.png"
              alt="kids-parties-images"
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
            onClick={() => setCurrentImage(4)}
          >
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
        <div
          onClick={() => setImageClick(true)}
          className="cursor-pointer gallery-element"
          data-aos="fade-right"
        >
          <div
            className="flex justify-start items-center"
            onClick={() => setCurrentImage(5)}
          >
            <Image
              width={800}
              height={828}
              src="/kp5.png"
              alt="kids-parties-images"
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
            onClick={() => setCurrentImage(6)}
          >
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
        <div
          onClick={() => setImageClick(true)}
          className="cursor-pointer gallery-element"
          data-aos="fade-right"
        >
          <div
            className="flex justify-start items-center"
            onClick={() => setCurrentImage(7)}
          >
            <Image
              width={635}
              height={1016}
              src="/kp7.png"
              alt="kids-parties-images"
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
            onClick={() => setCurrentImage(8)}
          >
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
