import Link from "next/link";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.container}>
      <Link href='/' className={styles.logo}>
        Fonts & Footers
      </Link>
    </div>
  );
};
export default Logo;
