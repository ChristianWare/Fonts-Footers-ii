import LayoutWrapper from "../LayoutWrapper";
import styles from "./IndividualService.module.css";
import Booking from "../../../public/icons/booking.svg";
import Business from "../../../public/icons/business.svg";
import Landing from "../../../public/icons/landing.svg";
import Cart from "../../../public/icons/cart.svg";
import Link from "next/link";
import Button from "../Button/Button";
import ServicesSectionii from "../ServicesSectionii/ServicesSectionii";

const IndividualService = () => {
  const individulaFeatures = [
    {
      icon: <Cart width={75} height={75} className={styles.icon} />,
      title: "E-Commerce Stores",
      description:
        "We offer comprehensive e-commerce solutions that provide a smooth shopping experience while integrating seamlessly with your booking or service system. Our e-commerce websites are custom-built to drive sales and improve user satisfaction.",
      href: "services/ecommerce-stores",
    },
    {
      icon: <Business width={75} height={75} className={styles.icon} />,
      title: "Business Websites",
      description:
        "Our professional business websites reflect your brand identity and meet your unique needs. WE design them to be engaging, functional, and optimized for performance.",
      href: "services/business-websites",
    },
    {
      icon: <Booking width={75} height={75} className={styles.icon} />,
      title: "Booking Platforms",
      description:
        "We specialize in developing custom direct booking websites that provide seamless booking experiences for your customers. Our solutions are designed to be fast, user-friendly, and optimized for search engines.",
      href: "services/booking-platforms",
    },
  ] as const;
  return (
    <section className={styles.container} id='features'>
      <LayoutWrapper>
        <h2 className={`${styles.heading} h2v3`}>What we build</h2>
        <div className={styles.parent}>
          {individulaFeatures.map((x, index) => (
            <div key={index} className={styles.content}>
              <Link href={x.href}>
                <div className={styles.left}>
                  <h3 className={styles.title}>{x.title}</h3>
                  <p className={styles.copy}>~Click to Learn More ~</p>
                  <div className={styles.iconContainer}>{x.icon}</div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <ServicesSectionii />
      </LayoutWrapper>
    </section>
  );
};
export default IndividualService;
