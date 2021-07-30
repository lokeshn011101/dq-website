import React, { useEffect, useState } from "react";
import AOS from "aos";
import Image from "next/image";
import GalleryCarousel from "../components/GalleryCarousel";

const Gallery = () => {
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
    "/cd1.png",
    "/cd2.png",
    "/gallery-3.png",
    "/cd6.png",
    "/gallery-5.png",
    "/gallery-6.png",
    "/gallery-7.png",
    "/gallery-8.png",
    "/gallery-9.png",
  ];
  return (
    <div>
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
      <div className="gallery-container flex flex-col justify-center items-center overflow-hidden">
        <div className="gallery-segment flex flex-row  justify-around items-center">
          <div
            className="gallery-element ge-top cursor-pointer"
            data-aos="fade-right"
            onClick={() => setImageClick(true)}
          >
            <div
              className="flex justify-start items-center"
              onClick={() => setCurrentImage(1)}
            >
              <Image
                width={1026}
                height={828}
                src="/cd1.png"
                alt="galleryImages"
              />
            </div>
          </div>
          <div
            className="gallery-element-2 cursor-pointer"
            data-aos="fade-left"
            onClick={() => setImageClick(true)}
          >
            <div
              className="flex justify-start items-center"
              onClick={() => setCurrentImage(2)}
            >
              <Image
                width={574}
                height={828}
                src="/cd2.png"
                alt="galleryImages"
              />
            </div>
          </div>
        </div>
        <div className="gallery-segment flex flex-row  justify-around items-center">
          <div
            className="gallery-element cursor-pointer"
            data-aos="fade-right"
            onClick={() => setImageClick(true)}
          >
            <div
              className="flex justify-start items-center"
              onClick={() => setCurrentImage(3)}
            >
              <Image
                width={800}
                height={828}
                src="/gallery-3.png"
                alt="galleryImages"
              />
            </div>
          </div>
          <div
            className="gallery-element-2 cursor-pointer"
            data-aos="fade-left"
            onClick={() => setImageClick(true)}
          >
            <div
              className="flex justify-start items-center"
              onClick={() => setCurrentImage(4)}
            >
              <Image
                width={800}
                height={828}
                src="/cd6.png"
                alt="galleryImages"
              />
            </div>
          </div>
        </div>
        <div className="gallery-segment flex flex-row  justify-around items-center">
          <div onClick={() => setImageClick(true)}>
            <div
              className="gallery-element flex justify-start items-center cursor-pointer"
              onClick={() => setCurrentImage(5)}
              data-aos="fade-up"
            >
              <Image
                width={1640}
                height={884}
                src="/gallery-5.png"
                alt="galleryImages"
              />
            </div>
          </div>
        </div>
        <div className="gallery-segment flex flex-row  justify-around items-center">
          <div
            className="gallery-element cursor-pointer"
            data-aos="fade-right"
            onClick={() => setImageClick(true)}
          >
            <div
              className="flex justify-start items-center"
              onClick={() => setCurrentImage(6)}
            >
              <Image
                width={574}
                height={828}
                src="/gallery-6.png"
                alt="galleryImages"
              />
            </div>
          </div>
          <div
            className="gallery-element-2 cursor-pointer"
            data-aos="fade-left"
            onClick={() => setImageClick(true)}
          >
            <div
              className="flex justify-start items-center"
              onClick={() => setCurrentImage(7)}
            >
              <Image
                width={1026}
                height={828}
                src="/gallery-7.png"
                alt="galleryImages"
              />
            </div>
          </div>
        </div>
        <div className="gallery-segment flex flex-row  justify-around items-center">
          <div
            className="gallery-element cursor-pointer"
            data-aos="fade-right"
            onClick={() => setImageClick(true)}
          >
            <div
              className="flex justify-start items-center"
              onClick={() => setCurrentImage(8)}
            >
              <Image
                width={800}
                height={828}
                src="/gallery-8.png"
                alt="galleryImages"
              />
            </div>
          </div>
          <div
            className="gallery-element-2 cursor-pointer"
            data-aos="fade-left"
            onClick={() => setImageClick(true)}
          >
            <div
              className="flex justify-start items-center"
              onClick={() => setCurrentImage(9)}
            >
              <Image
                width={800}
                height={828}
                src="/gallery-9.png"
                alt="galleryImages"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
