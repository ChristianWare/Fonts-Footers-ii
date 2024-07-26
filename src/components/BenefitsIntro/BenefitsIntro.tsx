"use client";

import FalseButton from "../FalseButton/FalseButton";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./BenefitsIntro.module.css";

const BenefitsIntro = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <h2 className={styles.heading}>
              Tap into the benefits that come with having your own digital
              platform.
            </h2>
          </div>
          <div className={styles.right}>
            <div className={styles.benefitButtonContainer}>
              <FalseButton text='E-Commerce Stores' btnType='primary' />
              <FalseButton text='Business Websites' btnType='primary' />
              <FalseButton text='Booking Platforms' btnType='primary' />
            </div>
            <p className={styles.copy}>
              Here are the three main services that we offer. Feel free to
              explore the details of each. Please reach out to us any time if
              you have any questions.
            </p>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default BenefitsIntro;
