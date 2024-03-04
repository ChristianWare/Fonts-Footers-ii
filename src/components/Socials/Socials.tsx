import Link from "next/link";
import styles from "./Socials.module.css";
import LayoutWrapper from "../LayoutWrapper";

const Socials = () => {
  return (
    // <div className={styles.container}>
    <LayoutWrapper color='green'>
      <div className={styles.content}>
        <div className={styles.child}>
          <Link
            href='https://www.linkedin.com/'
            target='_blank'
            className={styles.detail}
          >
            LinkedIn
          </Link>
          <Link
            href='https://www.facebook.com/'
            target='_blank'
            className={styles.detail}
          >
            Facebook
          </Link>
          <Link
            href='https://instagram.com/'
            target='_blank'
            className={styles.detail}
          >
            Instagram
          </Link>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.bottom}>
          <span></span>
        </div>
      </div>
    </LayoutWrapper>
    // </div>
  );
};
export default Socials;
