"use client";

import { benefits } from "@/lib/data";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./Benefits.module.css";
import { motion } from "framer-motion";
import { fadeIn } from "../../../animation/variants";

const Benefits = () => {
  return (
    <section>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <h2 className={styles.heading}>All of our Sites are...</h2>
          </div>
          <div className={styles.bottom}>
            {benefits.slice(0, 3).map((benefit, i) => (
              <div key={i} className={styles.benefitContainer}>
                <div className={styles.headingContainer}>
                  <h3 className={styles.heading2}>{benefit.heading}</h3>
                </div>
                <p className={styles.description}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Benefits;
