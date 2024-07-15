import LayoutWrapper from "../LayoutWrapper";
import styles from "./ServicesHero.module.css";

const ServicesHero = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <h1 className={styles.heading}>
              We’re a digital marketing agency with expertise
            </h1>
          </div>
          <div className={styles.bottom}>
            <p className={styles.copy}>
              We bring our passion for good design to brave brands and deliver
              something you can shout about. We bring our passion for good
              design to brave brands and deliver something you can shout about.
            </p>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default ServicesHero;

