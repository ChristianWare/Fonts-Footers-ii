import LayoutWrapper from "@/components/LayoutWrapper";
import styles from "./MPSection1.module.css";
import { FC } from "react";
import Arrow from "../../public/icons/arrow2.svg";

const data = [
  {
    id: 1,
    title: "Tailored Solutions for Your Online Business",
    desc: "Our team knows every business is different. That's why we offer a variety of design packages. These range from custom designs to pre-made templates. We focus on your goals, audience, and brand to make your online store truly yours.",
    icon: <Arrow width={100} height={100} className={styles.icon} />,
  },
  {
    id: 2,
    title: "Responsive and User-Friendly Designs",
    desc: "Today, having a mobile-friendly online store is crucial. Our responsive design ensures your platform functions well on phones, tablets, and computers. This provides your customers with a great shopping experience, no matter how they visit your site.",
    icon: <Arrow width={100} height={100} className={styles.icon} />,
  },
  {
    id: 2,
    title: "Responsive and User-Friendly Designs",
    desc: "Today, having a mobile-friendly online store is crucial. Our responsive design ensures your platform functions well on phones, tablets, and computers. This provides your customers with a great shopping experience, no matter how they visit your site.",
    icon: <Arrow width={100} height={100} className={styles.icon} />,
  },
];

const MPSection1 = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <h2 className={styles.heading}>
              Unleash the Power of E-commerce Web Design Packages
            </h2>
            <p className={styles.copy}>
              Building a strong online presence is key to success. Our design
              packages help unlock your business&apos;s full potential. They are
              perfect for both new and established brands.
            </p>
          </div>
          <div className={styles.bottom}>
            {data.map((x) => (
              <div key={x.id} className={styles.card}>
                <div className={styles.left}>{x.icon}</div>
                <div className={styles.right}>
                  <h3 className={styles.title}>{x.title}</h3>
                  <p className={styles.desc}>{x.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default MPSection1;
