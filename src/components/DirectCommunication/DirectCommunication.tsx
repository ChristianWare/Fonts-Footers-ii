"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./DirectCommunication.module.css";
import Arrow from "../../../public/icons/arrow2.svg";

const DirectCommunication = () => {
  const data = [
    {
      title: "Logo Design",
      description: "Custom logo design that encapsulates your brand’s essence.",
    },
    {
      title: "Color Schemes",
      description:
        "Thoughtfully selected color palettes that reflect your brand’s personality.",
    },
    {
      title: "Typography",
      description:
        "Professional typography choices that enhance readability and aesthetic appeal.",
    },
    {
      title: "Imagery and Graphics",
      description:
        "Carefully chosen imagery and graphics that complement your brand’s message and enhance visual appeal.",
    },
    {
      title: "Brand Guidelines",
      description:
        "Comprehensive brand guidelines that ensure consistent use of logos, colors, and fonts across all your marketing materials.",
    },
    {
      title: "Visual Consistency",
      description:
        "Ensuring visual consistency across all web pages to build a strong and recognizable brand identity.",
    },
  ] as const;
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <h2 className={styles.heading}>Branding and Visual Identity</h2>
          <p className={styles.copy}>
            We help strengthen your brand’s visual identity by creating cohesive
            and attractive designs that leave a lasting impression on your
            audience.
          </p>
        </div>
        <div className={styles.bottom}>
          {data.map((x, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconContainer}>
                <Arrow className={styles.icon} width={25} height={25} />
              </div>
              <div>
                <h3 className={styles.title}>{x.title}</h3>
                <p className={styles.desc}>{x.description}</p>
              </div>
            </div>
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default DirectCommunication;
