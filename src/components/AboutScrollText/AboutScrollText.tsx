"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./AboutScrollText.module.css";
import animationData from "../../../public/lottie/agency.json";
import Lottie from "lottie-react";
import Button from "../Button/Button";

const AboutScrollText = () => {
  return (
    <section className={styles.bgColor}>
      <LayoutWrapper color='green3'>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.lottieBox}>
              <Lottie animationData={animationData} className={styles.lottie} />
            </div>
          </div>
          <div className={styles.right}>
            <h2 className={`${styles.heading} h2v2`}>
              What exactly is
              <br />
              <span className={styles.span}> Fonts & Footers?</span>
            </h2>
            <p className={styles.text}>
              Fonts & Footers is a digital agency focusing on web design, web
              development, and SEO. We&apos;re experts at blending the latest
              technology with creative ideas for top-notch results. By working
              with us, you get personal care, support, and a website that boosts
              engagement and sales. We opperate out of sunny Phoenix, AZ.
            </p>
            <br />
            <p className={styles.text}>
              We use cutting-edge technology to craft websites that outperform
              those built on platforms like Wordpress, Wix, or Godaddy, which
              often rely on older, slower, and outdated technology. Our approach
              involves using pure HTML, CSS, and Javascript code, ensuring a
              sleek and efficient website.
            </p>
            <p className={styles.authorDetails}>
              ~ Chris Ware, Founder & CEO ~
            </p>
            <div className={styles.btnContainer}>
              <Button text='More About Us' href='/about' btnType='secondary' />{" "}
              <div></div>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default AboutScrollText;
