import LayoutWrapper from "../LayoutWrapper";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./Pricing.module.css";

const Pricing = () => {
  return (
    <section>
      <LayoutWrapper>
        <div className={styles.top}>
          <h2 className={styles.heading}>Simple Pricing Plans</h2>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Pricing;
