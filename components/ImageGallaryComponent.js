import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Gallery from "react-grid-gallery";

const IMAGES = [
  
    {
        src: "/gallery-1.png",
        thumbnail:
        "/gallery-1.png",
      thumbnailWidth: "100%",
      
      
      
    },
    
    {
        src: "/gallery-2.png",
        thumbnail:
        "/gallery-2.png",
      thumbnailWidth: "100%",
        
      thumbnailHeight: 828
    },
    {
        src: "/gallery-3.png",
        thumbnail:
        "/gallery-3.png",
      thumbnailWidth: "100%",
        
      thumbnailHeight: 828
    },
    {
        src: "/gallery-4.png",
        thumbnail:
        "/gallery-4.png",
      thumbnailWidth: "100%",
        
      thumbnailHeight: 828
    },
    {
        src: "/gallery-4.png",
        thumbnail:
        "/gallery-4.png",
      thumbnailWidth: "100%",
        
      thumbnailHeight: 828
    },
    {
        src: "/gallery-5.png",
        thumbnail:
        "/gallery-5.png",
      thumbnailWidth: "100%",
        
      thumbnailHeight: 828
    },
    {
        src: "/gallery-6.png",
        thumbnail:
        "/gallery-6.png",
      thumbnailWidth: "100%",
        
      thumbnailHeight: 828
    },
    {
        src: "/gallery-7.png",
        thumbnail:
        "/gallery-7.png",
      thumbnailWidth: "100%",
        
      thumbnailHeight: 828
    },
    {
        src: "/gallery-8.png",
        thumbnail:
        "/gallery-8.png",
      thumbnailWidth: "100%",
        
      thumbnailHeight: 828
    },
    {
        src: "/gallery-9.png",
        thumbnail:
        "/gallery-9.png",
      thumbnailWidth: "100%",
        
      thumbnailHeight: 828
    },

    
  ];

class ImageGallaryComponent extends React.Component {

    
      
      
    
    
    
    
    render() {
        return (
            <div className="gal1">
                <h2>My Image Gallery</h2>
                <Gallery
                  images={IMAGES}
                  enableLightbox={true}
                  maxRows={16}
                  margin={4}
                  rowHeight={400}
                  backdropClosesModal
                  // currentImage={3}
                  // isOpen={ true}
                />
                
            </div>
        )
    };
}

export default ImageGallaryComponent;