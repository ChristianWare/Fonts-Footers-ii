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
              <FalseButton text='Higher Margins' btnType='primary' />
              <FalseButton text='Brand Presence' btnType='primary' />
              <FalseButton text='Direct Communication' btnType='primary' />
              <FalseButton text='Enhanced Marketing' btnType='primary' />
              <FalseButton text='Long-term Relationships' btnType='primary' />
              <FalseButton text='Competitive Advantage' btnType='primary' />
            </div>
            <p className={styles.copy}>
              Imagine waving goodbye to hefty service fees and welcoming a surge
              in profitability for your rental home. The secret? Tapping into
              the benefits that come with owning your digital platform. In an
              era where every penny counts, a vacation rental direct website
              might be the edge you need.
            </p>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default BenefitsIntro;
