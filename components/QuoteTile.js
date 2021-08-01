import React from "react";
import styles from "../styles/About.module.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import AOS from "aos";

const QuoteTile = ({
  text,
  buttext,
  data_aos_text = "",
  data_aos_button = "",
  data_aos_button_delay = "",
  data_aos_text_delay = "",
}) => {
  useEffect(() => {
    AOS.init({
      duration: 750,
    });
  }, []);
  const router = useRouter();
  return (
    <div
      className="servicestile flex flex-col justify-center items-center w-full"
      data-aos="fade-in"
    >
      <div
        className="text-base md:text-xl text-center lg:w-9/12 md:w-10/12 mdd:w-11/12 lg:pt-14 lg:pb-2 md:pt-10 md:pb-1 mdd:pt-8 mdd:pb-1 md:leading-10 leading-6"
        data-aos={data_aos_text}
        data-aos-delay={data_aos_text_delay}
      >
        {text}
      </div>
      <div
        className="w-full mx-auto flex justify-center items-center lg:pb-14 md:pb-10 mdd:pb-8 "
        data-aos={data_aos_button}
        data-aos-delay={data_aos_button_delay}
      >
        <button
          className={styles.button}
          onClick={() => router.push("/services")}
        >
          {buttext}
        </button>
      </div>
    </div>
  );
};

export default QuoteTile;
