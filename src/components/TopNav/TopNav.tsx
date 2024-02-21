import Link from "next/link";
import styles from "./TopNav.module.css";

const TopNav = () => {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <Link href='/' className={styles.logo}>
          Fonts & Footers
        </Link>
        <div className={styles.location}>Phoenix, AZ</div>
      </div>
    </div>
  );
};
export default TopNav;
