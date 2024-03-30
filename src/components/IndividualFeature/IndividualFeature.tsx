import LayoutWrapper from "../LayoutWrapper";
import styles from "./IndividualFeature.module.css";

const IndividualFeature = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}></div>
          <div className={styles.right}></div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default IndividualFeature;
