"use client";

import { useState } from "react";
import ArrowCluster from "../ArrowCluster/ArrowCluster";
import Button from "../Button/Button";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./Faqs.module.css";
import { faqs } from "@/lib/data";
import Arrow2 from "../../../public/icons/arrow2.svg";
import House from "../../../public/images/faqs.png";
import Image from "next/image";

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
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.topLeft}>
              <div className={styles.arrowContainer}>
                <ArrowCluster />
              </div>
              <h2 className={styles.heading}>Frequently asked questions</h2>
              <p className={styles.copy}>
                Here are some commonly asked questions and their answers below.
                If you don&apos;t see your questions here, call us any time.
              </p>
            </div>
            <div className={styles.btnContainer}>
              <Button
                text='See all Questions'
                href='/faq'
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
            <div className={styles.topRight}></div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.left}>
              <div className={styles.imgContainer}>
                <Image src={House} alt='image' fill className={styles.img} />
              </div>
            </div>
            <div className={styles.right}>
              {faqs.slice(0, 4).map((x, i) => (
                <div
                  key={x.id}
                  className={styles.qaContainer}
                  onClick={() => toggle(i)}
                >
                  <div className={styles.headingArrowContainer}>
                    <div className={styles.h3Container}>
                      {/* <span className={styles.index}>0{i + 1}. </span> */}
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
export default Faqs;
