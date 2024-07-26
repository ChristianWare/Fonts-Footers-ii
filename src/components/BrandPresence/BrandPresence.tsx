"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./BrandPresence.module.css";
import Arrow from "../../../public/icons/arrow2.svg";

const BrandPresence = () => {
  const data = [
    {
      icon: <Arrow width={30} height={30} className={styles.icon} />,
      title: "Innovation",
      description:
        "We continuously seek out new technologies and creative approaches to ensure our clients receive cutting-edge solutions tailored to their unique needs.",
    },
    {
      icon: <Arrow width={30} height={30} className={styles.icon} />,
      title: "Integrity",
      description:
        "We believe in building trust through transparency and honesty, committing to ethical practices and open communication in every project we undertake.",
    },
    {
      icon: <Arrow width={30} height={30} className={styles.icon} />,
      title: "Customer-Centricity",
      description:
        "Our clients are at the heart of everything we do, and we strive to exceed their expectations by delivering personalized and impactful digital experiences.",
    },
    {
      icon: "",
      title: "",
      description: "",
    },
    {
      icon: <Arrow width={30} height={30} className={styles.icon} />,
      title: "Collaboration",
      description:
        "We value teamwork and partnerships, both within our agency and with our clients, fostering a collaborative environment to achieve the best possible outcomes.",
    },
    {
      icon: <Arrow width={30} height={30} className={styles.icon} />,
      title: "Excellence",
      description:
        "We are dedicated to achieving the highest standards in our work, continuously improving and pushing the boundaries to deliver outstanding results for our clients.",
    },
  ];
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <h2 className={styles.heading}>Our Values</h2>
          <p className={styles.copy}>
            Our values act as a set of guiding principles and fundamental
            beliefs that influence the behaviors we demonstrate, which shape the
            decisions we collectively make as a team.
          </p>
        </div>
        <div className={styles.bottom}>
          {data.map((x, index) => (
            <div className={styles.card} key={index}>
              {x.icon && <div className={styles.iconContainer}>{x.icon}</div>}
              <h3 className={styles.title}>{x.title}</h3>
              <p className={styles.desc}>{x.description}</p>
            </div>
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default BrandPresence;
