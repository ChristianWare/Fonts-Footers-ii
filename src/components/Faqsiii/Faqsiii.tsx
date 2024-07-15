"use client";

import styles from "./Faqsiii.module.css";
import { faqs } from "../../lib/data";
import { useState } from "react";
import Plus from "../../../public/icons/plus.svg";
import LayoutWrapper from "../LayoutWrapper";
import Arrow2 from "../../../public/icons/arrow2.svg";

const Faqsiii = () => {
  const [selected, setSelected] = useState(0);

  const toggle = (i: any) => {
    setSelected(i);
  };

  return (
    <section className={styles.container} id='faq'>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.sectionIntroContainer}>
              <h2 className={styles.heading}>You may have wondered...</h2>
            </div>
            <p className={styles.copy}>
              Here are some common questions asked by potential employers. If
              you do not see your question here feel free to reach out.
            </p>
          </div>
          {/* <div999 className={styles.bottom}>
            {faqs.slice(0, 4).map((x, i) => (
              <div
                key={x.id}
                className={`${styles.qaContainer} ${
                  selected === i ? styles.active : ""
                }`}
                onClick={() => toggle(i)}
              >
                <div className={styles.headingArrowContainer}>
                  {selected === i ? (
                    <Plus className={styles.iconFlip} width={35} height={35} />
                  ) : (
                    <Plus className={styles.icon} width={30} height={30} />
                  )}
                  <h3 className={styles.question} lang='en'>
                    {x.question}
                  </h3>
                </div>
                <div
                  className={
                    selected === i
                      ? styles.answerContainer + " " + styles.show
                      : styles.answerContainer
                  }
                >
                  <div className={styles.answerbox}>
                    <div></div>
                    <p className={styles.answer} lang='en'>
                      {x.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div999> */}
          <div className={styles.right}>
            {faqs.slice(0, 4).map((x, i) => (
              <div
                key={x.id}
                className={styles.qaContainer}
                onClick={() => toggle(i)}
              >
                <div className={styles.headingArrowContainer}>
                  <div className={styles.h3Container}>
                    <h3 className={styles.question} lang='en'>
                      {x.question}
                    </h3>
                  </div>
                  {selected === i ? (
                    <div className={styles.iconBox}>
                      <Arrow2
                        className={styles.iconFlip}
                        width={25}
                        height={25}
                      />
                    </div>
                  ) : (
                    <div className={styles.iconBox}>
                      <Arrow2 className={styles.icon} width={25} height={25} />
                    </div>
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
        </div>
      </LayoutWrapper>
    </section>
  );
};

export default Faqsiii;
