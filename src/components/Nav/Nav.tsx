"use client";

import styles from "./Nav.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "../Button/Button";
import TopNav from "../TopNav/TopNav";
import { usePathname } from "next/navigation";
import Arrow from "../../../public/icons/arrow.svg";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
    setIsOverlayVisible(!isOverlayVisible);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      if (window.innerWidth <= 968 && isOpen) {
        body.style.overflow = "hidden";
      } else {
        body.style.overflow = "auto";
      }
    }

    const handleResize = () => {
      setIsOpen(false);
      window.addEventListener("resize", handleResize);
    };

    return () => {
      window.removeEventListener("resize", handleResize);
      if (body) {
        body.style.overflow = "auto";
      }
    };
  }, [isOpen]);

  const navItems = [
    // {
    //   text: "Home",
    //   href: "/",
    // },
    {
      text: "Benefits",
      href: "/benefits",
    },
    {
      text: "Features",
      href: "/features",
    },
    {
      text: "About US",
      href: "/about",
    },
    {
      text: "FAQS",
      href: "/faqs",
    },
    {
      text: "Blog",
      href: "/blog",
    },
    {
      text: "Contact",
      href: "/contact",
    },
  ];

  const pathname = usePathname();

  return (
    <>
      <TopNav />
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <ul
            className={
              isOpen === false
                ? styles.navMenu
                : `${styles.navMenu} ${styles.active}`
            }
          >
            <li className={styles.navItem} onClick={() => setIsOpen(false)}>
              <Link href='/' className={styles.navItem}>
                {pathname === "/" ? (
                  <>
                    <Arrow className={styles.icon} />
                    Home
                  </>
                ) : (
                  "Home"
                )}
              </Link>
            </li>
            {navItems.map((navItem, index) => (
              <li
                key={index}
                className={styles.navItem}
                onClick={() => setIsOpen(false)}
              >
                <Link href={navItem.href} className={styles.navItem}>
                  {pathname.includes(navItem.href) && (
                    <>
                      <Arrow className={styles.icon} />
                      {navItem.text}
                    </>
                  )}
                  {!pathname.includes(navItem.href) && navItem.text}{" "}
                </Link>
              </li>
            ))}
            {isOpen && (
              <div className={styles.btnContainerMobile}>
                <Button
                  href={"/"}
                  text='Contact Us'
                  btnType='secondary'
                  arrow
                />
                <Button
                  href={"/"}
                  text='Schedule a call'
                  btnType='secondary'
                  arrow
                />
              </div>
            )}
          </ul>
          {isOpen && (
            <div
              className={`${styles.overlay} ${
                isOverlayVisible ? styles.visible : ""
              }`}
              onClick={() => {
                setIsOpen(false);
                setIsOverlayVisible(false);
              }}
            ></div>
          )}
          <div className={styles.btnContainer}>
            <Button href={"/"} text='Contact Us' btnType='secondaryNav' />
            <Button href={"/"} text='Schedule a call' btnType='primaryNav' />
          </div>
          <span
            className={
              isOpen === false
                ? styles.hamburger
                : `${styles.hamburger} ${styles.active}`
            }
            onClick={openMenu}
          >
            <span className={styles.whiteBar}></span>
            <span className={styles.whiteBar}></span>
            <span className={styles.whiteBar}></span>
          </span>
        </nav>
      </header>
    </>
  );
}
export default Nav;
