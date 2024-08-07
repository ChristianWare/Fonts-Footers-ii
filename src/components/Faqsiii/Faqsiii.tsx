"use client";

import styles from "./Faqsiii.module.css";
import { FC, useState } from "react";
import LayoutWrapper from "../LayoutWrapper";
import Arrow2 from "../../../public/icons/arrow2.svg";
import Button from "../Button/Button";
import { usePathname } from "next/navigation";
import FalseButton from "../FalseButton/FalseButton";

interface Props {
  mapData: any;
  text?: string;
  bgColor?: string;
}

const Faqsiii: FC<Props> = ({ bgColor = "", mapData, text = "" }) => {
  const [selected, setSelected] = useState(0);

  const toggle = (i: any) => {
    setSelected(i);
  };

  const pathname = usePathname();

  return (
    <section className={`${styles.container} ${styles[bgColor]}`} id='faq'>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.sectionIntroContainer}>
              <div className={styles.falseButtonContainer}>
                <FalseButton btnType='primary' text={text} />
              </div>
              <br />
              <h2 className={`${styles.heading} h2v2`}>{text}</h2>
            </div>
            {/* <p className={styles.copy}>
              Commonly asked questions and answers. If you do not see your
              question here, feel free to call us anytime to ask, and we will
              gladly give you a satisfactory answer.
            </p> */}
            {pathname !== "/faqs" && (
              <div className={styles.btnContainer}>
                <Button
                  text='See All Questions'
                  href='/faqs'
                  btnType='primaryii'
                />
              </div>
            )}
          </div>
          <div className={styles.right}>
            {mapData
              .slice(0, pathname !== "/faqs" ? 4 : mapData.length)
              .map((x: any, i: number) => (
                <div
                  key={x.id}
                  className={`${styles.qaContainer} ${
                    selected === i ? styles.selected : ""
                  }`}
                  onClick={() => toggle(i)}
                >
                  <div className={styles.headingArrowContainer}>
                    <div className={styles.h3Container}>
                      <h3 className={styles.question} lang='en'>
                        {x.question}
                      </h3>
                    </div>
                    <div className={styles.iconBox}>
                      <Arrow2 width={30} height={30} className={styles.icon} />
                    </div>
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
