"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./Features.module.css";
import Image from "next/image";
import Button from "../Button/Button";
import House from "../../../public/images/hero2.png";
import Booking from "../../../public//icons/booking.svg";
import Admin from "../../../public//icons/cog.svg";
import Review from "../../../public//icons/talk.svg";
import CreditCard from "../../../public//icons/payment.svg";
import { motion } from "framer-motion";
import { fadeIn } from "../../../animation/variants";
import FalseButton from "../FalseButton/FalseButton";

const Features = () => {
  const features = [
    {
      service: "Responsive",
      description:
        "We create responsive websites that automatically adapt to any screen size, ensuring a great look on all devices.",
      icon: <Booking width={40} height={40} className={styles.icon} />,
    },
    {
      service: "Accessible",
      description:
        "Our websites are designed for accessibility, enabling people with disabilities to perceive, understand, navigate, and interact with them, ensuring equal access and opportunity.",
      icon: <Review width={40} height={40} className={styles.icon} />,
    },
    {
      service: "Search Engine Optimized",
      description:
        "SEO - Search Engine Optimization - involves optimizing a website's technical setup to improve findability, boost credibility, increase traffic, and enhance online visibility.",
      icon: <Admin width={40} height={40} className={styles.icon} />,
    },
    {
      service: "Page Speed Optimized",
      description:
        "Optimizing your website increases traffic, converts visitors into customers, and enhances user experience with page load times of 3 seconds or less.",
      icon: <CreditCard width={40} height={40} className={styles.icon} />,
    },
  ] as const;

  return (
    <section className={styles.parent}>
      <div className={styles.falseBtnContainer}>
        <FalseButton btnType='primary' text='Features Of All Our Websites' />
      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.lTop}>
            <div className={styles.test}>
              {features.slice(0, 4).map((x, index) => (
                <div key={index} className={styles.featureContainer}>
                  <div>{x.icon}</div>
                  <h4 className={styles.service}>{x.service}</h4>
                  <p className={styles.desc}>{x.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.left}>
          <div className={styles.box1}>
            <Image
              src={House}
              alt='Direct Booking Website'
              fill
              className={styles.img}
            />
          </div>
          <div className={styles.box2}>
            <h3 className={styles.h3}>Our Features</h3>
            <p className={styles.copy}>
              Having certain expected features on your direct booking site is
              crucial for ensuring a positive user experience and maximizing
              conversions. Meeting these expectations not only enhances customer
              satisfaction but also establishes credibility and fosters repeat
              business.
            </p>
            <div className={styles.btnContainer}>
              <Button
                text='All Services and features'
                href='/pricing/#features'
                btnType='primary'
                arrow
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Features;
