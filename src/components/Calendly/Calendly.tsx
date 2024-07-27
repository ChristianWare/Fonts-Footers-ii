"use client";

import { InlineWidget } from "react-calendly";
import ScrollHorizontalText from "../ScrollHorizontalText/ScrollHorizontalText";
import styles from "./Calendly.module.css";

const Calendly = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.calBox} id='schedule'>
          <h2 className={styles.heading}>
            Scehdule a free Discovery Call with us
          </h2>
          <InlineWidget
            url='https://calendly.com/fontsandfooters/discovery-call'
            styles={{
              height: "900px",
              borderRadius: "20px",
            }}
          />
        </div>
      </section>
    </>
  );
};
export default Calendly;
