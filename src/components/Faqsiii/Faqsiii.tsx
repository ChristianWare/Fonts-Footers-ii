"use client";

import styles from "./Faqsiii.module.css";
import { FC, useState } from "react";
import LayoutWrapper from "../LayoutWrapper";
import Arrow2 from "../../../public/icons/arrow2.svg";
import Button from "../Button/Button";

interface Props {
  mapData: any;
}

const Faqsiii: FC<Props> = ({ mapData }) => {
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
            <div className={styles.btnContainer}>
              <Button text='See All Questions' href='/' btnType='primaryii' />
            </div>
          </div>

          <div className={styles.right}>
            {mapData.map((x: any, i: any) => (
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
