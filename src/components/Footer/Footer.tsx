"use client";

import styles from "./Footer.module.css";
import Link from "next/link";
import { footer } from "@/lib/data";
import Insta from "../../../public/icons/instagram.svg";
import LinkedIn from "../../../public/icons/linkedin.svg";
import Facebook from "../../../public/icons/facebook.svg";
import Logo from "../../../public/icons/fnfloglofooter.svg";

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
        <div className={styles.bottomDesktop}>
          <div className={styles.logoContainer}>
            <Logo className={styles.logo} />
          </div>
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
