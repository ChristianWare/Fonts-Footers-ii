"use client";

import ArrowCluster from "../ArrowCluster/ArrowCluster";
import Button from "../Button/Button";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./Cta.module.css";

const Cta = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <div className={styles.topLeft}>
            <div className={styles.arrowContainer}>
              <ArrowCluster />
            </div>
            <h2 className={styles.heading}>
              What to learn more about the benefits of a direct bookking
              website?
            </h2>
            <p className={styles.copy}>
              Feel free to reach out to us anytiime with additional questions.
            </p>
          </div>
          <div className={styles.btnContainer}>
            <Button
              text='Learn More'
              href='/blog/direct-booking-websites-an-airbnb-alternative-for-your-short-term-rentals'
              btnType='primary'
              arrow
            />
            <Button
              text='Contact Us'
              href='/contact'
              btnType='tertiary'
              arrow
            />
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Cta;
