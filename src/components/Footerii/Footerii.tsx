import Link from "next/link";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./Footerii.module.css";
import Button from "../Button/Button";

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
                </div>
              </form>
            </div>
          </div>
          <div className={styles.bottom}></div>
        </div>
      </LayoutWrapper>
    </footer>
  );
};
export default Footerii;
