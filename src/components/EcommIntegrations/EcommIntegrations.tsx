import LayoutWrapper from "../LayoutWrapper";
import styles from "./EcommIntegrations.module.css";
import Cart from "../../../public/icons/cart.svg";

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
];

const EcommIntegrations = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        {/* <h2>Ecomm Integrations</h2> */}
        <div className={styles.top}>
          <div className={styles.topLeft}>
            <h2 className={styles.heading}>E-commerce Platform Integration</h2>
            <p className={styles.copy}>
              We integrate with leading e-commerce platforms like Shopify,
              WooCommerce, and Magento, ensuring your online store has the
              functionality and flexibility required to succeed in a competitive
              market.
            </p>
          </div>
          <div className={styles.topRight}>
            {/* <h3 className={styles.headline}>
              Seamless Integration with Leading Platforms
            </h3> */}
          </div>
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
          <div className={styles.iconContainer}>
            <Cart className={styles.icon} />
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default EcommIntegrations;
