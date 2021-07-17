import React, {useRef} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../styles/Carousel.module.css";
import { useRouter } from 'next/router'
import AOS from "aos";
import { useEffect } from "react";

const GallerySlider = () => {
  const router = useRouter()
  const { id } = router.query
  const sliderRef = useRef();
  useEffect(() => {
    AOS.init({
      duration: 750,
    });
    sliderRef.current.slickGoTo(id);
  });
  const settings = {
    dots: true,
    arrows: true,
    autoplaySpeed: 2500,
    autoplay: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className={styles.slider} ref={sliderRef}>
      <div className={styles.container}>
          <img src='/gallery-1.png' className={styles.image}/>
      </div>
      <div className={styles.container}>
          <img src='/gallery-2.png' className={styles.image}/>
      </div>
      <div className={styles.container}>
         <img src='/gallery-3.png' className={styles.image}/>
      </div>
      <div className={styles.container}>
           <img src='/gallery-4.png' className={styles.image}/>
      </div>
      <div className={styles.container}>
           <img src='/gallery-5.png' className={styles.image}/>
      </div>
      <div className={styles.container}>
          <img src='/gallery-6.png' className={styles.image}/>
      </div>
      <div className={styles.container}>
          <img src='/gallery-7.png' className={styles.image}/>
      </div>
      <div className={styles.container}>
         <img src='/gallery-8.png' className={styles.image}/>
      </div>
      <div className={styles.container}>
          <img src='/gallery-9.png' className={styles.image}/>
      </div>
    </Slider>
  );
};

export default GallerySlider;