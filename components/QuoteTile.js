import React from "react";
import styles from "../styles/About.module.css";
import { useRouter } from "next/router";

const QuoteTile = ({ text, buttext }) => {
  const router = useRouter();
  return (
    <div className="servicestile flex flex-col justify-center items-center w-full">
      <div className="text-base md:text-lg text-center lg:w-9/12 md:w-10/12 mdd:w-11/12 lg:py-14 md:py-10 mdd:py-8 md:leading-10 leading-6">
        {text}
      </div>
      <div className="w-full mx-auto flex justify-center items-center lg:pb-14 md:pb-10 mdd:pb-8 ">
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
