import Link from "next/link";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./Footerii.module.css";
import Button from "../Button/Button";
import Insta from "../../../public/icons/instagram.svg";
import LinkedIn from "../../../public/icons/linkedin.svg";
import Facebook from "../../../public/icons/facebook.svg";
import Logo from "../../../public/icons/fnflogo.svg";

const Footerii = () => {
  const footer = [
    {
      id: 1,
      heading: "Home Loans",
      section: [
        {
          id: 1.1,
          name: "Investment Loans",
          href: "/",
        },
        {
          id: 1.2,
          name: "Refinancing Options",
          href: "/",
        },
        {
          id: 1.3,
          name: "Contruction Loans",
          href: "/",
        },
        {
          id: 1.4,
          name: "First Home Buyer",
          href: "/",
        },
        {
          id: 1.5,
          name: "Live-in Home Loans",
          href: "/",
        },
      ],
    },
  ];

  const footerii = [
    {
      id: 2,
      heading: "Other Links",
      section: [
        {
          id: 2.1,
          name: "About Us",
          href: "/",
        },
        {
          id: 2.2,
          name: "Contact Us",
          href: "/",
        },
        {
          id: 2.3,
          name: "Blog",
          href: "/",
        },
      ],
    },
  ];
  return (
    <footer>
      <LayoutWrapper>
        <div className={styles.content}>
          <Link href='/' className={styles.logoMobile}>
            FONTS & FOOTERS
          </Link>
          <div className={styles.top}>
            <div className={styles.box}>
              <Link href='/' className={styles.logo}>
                FONTS & FOOTERS
              </Link>
            </div>
            <div className={styles.box}>
              {footer.map((x) => (
                <div key={x.id}>
                  <h5 className={styles.sectionHeading}>{x.heading}</h5>
                  <ul className={styles.sectionList}>
                    {x.section.map((y) => (
                      <li key={y.id} className={styles.listItem}>
                        <Link href={y.href}>{y.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className={styles.box}>
              {footerii.map((x) => (
                <div key={x.id}>
                  <h5 className={styles.sectionHeading}>{x.heading}</h5>
                  <ul className={styles.sectionList}>
                    {x.section.map((y) => (
                      <li key={y.id} className={styles.listItem}>
                        <Link href={y.href}>{y.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className={styles.box}>
              <h5 className={styles.sectionHeading}>Subscribe</h5>
              <p className={styles.newslettterCopy}>
                Join our newsletter to stay up to date on features and releases.
              </p>
              <form className={styles.form}>
                <div className={styles.labelInputBox}>
                  {/* <label htmlFor='firstName'>First Name</label> */}
                  <input id='firstName' type='text' />
                </div>
                <div className={styles.btnContainer}>
                  <Button btnType='primary' href='/' text='Subscribe' arrow />
                  <small className={styles.small}>
                    By subscribing you agree to with our Privacy Policy and
                    provide consent to receive updates from our company.
                  </small>
                </div>
              </form>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.left}>
              <small className={styles.small1}>
                Another Website by <b>Fonts & Footers</b> |
              </small>
              <small className={styles.small1}>
                © 2024 Fonts & Footers. All rights reserved. |
              </small>
              <small className={styles.small1}>Privacy Policy</small>
            </div>
            <div className={styles.right}>
              <div className={styles.leftBottom}>
                <Link
                  href='https://www.linkedin.com/'
                  target='_blank'
                  aria-label='LinkedIn'
                  className={styles.detail}
                >
                  <LinkedIn className={styles.icon} width={12} height={12} />
                </Link>
                <Link
                  href='https://www.facebook.com/'
                  target='_blank'
                  aria-label='Facebook'
                  className={styles.detail}
                >
                  <Facebook className={styles.icon} width={12} height={12} />
                </Link>
                <Link
                  href='https://instagram.com/'
                  target='_blank'
                  aria-label='Instagram'
                  className={styles.detail}
                >
                  <Insta className={styles.icon} width={12} height={12} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </footer>
  );
};
export default Footerii;
