import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import QuoteTile from "../components/QuoteTile";
import AOS from "aos";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { useEffect, useState } from "react";

const HomeSlider = () => {
  useEffect(() => {
    AOS.init({
      duration: 750,
    });
  }, []);
  const settings = {
    arrows: true,
    autoplaySpeed: 3500,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="mx-auto">
        <div className="b1 h-full mx-auto ">
          <Image
            src="/b1.png"
            width={1920}
            height={1052}
            className="nav-logo-im cursor-pointer flex justify-center items-center mx-auto"
            alt="Design Quotient"
          />
        </div>
      </div>
      <div className="mx-auto">
        <div className="b2 mx-auto ">
          <Image
            src="/b2.png"
            width={1920}
            height={1052}
            className="nav-logo-im cursor-pointer flex justify-center items-center  mx-auto"
            alt="Design Quotient"
          />
        </div>
      </div>
      <div className="mx-auto">
        <div className="b3 h-full mx-auto ">
          <Image
            src="/b3.png"
            width={1920}
            height={1052}
            className="nav-logo-im cursor-pointer flex justify-center items-center  mx-auto"
            alt="Design Quotient"
          />
        </div>
      </div>
    </Slider>
  );
};

const HomeFooterItem = ({ comment, by, place }) => {
  useEffect(() => {
    AOS.init({
      duration: 750,
    });
  }, []);
  return (
    <div className="comment flex flex-col justify-center items-center md:w-9/12 sm:w-10/12 w-11/12 z-50">
      <div
        className="cmt font-light italic text-center md:pt-10 mdd:pt-8 smm:pt-6 md:pb-5 mdd:pb-4 smm:pb-3 md:leading-10 leading-6 md:text-lg text-base  z-50"
        data-aos="fade-left"
      >
        {comment}
      </div>
      <div className="name-place flex flex-row md:pb-10 mdd:pb-8 smm:pb-6  z-50">
        <span
          className="cmt-by uppercase tracking-widest smm:text-sm z-50"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          {by}
        </span>
        <span
          className="ml-2 place italic font-light tracking-widest smm:text-sm z-50 "
          data-aos="fade-left"
          data-aos-delay="300"
        >
          {place}
        </span>
      </div>
    </div>
  );
};

