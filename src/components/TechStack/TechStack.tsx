import LayoutWrapper from "../LayoutWrapper";
import styles from "./TechStack.module.css";

const TechStack = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <h2 className={styles.heading}>OUR ECOSYSTEM</h2>
          <p className={styles.copy}>
            We use cutting-edge technology to craft websites that outperform
            those built on platforms like Wordpress, Wix, or Godaddy, which
            often rely on older, slower, and outdated technology. Our approach
            involves using pure HTML, CSS, and Javascript code, ensuring a sleek
            and efficient website tailored specifically for your vacation rental
            homes.
          </p>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default TechStack;
