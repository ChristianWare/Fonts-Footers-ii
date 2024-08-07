"use client";

import Image from "next/image";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./LongTermRelationships.module.css";
import Img from "../../../public/images/vission.png";

const LongTermRelationships = () => {
  const data = [
    {
      title: "Industry Leadership",
      description:
        "Our vision is to become a leading digital agency renowned for our innovative solutions and exceptional client service, setting new standards in the industry.",
    },
    {
      title: "Global Impact",
      description:
        "We aspire to make a global impact by helping businesses of all sizes leverage the power of digital technology to transform and thrive in a constantly evolving marketplace.",
    },
    {
      title: "",
      description: "",
    },
    {
      title: "",
      description: "",
    },
    {
      title: "",
      description: "",
    },
    {
      title: "Sustainable Growth",
      description:
        "We envision a future where our agency fosters sustainable growth for our clients and ourselves, prioritizing long-term success and responsible business practices.",
    },
  ] as const;

  return (
    <section className={styles.container}>
      <div className={styles.imgOverlay}></div>
      <Image
        src={Img}
        alt='image'
        fill
        className={styles.img}
        priority
        sizes='s100vw'
        quality={100}
      />
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <h2 className={styles.heading}>
              Our <span className={styles.em}>vission</span>
            </h2>
          </div>
          <div className={styles.bottom}>
            {data.map((x, index) => (
              <div key={index} className={styles.card}>
                <h3 className={styles.title}>{x.title}</h3>
                <p className={styles.desc}>{x.description}</p>
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default LongTermRelationships;
