import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Gallery from "react-grid-gallery";

const IMAGES = [
  {
    src: "/cd1.png",
    thumbnail: "/cd1.png",
    thumbnailWidth: 1026,
    thumbnailHeight: 828,
  },
  {
    src: "/cd2.png",
    thumbnail: "/cd2.png",
    thumbnailWidth: 574,
    thumbnailHeight: 1000,
  },
  {
    src: "/gallery-3.png",
    thumbnail: "/gallery-3.png",
    thumbnailWidth: 800,
    thumbnailHeight: 828,
  },
  {
    src: "/cd6.png",
    thumbnail: "/cd6.png",
    thumbnailWidth: 800,
    thumbnailHeight: 828,
  },
  {
    src: "/gallery-5.png",
    thumbnail: "/gallery-5.png",
    thumbnailWidth: 1640,
    thumbnailHeight: 884,
  },
  {
    src: "/gallery-6.png",
    thumbnail: "/gallery-6.png",
    thumbnailWidth: 574,
    thumbnailHeight: 828,
  },
  {
    src: "/gallery-7.png",
    thumbnail: "/gallery-7.png",
    thumbnailWidth: 1026,
    thumbnailHeight: 828,
  },
  {
    src: "/gallery-8.png",
    thumbnail: "/gallery-8.png",
    thumbnailWidth: 800,
    thumbnailHeight: 828,
  },
  {
    src: "/gallery-9.png",
    thumbnail: "/gallery-9.png",
    thumbnailWidth: 800,
    thumbnailHeight: 828,
  },
];

class ImageGallaryComponent extends React.Component {
  render() {
    return (
      <div className="w-full">
        <div className="gal1 mx-auto h-screen">
          <Gallery
            images={IMAGES}
            enableLightbox={true}
            maxRows={16}
            margin={4}
            rowHeight={500}
            backdropClosesModal
            // currentImage={3}
            // isOpen={ true}
          />
        </div>
      </div>
    );
  }
}

export default ImageGallaryComponent;
