"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./EnhancedMarketing.module.css";
import Image from "next/image";
import Img from "../../../public/images/house18.png";

const EnhancedMarketing = () => {
  const data = [
    {
      title: "Targeted Advertising",
      description:
        "Utilize data analytics and guest insights to create targeted advertising campaigns. Segment your audience based on demographics, preferences, and booking behaviors to deliver personalized messages that resonate with potential guests.",
    },
    {
      title: "Content Marketing",
      description:
        "Create compelling content such as blog posts, videos, and guides related to your destination or property. Share valuable information, travel tips, and local insights to engage visitors and establish your expertise in the industry.",
    },
    {
      title: "Email Marketing",
      description:
        "Build an email subscriber list through direct bookings and use email marketing campaigns to nurture relationships with past guests and prospects. Send personalized offers, newsletters, and updates to encourage repeat bookings and drive revenue.",
    },
  ] as const;
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.imgContainer}>
              <Image src={Img} alt='image' fill className={styles.img} />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.rightTop}>
              <h2 className={styles.heading}>Enhanced Marketing</h2>
              <p className={styles.copy}>~Our Mission~</p>
              <p className={styles.copy}>
                By leveraging enhanced marketing strategies on your direct
                booking website, you can effectively reach and engage your
                target audience, drive more direct bookings, increase revenue,
                and differentiate your property in a competitive market.
              </p>
              <div className={styles.imgContainerii}>
                <Image src={Img} alt='image' fill className={styles.img} />
              </div>
            </div>
            <div className={styles.rightBottom}>
              {data.map((x, index) => (
                <div key={index} className={styles.card}>
                  <h3 className={styles.title}>{x.title}</h3>
                  <p className={styles.desc}>{x.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default EnhancedMarketing;
