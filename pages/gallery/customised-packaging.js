import React, { useEffect, useState } from "react";
import AOS from "aos";
import Image from "next/image";
import GalleryCarousel from "../../components/GalleryCarousel";

const CustomisedPackaging = () => {
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
    "/images/cp1.jpeg",
    "/images/cp2.jpg",
    "/images/cp3.jpeg",
    "/images/cp4.jpg",
    "/images/cp5.jpg",
  ];
  return (
    <div className="gallery-container flex flex-col justify-center items-start overflow-hidden">
      <h1 className="headings text-center w-full mx-2 font-adelia mb-16 mt-10 mdd:mb-8 smm:text-xl mdd:text-2xl lgg:text-3xl text-4xl">
        Customised Packaging
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
              width={640}
              height={828}
              src="/cp2.png"
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
              width={960}
              height={828}
              src="/cp1.png"
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
              width={800}
              height={828}
              src="/cp3.png"
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
              width={800}
              height={828}
              src="/cp4.png"
              alt="kids-parties-images"
            />
          </div>
        </div>
      </div>
      <div className="gallery-segment flex flex-row justify-start items-start">
        <div
          onClick={() => setImageClick(true)}
          className="cursor-pointer gallery-element"
          data-aos="fade-right"
        >
          <div
            className="flex justify-center items-center"
            onClick={() => setCurrentImage(5)}
          >
            <Image
              width={1026}
              height={1208}
              src="/cp5.png"
              alt="kids-parties-images"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomisedPackaging;
