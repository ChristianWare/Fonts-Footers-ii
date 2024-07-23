import LayoutWrapper from "../LayoutWrapper";
import styles from "./EcommUSP.module.css";
import Arrow2 from "../../../public/icons/arrow2.svg";
import Features from "../Features/Features";
import FalseButton from "../FalseButton/FalseButton";

const services = [
  {
    id: 82,
    processName: "",
    processDescription: "",
  },
  {
    id: 83,
    processName: "Landing Pages",
    processDescription:
      "Tailored websites that reflect your unique brand identity.",
  },
  {
    id: 85,
    processName: "E-Commerce Solutions",
    processDescription:
      "Secure, easy-to-use online stores optimized for conversions and sales growth.",
  },
  {
    id: 86,
    processName: "Business Websites",
    processDescription:
      "Optimize your online presence and attract more visitors.",
  },
  {
    id: 87,
    processName: "Booking Platforms",
    processDescription:
      "Innovative web applications to streamline your business operations.",
  },
] as const;

const EcommUSP = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.right}>
            <h2 className={styles.heading}>
              Why Choose Us for Your E-commerce Needs?
            </h2>
          </div>
          <div className={styles.left}>
            {services.map((x) => (
              <div key={x.id} className={styles.processContainer}>
                <div className={styles.processTop}>
                  {x.processName.length >= 1 && (
                    <Arrow2 className={styles.icon2} />
                  )}
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
      </LayoutWrapper>
    </section>
  );
};

export default EcommUSP;
