import LayoutWrapper from "../LayoutWrapper";
import styles from "./BlogSection.module.css";

const BlogSection = () => {
  return (
    <section>
      <LayoutWrapper>
        <div className={styles.top}>
          <h2 className={styles.header}>Insights from Fonts & Footers</h2>
        </div>
        <div className={styles.bottom}>
          
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default BlogSection;
