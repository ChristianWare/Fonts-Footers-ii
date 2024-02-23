"use client";

import { useState } from "react";
import ArrowCluster from "../ArrowCluster/ArrowCluster";
import Button from "../Button/Button";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./Faqs.module.css";
import { faqs } from "@/lib/data";
import Arrow2 from "../../../public/icons/arrow2.svg";

const Faqs = () => {
  const [selected, setSelected] = useState<null | number>(null);

  const toggle = (i: any) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <section>
      <LayoutWrapper>
        <div className={styles.top}>
          <div className={styles.topLeft}>
            <h2 className={styles.heading}>
              Direct Booking Frequently asked questions
            </h2>
            <p className={styles.copy}>
              Here are some commonly asked questions and their answers below. If
              you don&apos;t see your questions here, call us any time.
            </p>
            <div className={styles.arrowContainer}>
              <ArrowCluster />
            </div>
          </div>
          <div className={styles.topRight}>
            <div className={styles.btnContainer}>
              <Button text='See all FAQs' href='/faq' btnType='primary' />
            </div>
            <div className={styles.btnContainer}>
              <Button text='Contact Us' href='/contact' btnType='tertiary' />
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          {faqs.map((x, i) => (
            <div
              key={x.id}
              className={
                selected === i
                  ? styles.qaContainer + " " + styles.showBorder
                  : styles.qaContainer
              }
              onClick={() => toggle(i)}
            >
              <div className={styles.headingArrowContainer}>
                <div className={styles.h3Container}>
                  <span className={styles.index}>0{i + 1}. </span>
                  <h3 className={styles.question} lang='en'>
                    {x.question}
                  </h3>
                </div>
                {selected === i ? (
                  <Arrow2 className={styles.iconFlip} width={20} height={20} />
                ) : (
                  <Arrow2 className={styles.icon} width={20} height={20} />
                )}
              </div>
              <div
                className={
                  selected === i
                    ? styles.answerContainer + " " + styles.show
                    : styles.answerContainer
                }
              >
                <p className={styles.answer} lang='en'>
                  {x.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Faqs;