const Home = () => {
  const [winWidth, setWinWidth] = useState(0);
  const [x1, setX1] = useState(-10);
  const [x2, setX2] = useState(100);
  const [y1, setY1] = useState(-90);
  const [y2, setY2] = useState(-130);
  useEffect(() => {
    AOS.init({
      duration: 750,
    });
    setWinWidth(window.innerWidth);
    if (window.innerWidth <= 450) setX2(160);
  }, []);
  return (
    <ParallaxProvider>
      <div className="overflow-hidden">
        <div className="hmeslider" data-aos="fade-in" data-aos-duration="1500">
          <HomeSlider />
        </div>
        <div className="section md:px-24 sm:px-10 smm:px-8 flex flex-col justify-center items-center">
          <div
            className="text-3xl mb-10 md:mt-24 smm:mt-10 mt-16 flex flex-row smm:flex-col justify-center items-center"
            data-aos="fade-up"
          >
            <div className=" font-adelia">~</div>
            <div className="headings text-center mx-2 smm:my-2 font-adelia">
              {" "}
              Where Dreams, Come Alive!{" "}
            </div>
            <div className=" font-adelia">~</div>
          </div>
          <div
            className="text-center w-8/12 mdd:w-full md:leading-10 leading-6 md:text-lg text-base font-light"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            What we do best is creating personalized, immersive spaces that set
            the stage for life’s most cherished moments. Our goal is to help
            establish, interpret and elevate our client’s vision to the highest
            level. There is no limit to creativity. We believe anything a client
            wants is possible and it’s our job to turn those dreams into
            reality. All aspects of the event - from design and decor, to
            florals and production are all handled by our highly skillful
            in-house team!
          </div>
        </div>
        <div
          className="homeflow flex justify-center items-center md:my-32 mdd:my-20 smm:my-14"
          data-aos="fade-in"
          data-aos-duration="2000"
        >
          <div className="w-full smm:w-7/12 flex justify-center items-center">
            <Image src="/flow1.png" width={473} height={194} />
          </div>
        </div>
        <div>
          <QuoteTile
            data-aos-bg="fade-in"
            data_aos_text="fade-down"
            data_aos_button="fade-up"
            data_aos_button-delay="250"
            text="Every event from a birthday to a wedding can be transformed from just a small idea to a magical experience! Take a look at the
services we offer and get in touch so we can discuss how to accommodate your requirements!"
            buttext="OUR SERVICES"
          />
        </div>
        <div
          className="homeflow flex justify-center items-center md:my-32 mdd:my-20 smm:my-14"
          data-aos="fade-in"
          data-aos-duration="2000"
        >
          <div className="w-full smm:w-5/12 flex justify-center items-center">
            <Image src="/flow2.png" width={192} height={157} />
          </div>
        </div>

        <div className="home-footer">
          <div
            className="home-footer-title text-3xl mb-10 mt-16 flex flex-row smm:flex-col justify-center items-center"
            data-aos="fade-up"
          >
            <div className=" font-adelia">~</div>
            <div className="text-center mx-2 font-adelia"> Testimonials </div>
            <div className=" font-adelia">~</div>
          </div>

          <div className="flex justify-center items-center w-full ">
            <div
              className="home-ft-ban w-8/12 smm:w-10/12 flex justify-center items-center lg:-mb-96 md:-mb-80 sm:-mb-72 smm:-mb-56 z-50"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Image src="/home-footer.png" width={1198} height={801} />
            </div>
          </div>

          <Parallax className="custom-class" y={[x1, x2]} tagOuter="figure">
            <div className="flex justify-start items-end w-full lg:pl-30 md:pl-24 sm:pl-14 smm:pl-5">
              <div className="flex justify-start items-start lg:w-full md:w-8/12 sm:w-7/12 smm:w-3/12 z-0">
                <Image src="/left.png" width={213} height={350} />
              </div>
            </div>
          </Parallax>
          <div className="pb-24 md:pt-28 sm:pt-30 smm:pt-24 bg-gray-200 flex flex-col justify-center items-center ">
            <HomeFooterItem
              comment='"Dhiya is My May angel. It’s been 6 years since I have known her and there is truly no better! She paints my vision so perfectly
and brings them to reality every May on my son’s birthday! She looks into the finest detail and works towards it tirelessly.
Be it the most uncommon theme like a story from your child’s favourite book or a self made character, she brings the theme
to reality and creates a complete adventure on that very special day, building special memories for years to come.
My father used to love decor and ensured every birthday of mine as a child felt exactly the way I wanted it to feel.
When he saw Dhiya’s work at my son’s birthday, he was overjoyed and pleased to have known someone in Chennai
who does her work so passionately and perfectly. She is a gift to Chennai and a blessing to every enthusiastic mother."'
              by="RITIKA JAIN, "
              place=" Chennai"
            />
            <HomeFooterItem
              comment='"Dhiya’s expertise and detail to attention is second to none. There’s nothing much we have to do while planning
an event other than deciding on the theme. And she brings to life what we wouldn’t have even envisioned.
I can’t recommend her enough, especially if you have a special occasion planned for your loved ones."'
              by="PAVITRA SAGAR, "
              place=" Founder @stylemuse"
            />
            <HomeFooterItem
              comment='"Dhiya’s work is outstanding!! She has made my sons birthdays truly magical. From swimming “under the sea” to walking around
a “ Dinasaur park”, each and every one of them has been unforgettable! Your decor never fails to amaze me and our guests!!
Thank you Dhiya for also always making it super easy and stressfree to plan birthday parties."'
              by="RITIKA RAI REDDY, "
              place=" Chennai"
            />
          </div>
          <Parallax className="custom-class" y={[y1, y2]} tagOuter="figure">
            <div className="flex justify-end items-end w-full lg:pr-30 md:pr-24 sm:pr-14 smm:pr-5">
              <div className="flex justify-end items-end lg:w-full md:w-8/12 sm:w-7/12 smm:w-3/12 z-0">
                <Image src="/right.png" width={213} height={350} />
              </div>
            </div>
          </Parallax>
        </div>
      </div>
    </ParallaxProvider>
  );
};

export default Home;
