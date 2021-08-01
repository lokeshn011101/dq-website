import Link from "next/link";
import React from "react";
import Image from "next/image";
import AOS from "aos";
import { useEffect } from "react";

const ServicesItem = ({ title, imgg, linkto, desc, idd }) => {
  useEffect(() => {
    AOS.init({
      duration: 750,
    });
  }, []);
  return (
    <div className="services-item" id={idd}>
      <div
        className="text-3xl flex flex-row smm:flex-col justify-center items-center lg:my-8 md:my-6 sm:my-5 smm:my-4"
        data-aos="fade-up"
      >
        <div>~</div>
        <div className="headings text-center mx-2 font-adelia lg:my-10 md:my-8 sm:my-7 smm:my-6">
          {title}{" "}
        </div>
        <div>~</div>
      </div>
      <div
        className="services-image flex justify-center items-center"
        data-aos="fade-up"
      >
        <div className="w-8/12 smm:w-full flex justify-center items-center">
          <Image src={imgg} width={1640} height={900} alt="services-images" />
        </div>
      </div>
      <div
        className="services-description text-center lg:mt-8 md:mt-7 sm:mt-6 smm:mt-5 lg:w-8/12 md:w-9/12 sm:w-10/12 smm:w-11/12 md:leading-10 leading-6 sm:leading-8 md:text-lg text-base font-light mx-auto"
        data-aos="fade-up"
      >
        {desc}
      </div>
      <div
        className="services-link flex justify-center items-center lg:my-10 md:my-8 sm:my-7 smm:my-6 "
        data-aos="fade-up"
      >
        <div className="serv-link px-10 py-4 ">
          <Link href={linkto}>VIEW GALLERY</Link>
        </div>
      </div>
      <div
        className="services-flower flex justify-center items-center lg:my-20 md:my-16 sm:my-12 smm:my-10 "
        data-aos="fade-in"
        data-aos-duration="2000"
      >
        <div className="lg:w-8/12 md:w-7/12 sm:w-6/12 smm:w-5/12 flex justify-center items-center">
          <Image
            src="/serv-flow.png"
            width={304}
            height={75}
            alt="services-images"
          />
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 750,
    });
  }, []);
  const data = [
    [
      "Curated Decor",
      "Bespoke is the blueprint. If you want one-of-a-kind decor, look no further. We specialize in highly personalized, handmade decor so the sky is the limit here! No detail is too small or too big when it comes to realizing your vision for the event of your dreams! We believe in sustainable design, which means building props by hand, locally, and reusing with thought and care to minimize our carbon footprint.",
      "/curated-decor-serv.png",
      "/gallery/curated-decor",
      "curated-decor",
    ],

    [
      "Themed Event Design",
      "We approach each project with a fresh perspective and strive to create design concepts that adhere to the theme and also feel specific to each client. We do our best to identify their personal taste and then infuse that into the theme to make the event all the more special.",
      "/themed-event-design-serv.png",
      "/gallery/themed-event-design",
      "themed-event-design",
    ],
    [
      "Floristry",
      "The benefit of having our in-house team for floristry is that we can incorporate the surrounding landscape and details of the location into our design so that the flowers work seamlessly within their setting. We are very keen on supporting local vendors and always like to use seasonal flowers, local to the area- they also have the added benefit of being at their freshest and fullest bloom!",
      "/floristry-serv.png",
      "/gallery/floristry",
      "floristry",
    ],
    [
      "Luxury Wedding Design",
      "Luxury with heart, a splash of whimsy, and lots of personality. We want to infuse your individual stories and personalities into your wedding day through thoughtful and meaningful design. We offer unparalleled style and luxurious design for weddings at any scale.",
      "/luxury-wedding-design-serv.png",
      "/gallery/luxury-wedding-design",
      "luxury-wedding-design",
    ],

    [
      "Kids Parties",
      "Want to throw a party befitting your little prince or princess? From show-stopping first birthdays to kiddie parties themed after whatever your little one can’t stop talking about (cowboys, space… cowboys in space?) We’re ready to take on the challenge and help you make them the happiest kid in the world for a day!",
      "/kids-parties-serv.png",
      "/gallery/kids-parties",
      "kids-parties",
    ],

    [
      "Customised Packaging",
      "Because sometimes it's okay to judge a book by its cover! Why shouldn't your wedding favours or return gifts look just as spectacular as your event decor!",
      "/customised-packaging-serv.png",
      "/gallery/customised-packaging",
      "customised-packaging",
    ],
  ];
  return (
    <div className="services">
      <div className="services-banner flex justify-center items-center ">
        <div className="w-full relative flex justify-center items-center">
          <Image
            src="/services-banner.png"
            width={1920}
            height={973}
            alt="services-images"
          />
          <div className="setxt absolute px-8 right-0 text-white font-adelia text-center lg:text-4xl md:text-2xl sm:text-xl smm:text-base ">
            ~ Thoughtful and Authentic moments ~
          </div>
        </div>
      </div>
      <div
        className="services-description text-center lg:mt-14 md:mt-12 sm:mt-10 smm:mt-8 lg:w-8/12 md:w-9/12 sm:w-10/12 smm:w-11/12 md:leading-9 leading-6 md:text-lg text-base font-light mx-auto"
        data-aos="fade-up"
      >
        <div>
          We go beyond typical event planning and design services to bring your
          visions to life for your special day.
        </div>
        <div>
          Read on to know what all we have to offer! Get in touch, let’s have a
          ball taking your party to new heights together!
        </div>
      </div>
      <div
        className="services-flower flex justify-center items-center lg:my-16 md:my-14 sm:my-10 smm:my-8"
        data-aos="fade-in"
        data-aos-duration="2000"
      >
        <div className="lg:w-8/12 md:w-7/12 sm:w-6/12 smm:w-5/12 flex justify-center items-center">
          <Image
            src="/serv-flow1.png"
            width={201}
            height={230}
            alt="services-images"
          />
        </div>
      </div>
      {data.map((el, i) => (
        <ServicesItem
          key={i}
          title={el[0]}
          desc={el[1]}
          imgg={el[2]}
          linkto={el[3]}
          idd={el[4]}
        />
      ))}
    </div>
  );
};

export default Services;
