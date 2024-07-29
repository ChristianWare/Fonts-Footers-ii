import LayoutWrapper from "../LayoutWrapper";
import styles from "./EcommIntegrations.module.css";

const data = [
  {
    id: 1,
    feature: "Platform Expertise",
    desc: "Our team is proficient in integrating and customizing top e-commerce platforms to suit your business requirements.",
  },
  {
    id: 2,
    feature: "Custom Solutions",
    desc: "For businesses with unique needs, we develop custom e-commerce solutions that provide the exact features and capabilities you need.",
  },
  {
    id: 3,
    feature: "Third-Party Integrations",
    desc: "We seamlessly integrate with third-pparty tools and services, such as payment gateways, shipping providers, and CRM systems.",
  },
  {
    id: 4,
    feature: "Automated Email Notifications",
    desc: "We set up automated email notifications to keep you and your customers informed when orders are placed, shipped, or updated, enhancing communication and customer satisfaction.",
  },
];

const EcommIntegrations = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <div className={styles.topLeft}>
            <h2 className={styles.heading}>E-commerce Platform Integration</h2>
          </div>
          <div className={styles.topRight}></div>
        </div>
        <div className={styles.bottom}>
          {data.map((x) => (
            <div key={x.id} className={styles.card}>
              <span className={styles.index}>{x.id}</span>
              <div>
                <h3 className={styles.feature}>{x.feature}</h3>
                <p className={styles.desc}>{x.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default EcommIntegrations;
