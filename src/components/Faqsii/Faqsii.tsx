"use client";

import { useState } from "react";
import LayoutWrapper from "../LayoutWrapper";
import { faqs } from "@/lib/data";
import Arrow2 from "../../../public/icons/arrow2.svg";
import styles from "./Faqsii.module.css";

const Faqsii = () => {
  const [selected, setSelected] = useState<null | number>(null);

  const toggle = (i: any) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.bottom}>
            <div className={styles.right}>
              {faqs.map((x, i) => (
                <div
                  key={x.id}
                  className={styles.qaContainer}
                  onClick={() => toggle(i)}
                >
                  <div className={styles.headingArrowContainer}>
                    <div
                      className={styles.h3Container}
                    >
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
                        <Arrow2
                          className={styles.icon}
                          width={25}
                          height={25}
                        />
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
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Faqsii;
