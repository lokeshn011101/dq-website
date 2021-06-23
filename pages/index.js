import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeSlider = () => {
  const settings = {
    arrows: true,
    autoplaySpeed: 1500,
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="b1 h-full mx-auto ">
        <Image
          src="/b1.png"
          width={1920}
          height={1052}
          className="nav-logo-im cursor-pointer  flex justify-center items-center mx-auto"
          alt="Design Quotient"
        />
      </div>
      <div className="b2 h-full mx-auto ">
        <Image
          src="/b2.png"
          width={1920}
          height={1052}
          className="nav-logo-im cursor-pointer flex justify-center items-center  mx-auto"
          alt="Design Quotient"
        />
      </div>
      <div className="b3 h-full mx-auto ">
        <Image
          src="/b3.png"
          width={1920}
          height={1052}
          className="nav-logo-im cursor-pointer flex justify-center items-center  mx-auto"
          alt="Design Quotient"
        />
      </div>
    </Slider>
  );
};

const Home = () => {
  return (
    <div className="overflow-hidden">
      <div className="hmeslider">
        <HomeSlider />
      </div>
      <div className="section md:px-24 sm:px-10 smm:px-8 flex flex-col justify-center items-center">
        <div className="text-3xl mb-10 mt-16 flex flex-row smm:flex-col justify-center items-center">
          <div>~</div>
          <div className="text-center mx-2"> Where Dreams, Come Alive! </div>
          <div>~</div>
        </div>
        <div className="text-lg text-center w-11/12 mdd:w-full">
          What we do best is creating personalized, immersive spaces that set
          the stage for life’s most cherished moments. Our goal is to help
          establish, interpret and elevate our client’s vision to the highest
          level. There is no limit to creativity. We believe anything a client
          wants is possible and it’s our job to turn those dreams into reality.
          All aspects of the event - from design and decor, to florals and
          production are all handled by our highly skillful in-house team!
        </div>
      </div>
      <div className="homeflow flex justify-center items-center md:my-24 mdd:my-16 smm:my-10">
        <div className="nav-logo w-full smm:w-7/12 flex justify-center items-center">
          <Image src="/flow1.png" width={473} height={194} />
        </div>
      </div>
      <div className="homeflow flex justify-center items-center md:my-24 mdd:my-16 smm:my-10">
        <div className="nav-logo w-full smm:w-5/12 flex justify-center items-center">
          <Image src="/flow2.png" width={192} height={157} />
        </div>
      </div>
    </div>
  );
};

export default Home;
