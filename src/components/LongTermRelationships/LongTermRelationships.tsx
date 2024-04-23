"use client";

import Image from "next/image";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./LongTermRelationships.module.css";
import Img from "../../../public/images/house22.png";
import ArrowCluster from "../ArrowCluster/ArrowCluster";

const LongTermRelationships = () => {
  const data = [
    {
      title: "Personalized Communication",
      description:
        "Direct communication through the website allows you to address clients' specific needs, preferences, and feedback, creating a personalized experience that fosters loyalty and trust.",
    },
    {
      title: "Consistent Brand Experience",
      description:
        "A direct booking website provides a consistent brand experience from booking to post-stay follow-ups, reinforcing your brand identity and building a sense of reliability and familiarity with clients.",
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
      title: "Customized Offers",
      description:
        "You can offer customized packages, discounts, or loyalty rewards directly through your website, incentivizing clients to return for future stays and increasing repeat bookings.",
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
            <div className={styles.arrowContainer}>
              <ArrowCluster />
            </div>
            <h2 className={styles.heading}>Long Term Relationships</h2>
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
