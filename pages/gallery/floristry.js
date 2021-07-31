import React, { useEffect, useState } from "react";
import AOS from "aos";
import Image from "next/image";
import GalleryCarousel from "../../components/GalleryCarousel";

const Floristry = () => {
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
    "/images/f1.jpg",
    "/images/f2.jpg",
    "/images/f3cd3.jpeg",
    "/images/f4cd4.jpg",
    "/images/f5.jpeg",
    "/images/f6g4cd6.jpeg",
    "/images/f7g7.jpg",
  ];
  return (
    <div className="gallery-container flex flex-col justify-center items-center overflow-hidden">
      <h1 className="headings text-center mx-2 font-adelia mb-16 mt-10 mdd:mb-8 smm:text-xl mdd:text-2xl lgg:text-3xl text-4xl">
        Floristry
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
              src="/f1.png"
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
              src="/f2.png"
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
              src="/f3.png"
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
              src="/f4.png"
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
              src="/f5.png"
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
              src="/f6.png"
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
              width={1640}
              height={1099}
              src="/f7.png"
              alt="kids-parties-images"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Floristry;
