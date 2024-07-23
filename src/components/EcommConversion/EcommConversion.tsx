import Image from "next/image";
import styles from "./EcommConversion.module.css";
import Img from "../../../public/images/house23.png";
import LayoutWrapper from "../LayoutWrapper";

// User Behavior Analysis: "By analyzing user behavior, we make informed adjustments to enhance the shopping experience and reduce friction."
// Optimized Checkout Process: "We streamline the checkout process to minimize cart abandonment and increase completed purchases."

const EcommConversion = () => {
  const data = [
    {
      title: "A/B Testing",
      description:
        "We conduct A/B testing to identify the best design and content strategies that drive conversions.",
    },
    {
      title: "User Behavior Analysis",
      description:
        "By analyzing user behavior, we make informed adjustments to enhance the shopping experience and reduce friction.",
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
      title: "Optimized Checkout Process",
      description:
        "We streamline the checkout process to minimize cart abandonment and increase completed purchases.",
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
            <h2 className={styles.heading}>Optimized for Conversions</h2>
            <p className={styles.copy}>
              Our e-commerce websites are designed with conversion in mind. We
              use data-driven strategies to optimize your site for higher
              conversion rates, turning visitors into paying customers.
            </p>
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
export default EcommConversion;
