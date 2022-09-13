import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import home_styles from "../styles/Home.module.css";
import common_styles from "../styles/Common.module.css";
import Link from "next/link";

const HomePage: NextPage = () => {
  return (
    // <div className={`${common_styles.bg_main}`}>
    <div
      className={`${common_styles.bg_main} ${home_styles.home_page_container}`}
    >
      <div
        className={`${common_styles.space_top}  ${common_styles.container} ${common_styles.full_screen_height}`}
      >
        <p className={`${home_styles.build_on_near}`}>
          <Image
            src={"/images/build-on-near.png"}
            width={619}
            height={187.32}
            alt="Nearlend Dao build on Near"
          />
        </p>
        <Link href="/portfolio">
          <button
            className={`${common_styles.btn_custom} ${home_styles.btn_launch_app}`}
          >
            Launch App
          </button>
        </Link>

        <p className={`${home_styles.main_img_big}`}>
          <Image
            src={"/images/main-img-big.png"}
            width={450}
            height={450}
            alt="NearlendDao"
          />
        </p>

        <p className={`${home_styles.deco_1}`}>
          <Image
            src={"/images/deco-1.png"}
            width={250}
            height={65}
            alt="NearlendDao"
          />
        </p>

        <p className={`${home_styles.deco_2}`}>
          <Image
            src={"/images/deco-2.png"}
            width={250}
            height={70}
            alt="NearlendDao"
          />
        </p>

        <p className={`${home_styles.deco_3}`}>
          <Image
            src={"/images/deco-3.png"}
            width={280}
            height={90}
            alt="Nearlend Dao"
          />
        </p>

        <p className={`${home_styles.logo_usn}`}>
          <Image
            src={"/images/main-logo-usn.png"}
            width={57}
            height={57}
            alt="USN USDT"
          />
        </p>

        <p className={`${home_styles.logo_near}`}>
          <Image
            src={"/images/main-logo-near.png"}
            width={57}
            height={57}
            alt="USN USDT"
          />
        </p>

        <p className={`${home_styles.logo_eth}`}>
          <Image
            src={"/images/main-img-blur-2.png"}
            width={180}
            height={180}
            alt="Ethereum"
          />
        </p>

        <p className={`${home_styles.logo_bitcoin}`}>
          <Image
            src={"/images/main-logo-bit-blur.png"}
            width={240}
            height={240}
            alt="Bitcoin"
          />
        </p>
      </div>
    </div>
    // </div>
  );
};

export default HomePage;
