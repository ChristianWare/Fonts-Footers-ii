import LayoutWrapper from "../LayoutWrapper";
import styles from "./EcommOverview.module.css";
import Cart from "../../../public/icons/cart.svg";

const EcommOverview = () => {
  return (
    <section className={styles.bgColor}>
      <LayoutWrapper color='green3'>
        <div className={styles.content}>
          <div className={styles.reveal}>
            <h2 className={styles.text}>
              At Fonts & Footers, we specialize in creating custom e-commerce
              websites that drive sales and provide a seamless shopping
              experience. Our team combines innovative design, cutting-edge
              technology, and a deep understanding of user behavior to develop
              e-commerce solutions that meet your unique business needs.
            </h2>
          </div>
          <div className={styles.bottom}>
            <div className={styles.houseContainer}>
              <Cart className={styles.icon} />
              <Cart className={styles.icon} />
              <Cart className={styles.icon} />
            </div>
            <p className={styles.copy}>
              At Fonts & Footers, we aim to give our clients
              top-notch service for online success. Contact us today to see how
              we can boost your business with a personalized E-Commerce website
              made just for you.
            </p>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default EcommOverview;
