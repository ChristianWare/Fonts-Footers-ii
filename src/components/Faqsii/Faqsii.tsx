"use client";

import { useState } from "react";
import LayoutWrapper from "../LayoutWrapper";
import { faqs } from "@/lib/data";
import Plus from "../../../public/icons/plus.svg";
import styles from "./Faqsii.module.css";

const Faqsiii = () => {
  const [selected, setSelected] = useState<null | number>(null);

  const toggle = (i: any) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };
  return (
    <section className={styles.container} id='faq'>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.sectionIntroContainer}>
            </div>
            <h2 className={styles.heading}>• You May Have Wondered •</h2>
            <p className={styles.copy}>
              Here are some common questions asked by potential employers. If
              you do not see your question here feel free to reach out.
            </p>
          </div>
          <div className={styles.bottom}>
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
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Faqsiii;
