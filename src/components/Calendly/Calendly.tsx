"use client";

import { InlineWidget } from "react-calendly";
import ScrollHorizontalText from "../ScrollHorizontalText/ScrollHorizontalText";
import styles from "./Calendly.module.css";
import LayoutWrapper from "../LayoutWrapper";

const Calendly = () => {
  return (
    <>
      <ScrollHorizontalText text='Calendly' bottomBorder={true} />
      <section className={styles.container}>
        <div className={styles.calBox} id='schedule'>
          <h2 className={styles.heading}>
            Calendly: Scehdule a Discovery Call with us
          </h2>
          <InlineWidget
            url='https://calendly.com/fontsandfooters/discovery-call'
            styles={{
              height: "775px",
              borderRadius: "20px",
            }}
          />
        </div>
      </section>
      <ScrollHorizontalText text='Calendly' bottomBorder={false} />
    </>
  );
};
export default Calendly;
