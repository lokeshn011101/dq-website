import React, { useEffect } from "react";
import styles from "../styles/Gallery.module.css";
import AOS from "aos";

const Gallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    
    <div className={styles.container}>
      <div className={styles.row1}>
        <div>
          <img src="/gallery-1.png" data-aos="fade-left" className={styles.gal2}/>
        </div>
        <div >
        <img src="/gallery-2.png" data-aos="fade-left" className={styles.gal2}/>
        </div>
      </div>
      <div className={styles.even}>
        <div>
          <img src="/gallery-3.png" data-aos="fade-right" className={styles.gal2} />
        </div>
        <div>
          <img src="/gallery-4.png" data-aos="fade-right" className={styles.gal2} />
        </div>
      </div>
      <div className={styles.one}>
        <div>
          <img src="/gallery-5.png" data-aos="fade-left" className={styles.gal2}/>
        </div>
      </div>
      <div className={styles.row2}>
        <div>
          <img src="/gallery-6.png" data-aos="fade-right" className={styles.gal2}/>
        </div>
        <div>
          <img src="/gallery-7.png" data-aos="fade-right" className={styles.gal2}/>
        </div>
      </div>
      <div className={styles.even}>
        <div>
          <img src="/gallery-8.png" data-aos="fade-left" className={styles.gal2}/>
        </div>
        <div>
          <img src="/gallery-9.png" data-aos="fade-left" className={styles.gal2} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
