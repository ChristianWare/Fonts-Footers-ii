"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./HowItWorks.module.css";

const process = [
  {
    id: 59,
    processName: "Consultation",
    processDescription: "Understanding your vision and goals.",
  },
  {
    id: 60,
    processName: "Planning",
    processDescription: "Strategizing and designing a custom solution.",
  },
  {
    id: 61,
    processName: "Development",
    processDescription:
      "Bringing your project to life with clean, efficient code.",
  },
  {
    id: 62,
    processName: "Launch",
    processDescription:
      "Deploying your website and ensuring everything runs smoothly.",
  },
  {
    id: 63,
    processName: "Support",
    processDescription:
      "Ongoing maintenance and support to keep your site at its best.",
  },
];

const HowItWorks = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <h2 className={styles.heading}>Our Approach to each project</h2>
            <p className={styles.topText}>
              Ordering your favorite meals from us is quick and easy! Follow
              these simple steps to enjoy delicious food delivered right to your
              doorstep without any hassle.
            </p>
          </div>
          <div className={styles.right}>
            {process.map((x, index) => (
              <div key={x.id} className={styles.card}>
                <div className={styles.box}>
                  <div className={styles.boxLeft}>
                    <span className={styles.number}>{`${index + 1}`}</span>
                  </div>
                  <div className={styles.boxRight}>
                    <h3 className={styles.processName}>{x.processName}</h3>
                    <p className={styles.copy}>{x.processDescription}</p>
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
export default HowItWorks;
