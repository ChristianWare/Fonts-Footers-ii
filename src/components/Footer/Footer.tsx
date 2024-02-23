"use client";

import styles from "./Footer.module.css";
import Link from "next/link";
import { footer } from "@/lib/data";
import Instagram from "../../../public/icons/instagram.svg";
import LinkedIn from "../../../public/icons/linkedin.svg";
import Twitter from "../../../public/icons/twitter.svg";
import Facebook from "../../../public/icons/facebook.svg";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.right}>
          <div className={styles.middleDesktop}>
            {footer.map((f, index) => (
              <div key={index} className={styles.headingContainer}>
                <Link href={f.href} className={styles.heading}>
                  {f.heading}
                </Link>
              </div>
            ))}
          </div>
          <div className={styles.lb2}>
            <Instagram width={15} height={15} className={styles.icon} />
            <LinkedIn width={15} height={15} className={styles.icon} />
            <Twitter width={15} height={15} className={styles.icon} />
            <Facebook width={15} height={15} className={styles.icon} />
          </div>
        </div>
        <div className={styles.bottomDesktop}>
          <Logo />
          <div className={styles.bottomLeft}>
            <p className={styles.copy}>
              &copy; 2024 Fonts & Footers - All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
