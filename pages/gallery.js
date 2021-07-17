import React, { useEffect , useState} from "react";
import styles from "../styles/Gallery.module.css";
import AOS from "aos";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ModalComponent = (props) => {
  return (
    <div>
      <div>hi</div>
      <button onClick={() => props.close}>close</button>
    </div>
  )
}

const GallerySlider = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 750,
    });
  }, []);
  const settings = {
    arrows: true,
    autoplaySpeed: 2500,
    autoplay: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
  };
  return (
    <Slider {...settings}>
      <div className="mx-auto">
        <div className="b1 h-full mx-auto ">
          <img src="/gallery-1.png"  />
        </div>
      </div>
      <div className="mx-auto">
        <div className="b2 mx-auto ">
          <img src="/gallery-2.png"  />
        </div>
      </div>
      <div className="mx-auto">
        <div className="b3 h-full mx-auto ">
         <img src="/gallery-3.png"  />
        </div>
      </div>
      <div className="mx-auto">
        <div className="b4 h-full mx-auto ">
        <img src="/gallery-4.png"  />
        </div>
      </div>
      <div className="mx-auto">
        <div className="b5 h-full mx-auto ">
        <img src="/gallery-5.png"  />
        </div>
      </div>
      <div className="mx-auto">
        <div className="b6 h-full mx-auto ">
        <img src="/gallery-6.png"  />
        </div>
      </div>
      <div className="mx-auto">
        <div className="b7 h-full mx-auto ">
         <img src="/gallery-7.png" />
        </div>
      </div>
      <div className="mx-auto">
        <div className="b8 h-full mx-auto ">
        <img src="/gallery-8.png" />
        </div>
      </div>
      <div className="mx-auto">
        <div className="b9 h-full mx-auto ">
         <img src="/gallery-9.png"  />
        </div>
      </div>
    </Slider>
  );
};


const Gallery = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () =>{
     setShowModal(true);
  }
  const closeModal = (e) =>{
    e.preventDefault();
    console.log('hi');
    setShowModal(false);
  }
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.row1}>
        <div className={styles.image} onClick={openModal}>
          <img src="/gallery-1.png" data-aos="fade-left" />
          {showModal ? (
            <>
             <div>
              <div>hi</div>
              {/* should render gallery slider here*/}
              <button onClick={closeModal}>close</button>
              </div>
            </>
          ) : null}
        </div>
        <div className={styles.image} onClick={openModal}>
          <img src="/gallery-2.png" data-aos="fade-left" />
        </div>
      </div>
      <div className={styles.even}>
        <div className={styles.image} onClick={openModal}>
          <img src="/gallery-3.png" data-aos="fade-right" />
        </div>
        <div className={styles.image} onClick={openModal}>
          <img src="/gallery-4.png" data-aos="fade-right" />
        </div>
      </div>
      <div className={styles.one}>
        <div className={styles.image} onClick={openModal}>
          <img src="/gallery-5.png" data-aos="fade-left" />
        </div>
      </div>
      <div className={styles.row2}>
        <div className={styles.image} onClick={openModal}>
          <img src="/gallery-6.png" data-aos="fade-right" />
        </div>
        <div className={styles.image} onClick={openModal}>
          <img src="/gallery-7.png" data-aos="fade-right" />
        </div>
      </div>
      <div className={styles.even}>
        <div className={styles.image} onClick={openModal}>
          <img src="/gallery-8.png" data-aos="fade-left" />
        </div>
        <div className={styles.image} onClick={openModal}>
          <img src="/gallery-9.png" data-aos="fade-left" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
