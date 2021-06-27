import React from "react";
import styles from "../styles/About.module.css";
import Link from 'next/link';

const About = () => {
  return (
    <div>
      <div className={styles.bg}>
        <div className={styles.container}>
          <h1 className={styles.title}>Meet Dhiya</h1>
          <div className={styles.person}>
            <img src="/diya.png" className={styles.image} />
            <div className={styles.content}>
              <p>
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
          <img src="/flow2.png" className={styles.leaf} />
          <h1 className={styles.title}>and Roshan</h1>
          <div className={styles.person}>
          <img src="/roshan.png" className={styles.image} />
            <div className={styles.content}>
              <p>
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
      <div className={styles.servicecontainer}>
        <div className={styles.service}>
          <p>
            Every event from a birthday to a wedding can be transformed from
            just a small idea to a magical experience! Take a look at the
            services we offer and get in touch so we can discuss how to
            accommodate your requirements!
          </p>
          <Link href="/services"><button className={styles.button}>OUR SERVICES</button></Link>
        </div>
      </div>
    </div>
  );
};

export default About;
