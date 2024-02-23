import Link from "next/link";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./Footer.module.css";
import { footer } from "@/lib/data";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.top}>
        <div className={styles.left}>
          <Link href='/' className={styles.logo}>
            Fonts & Footers
          </Link>
          <span className={styles.tagline}>Direct Booking Specialists</span>
        </div>
        <div className={styles.right}>
          {footer.map((x, index) => (
            <div key={x.id} className={styles.links}>
              <div className={styles.heading}>{x.heading}</div>
              {x.section.map((y) => (
                <div key={y.id}>
                  <Link href={y.href} className={styles.link}>
                    {y.name}
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.left}>
          2024 Fonts & Footers, All Rights Reserved
        </div>
        <div className={styles.pp}>Privacy Policy</div>
      </div>
    </footer>
  );
};
export default Footer;
