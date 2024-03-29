import LayoutWrapper from "../LayoutWrapper";
import styles from "./HigherMargins.module.css";
import House from "../../../public/icons/house.svg";
import Image from "next/image";
import Img from "../../../public/images/house19.png";

const HigherMargins = () => {
  const data = [
    {
      icon: <House width={30} height={30} className={styles.icon} />,
      title: "Elimination of Third-Party Fees",
      description:
        "Direct bookings bypass commission fees charged by third-party booking platforms, allowing owners to keep a larger portion of the rental income.",
    },
    {
      icon: <House width={30} height={30} className={styles.icon} />,
      title: "Control Over Pricing",
      description:
        "Owners can set their own pricing without being constrained by platform fees or price restrictions imposed by third-party sites. This flexibility enables owners to adjust prices based on demand, seasonality, and market conditions, maximizing revenue potential.",
    },
    {
      icon: <House width={30} height={30} className={styles.icon} />,
      title: "Promotional Offers",
      description:
        "Owners can create and promote special offers, discounts, and packages directly on their website to attract guests and increase bookings. Without third-party platform restrictions, owners can implement targeted promotions that align with their marketing strategies and revenue goals.",
    },
    {
      icon: <House width={30} height={30} className={styles.icon} />,
      title: "Repeat Bookings",
      description:
        "Direct communication with guests fosters stronger relationships and encourages repeat bookings. By offering excellent service, personalized experiences, and loyalty incentives, owners can increase guest retention and generate recurring revenue without incurring additional booking fees.",
    },
  ];
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <h2 className={styles.heading}>Higher Margins</h2>
        <div className={styles.bottom}>
          {data.map((x, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconContainer}>{x.icon}</div>
              <h3 className={styles.title}>{x.title}</h3>
              <p className={styles.desc}>{x.description}</p>
            </div>
          ))}
        </div>
        <div className={styles.imgContainer}>
          <Image src={Img} alt='image' fill className={styles.img} />
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default HigherMargins;
