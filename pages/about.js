import React, { useEffect } from "react";
import styles from "../styles/About.module.css";
import QuoteTile from "../components/QuoteTile";
import Image from "next/image";
import AOS from "aos";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 750,
    });
  }, []);
  return (
    <div>
      <div className={styles.bg}>
        <div className={styles.container}>
          <h1
            className="title font-adelia text-center py-12 pt-16 text-3xl "
            data-aos="fade-left"
          >
            Meet Dhiya
          </h1>
          <div className={styles.person}>
            <div className="flex justify-start items-center mdd:w-full md:w-6/12 overflow-hidden">
              <div
                className="flex justify-start items-center"
                data-aos="fade-left"
                data-aos-delay="500"
              >
                <Image
                  src="/diya.png"
                  width={656}
                  height={900}
                  className={styles.image}
                  alt="Diya DQ"
                />
              </div>
            </div>
            <div className={styles.content}>
              <p
                className="text-xl leading-10 smm:leading-6 smm:text-base"
                data-aos="fade-right"
                data-aos-delay="500"
              >
                Each event is carefully designed and coordinated by our founder{" "}
                <span className={styles.bold}>Dhiya D’Rosario </span>
                Her strength is to take care of all the little things you hadn’t
                thought of with the best attention to detail in everything!
                Dhiya has a degree in Visual communication, she then went on to
                pursue her masters in Electronic design in Melbourne, Australia.
                She worked as a textile designer in Melbourne so her
                understanding of textures & style runs deep. She then dabbled in
                interior design for homes and offices for a few years in Chennai
                and Bangalore. Doing interiors gave her a clear understanding of
                space and structures, adding a valuable understanding of the
                technical aspects of event design and decor. Her love of
                transforming ordinary spaces into poetic ones found a perfect
                match in event planning and led her to pursue a career in event
                design.
              </p>
            </div>
          </div>
          <img src="/flow2.png" className={styles.leaf} data-aos="fade-in" />
          <div className="overflow-hidden">
            <h1
              className="title font-adelia text-center py-12 text-3xl "
              data-aos="fade-left"
            >
              and Roshan
            </h1>
          </div>
          <div className={styles.person}>
            <div className="flex justify-start items-center mdd:w-full md:w-6/12 overflow-hidden">
              <div
                className="flex justify-start items-center"
                data-aos="fade-left"
                data-aos-delay="500"
              >
                <Image
                  src="/roshan.png"
                  width={656}
                  height={900}
                  className={styles.image}
                  alt="Roshan DQ"
                />
              </div>
            </div>
            <div className={styles.content}>
              <p
                className="text-xl leading-10 smm:leading-6 smm:text-base"
                data-aos="fade-right"
              >
                The brain behind the business side of things here at DQ,{" "}
                <span className={styles.bold}>Roshan Kalyan </span> takes care
                of the logistics behind the whole operation and with her MBA
                from LIBA, we're sure we've left all the business matters in her
                very capable hands! She has an exquisite eye for detail and can
                source pretty much anything under the sun at great rates! Near
                enough is NEVER good enough with her! You can count on our
                resident perfectionist to only settle for the best for your
                events.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:my-36 md:my-28 sm:my-20 smm:my-16">
        <QuoteTile
          data_aos_text="fade-down"
          data_aos_button="fade-up"
          data_aos_button-delay="250"
          text="Every event from a birthday to a wedding can be transformed from just a small idea to a magical experience! Take a look at the
services we offer and get in touch so we can discuss how to accommodate your requirements!"
          buttext="OUR SERVICES"
        />
      </div>
    </div>
  );
};

export default About;
