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
        <div className={styles.bottom}></div>
      </LayoutWrapper>
    </section>
  );
};
export default Benefits;
