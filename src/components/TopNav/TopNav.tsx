import styles from "./TopNav.module.css";
import Link from "next/link";
import Insta from "../../../public/icons/instagram.svg";
import LinkedIn from "../../../public/icons/linkedin.svg";
import Facebook from "../../../public/icons/facebook.svg";

const TopNav = () => {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <Link href='/' className={styles.logo}>
          Fonts & Footers
        </Link>
        <div className={styles.leftBottom}>
          <Link
            href='https://www.linkedin.com/'
            target='_blank'
            className={styles.detail}
          >
            <LinkedIn className={styles.icon} width={12} height={12} />
          </Link>
          <Link
            href='https://www.facebook.com/'
            target='_blank'
            className={styles.detail}
          >
            <Facebook className={styles.icon} width={12} height={12} />
          </Link>
          <Link
            href='https://instagram.com/'
            target='_blank'
            className={styles.detail}
          >
            <Insta className={styles.icon} width={12} height={12} />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default TopNav;
