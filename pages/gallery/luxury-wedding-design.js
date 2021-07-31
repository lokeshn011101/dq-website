import React, { useEffect, useState } from "react";
import AOS from "aos";
import Image from "next/image";
import GalleryCarousel from "../../components/GalleryCarousel";

const LuxuryWeddingDesign = () => {
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
    "/images/lw1.jpg",
    "/images/kp2lw2.jpeg",
    "/images/lw3.jpg",
    "/images/lw4.jpeg",
    "/images/lw5.jpeg",
    "/images/lw6g2cd2.jpg",
    "/images/lw7g6.jpg",
    "/images/lw8.jpg",
  ];
  return (
    <div className="gallery-container flex flex-col justify-center items-center overflow-hidden">
      <h1 className="headings text-center mx-2 font-adelia mb-16 mt-10 mdd:mb-8 smm:text-xl mdd:text-2xl lgg:text-3xl text-4xl">
        Luxury Wedding Design
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
              src="/lw1.png"
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
              src="/lw2.png"
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
              width={1640}
              height={828}
              src="/lw3.png"
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
            onClick={() => setCurrentImage(4)}
          >
            <Image
              width={800}
              height={828}
              src="/lw4.png"
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
            onClick={() => setCurrentImage(5)}
          >
            <Image
              width={800}
              height={828}
              src="/lw5.png"
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
            onClick={() => setCurrentImage(6)}
          >
            <Image
              width={635}
              height={1016}
              src="/lw6.png"
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
            onClick={() => setCurrentImage(7)}
          >
            <Image
              width={965}
              height={1016}
              src="/lw7.png"
              alt="kids-parties-images"
            />
          </div>
        </div>
      </div>
      <div className="gallery-segment flex flex-row justify-around items-center">
        <div
          onClick={() => setImageClick(true)}
          className="cursor-pointer gallery-element"
          data-aos="fade-up"
        >
          <div
            className="flex justify-start items-center"
            onClick={() => setCurrentImage(8)}
          >
            <Image
              width={1640}
              height={1099}
              src="/lw8.png"
              alt="kids-parties-images"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuxuryWeddingDesign;
