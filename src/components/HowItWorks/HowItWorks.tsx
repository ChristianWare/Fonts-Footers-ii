"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./HowItWorks.module.css";
import Image from "next/image";
import Process from "../../../public/images/process.png";
import Develop from "../../../public/icons/develop.svg";
import Launch from "../../../public/icons/launch.svg";
import Support from "../../../public/icons/support.svg";
import Consult from "../../../public/icons/consult.svg";
import Notes from "../../../public/icons/notes.svg";

const process = [
  {
    id: 59,
    icon: <Consult className={styles.icon} />,
    processName: "Consultation",
    processDescription: "Understanding your vision and goals.",
  },
  {
    id: 50,
    icon: <Notes className={styles.icon} />,

    processName: "Planning",
    processDescription: "Strategizing and designing a custom solution.",
  },
  {
    id: 61,
    icon: <Develop className={styles.icon} />,
    processName: "Development",
    processDescription:
      "Bringing your project to life with clean, efficient code.",
  },
  {
    id: 62,
    icon: <Launch className={styles.icon} />,
    processName: "Launch",
    processDescription:
      "Deploying your website and ensuring everything runs smoothly.",
  },
  {
    id: 63,
    icon: <Support className={styles.icon} />,
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
            <div className={styles.top}>
              <h2 className={`${styles.heading} h2v2`}>
                Our approach to each project
              </h2>
              <p className={styles.topText}>
                This is our process for developing the perfect websites for your
                brand. We Keep you in the loop 100% of the time.
              </p>
            </div>
            <svg
              width='0'
              height='0'
              xmlns='http://www.w3.org/2000/svg'
              version='1.1'
            >
              <defs>
                <filter id='goo'>
                  <feGaussianBlur
                    in='SourceGraphic'
                    stdDeviation='5'
                    result='blur'
                  />
                  <feColorMatrix
                    in='blur'
                    mode='matrix'
                    values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9'
                    result='goo'
                  />
                  <feComposite in='SourceGraphic' in2='goo' operator='atop' />
                </filter>
              </defs>
            </svg>
            <div className={styles.miscContainer}>
              <div className={styles.imgContainer}>
                <Image
                  src={Process}
                  alt=''
                  layout='fill'
                  objectFit='cover'
                  className={styles.img}
                />
              </div>
            </div>
          </div>
          <div className={styles.right}>
            {process.map((x) => (
              <div key={x.id} className={styles.card}>
                <div className={styles.box}>
                  <div className={styles.boxLeft}>{x.icon}</div>
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
