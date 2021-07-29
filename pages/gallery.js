import React, { useEffect, useState } from "react";
import AOS from "aos";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageGallaryComponent from "../components/ImageGallaryComponent";

// const GallerySlider = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 750,
//     });
//   }, []);
//   const settings = {
//     arrows: true,
//     autoplaySpeed: 2500,
//     autoplay: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     dots: true,
//   };
//   return (
//     <Slider {...settings}>
//       <div className="mx-auto">
//         <div className="b1 h-full mx-auto ">
//           <img src="/gallery-1.png" />
//         </div>
//       </div>
//       <div className="mx-auto">
//         <div className="b2 mx-auto ">
//           <img src="/gallery-2.png" />
//         </div>
//       </div>
//       <div className="mx-auto">
//         <div className="b3 h-full mx-auto ">
//           <img src="/gallery-3.png" />
//         </div>
//       </div>
//       <div className="mx-auto">
//         <div className="b4 h-full mx-auto ">
//           <img src="/gallery-4.png" />
//         </div>
//       </div>
//       <div className="mx-auto">
//         <div className="b5 h-full mx-auto ">
//           <img src="/gallery-5.png" />
//         </div>
//       </div>
//       <div className="mx-auto">
//         <div className="b6 h-full mx-auto ">
//           <img src="/gallery-6.png" />
//         </div>
//       </div>
//       <div className="mx-auto">
//         <div className="b7 h-full mx-auto ">
//           <img src="/gallery-7.png" />
//         </div>
//       </div>
//       <div className="mx-auto">
//         <div className="b8 h-full mx-auto ">
//           <img src="/gallery-8.png" />
//         </div>
//       </div>
//       <div className="mx-auto">
//         <div className="b9 h-full mx-auto ">
//           <img src="/gallery-9.png" />
//         </div>
//       </div>
//     </Slider>
//   );
// };

const Gallery = () => {
  const [imageClick, setImageClick] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 750,
    });
  }, []);
  return (
    <div className="flex flex-col justify-center items-center my-10 mx-14">
      <ImageGallaryComponent />

      {/* {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <GallerySlider />
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>*/}
    </div>
  );
};

export default Gallery;
