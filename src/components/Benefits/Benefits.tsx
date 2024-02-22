import { benefits } from "@/lib/data";
import LayoutWrapper from "../LayoutWrapper";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./Benefits.module.css";

const Benefits = () => {
  return (
    <section>
      <LayoutWrapper>
        <div className={styles.top}>
          <SectionHeading text='Benefits' />
        </div>
        <div className={styles.bottom}>
          {benefits.slice(0, 3).map((benefit, i) => (
            <div key={i} className={styles.benefitContainer}>
              <span className={styles.index}>{i + 1}.</span>
              <h3 className={styles.heading}>{benefit.heading}</h3>
              <p className={styles.description}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Benefits;
