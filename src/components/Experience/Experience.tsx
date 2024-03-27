'use client'

import { useState } from "react";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./Experience.module.css";
import Image from "next/image";
import Img from "../../../public/images/house11.png";
import { faqs } from "@/lib/data";
import Arrow2 from "../../../public/icons/arrow2.svg";

const Experience = () => {
      const [selected, setSelected] = useState<null | number>(null);

       const toggle = (i: any) => {
         if (selected === i) {
           return setSelected(null);
         }

         setSelected(i);
       };

  return (
    <LayoutWrapper>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2 className={styles.heading}>
            We bring ideas to life by combining
          </h2>
          <p className={styles.copy}>
            Quickly cultivate optimal processes and tactical architectures
            completely iterate covalent strategic theme areas.
          </p>
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
        <div className={styles.right}>
          <div className={styles.imgContainer}>
            <Image src={Img} alt='image' fill className={styles.img} />
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
};
export default Experience;
