import React, { useEffect, useState } from "react";
import AOS from "aos";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GalleryCarousel from "../components/GalleryCarousel";

const Gallery = () => {
  const [imageClick, setImageClick] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 750,
    });
  }, []);
  return (
    <div className="relative">
      {imageClick ? (
        <div className="w-full h-full absolute flex justify-center items-center top-0 mt-72">
          <GalleryCarousel />
        </div>
      ) : (
        <div className="gallery-container flex flex-col justify-center items-center overflow-hidden">
          <div className="gallery-segment flex flex-row  justify-around items-center">
            <div
              className="gallery-element"
              data-aos="fade-right"
              onClick={() => setImageClick(true)}
            >
              <div className="flex justify-start items-center">
                <Image
                  width={1026}
                  height={828}
                  src="/cd1.png"
                  alt="galleryImages"
                />
              </div>
            </div>
            <div
              className="gallery-element-2"
              data-aos="fade-left"
              onClick={() => setImageClick(true)}
            >
              <div className="flex justify-start items-center">
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
            <div className="gallery-element" data-aos="fade-right">
              <div className="flex justify-start items-center">
                <Image
                  width={800}
                  height={828}
                  src="/gallery-3.png"
                  alt="galleryImages"
                />
              </div>
            </div>
            <div className="gallery-element-2" data-aos="fade-left">
              <div className="flex justify-start items-center">
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
            <div>
              <div
                className="gallery-element flex justify-start items-center"
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
            <div className="gallery-element" data-aos="fade-right">
              <div className="flex justify-start items-center">
                <Image
                  width={574}
                  height={828}
                  src="/gallery-6.png"
                  alt="galleryImages"
                />
              </div>
            </div>
            <div className="gallery-element-2" data-aos="fade-left">
              <div className="flex justify-start items-center">
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
            <div className="gallery-element" data-aos="fade-right">
              <div className="flex justify-start items-center">
                <Image
                  width={800}
                  height={828}
                  src="/gallery-8.png"
                  alt="galleryImages"
                />
              </div>
            </div>
            <div className="gallery-element-2" data-aos="fade-left">
              <div className="flex justify-start items-center">
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
      )}
    </div>
  );
};

export default Gallery;
