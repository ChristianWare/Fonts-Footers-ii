import LayoutWrapper from "../LayoutWrapper";
import styles from "./ServicesSection.module.css";
import Arrow2 from "../../../public/icons/arrow2.svg";
import Cart from "../../../public/icons/cart.svg";
import Business from "../../../public/icons/business.svg";
import Booking from "../../../public/icons/booking.svg";

const services = [
  {
    id: 82,
    processName: "",
    processDescription: "",
    icon: null,
    href: "",
  },
  {
    id: 85,
    processName: "E-Commerce Solutions",
    processDescription:
      "Secure, easy-to-use online stores optimized for conversions and sales growth.",
    icon: <Cart className={styles.icon2} />,
    href: "",
  },
  {
    id: 83,
    processName: "See All Services",
    processDescription:
      "Tailored websites that reflect your unique brand identity.",
    icon: <Arrow2 className={styles.icon2} />,
    href: "",
  },

  {
    id: 86,
    processName: "Business Websites",
    processDescription:
      "Optimize your online presence and attract more visitors.",
    icon: <Business className={styles.icon2} />,
    href: "",
  },
  {
    id: 87,
    processName: "Booking Platforms",
    processDescription:
      "Innovative web applications to streamline your business operations.",
    icon: <Booking className={styles.icon2} />,
    href: "",
  },
] as const;

const ServicesSection = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.right}>
            <h2 className={styles.heading}>What we build</h2>
          </div>
          <div className={styles.left}>
            {services.map((x) => (
              <div key={x.id} className={styles.processContainer}>
                <div className={styles.processTop}>
                  {x.processName.length >= 1 && <>{x.icon}</>}
                </div>
                <div className={styles.processBottom}>
                  {x.processName.length >= 1 && (
                    <h3 className={styles.processName}>{x.processName}</h3>
                  )}

                  <p className={styles.processDescription}>
                    {x.processDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <Features /> */}
      </LayoutWrapper>
    </section>
  );
};
export default ServicesSection;
