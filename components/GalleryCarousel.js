import React, { useState, useRef } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const GalleryCarousel = ({ setImageClick, currentImage, images }) => {
  const ref = useRef();
  const [photoIndex, setPhotoIndex] = useState(currentImage - 1);

  return (
    <div
      className="gallery-carousel-container mt-30"
      id="gallery-carousel-container"
    >
      <div ref={ref} className="text-white gallery-carousel">
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setImageClick(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      </div>
    </div>
  );
};

export default GalleryCarousel;
