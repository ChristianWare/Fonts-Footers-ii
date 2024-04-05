"use client";

import PageIntro from "@/components/PageIntro/PageIntro";
import styles from "./GlossaryPage.module.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import { glossaryMenu } from "@/lib/data";
import Link from "next/link";
import ScrollHorizontalText from "@/components/ScrollHorizontalText/ScrollHorizontalText";
import { motion } from "framer-motion";
import { fadeIn } from "../../../animation/variants";

export default function GlossaryPage() {
  return (
    <>
      <PageIntro
        h1Color='green'
        h1OutlineColor='greenOutline'
        text='Direct Booking'
        span='Glossary'
      />
      <ScrollHorizontalText />

      <LayoutWrapper>
        <div className={styles.topContainer}></div>
        <div className={styles.bottom}>
          <div className={styles.bottomLeft}>
            {glossaryMenu.map((x, index) => (
              <div key={index} className={styles.box}>
                <Link href={`#${x.letter}`} className={styles.letter}>
                  {x.letter}
                </Link>
                <ul className={styles.term}>
                  {x.section.map((y, index) => (
                    <li key={index} className={styles.term}>
                      {y.term}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className={styles.bottomRight}>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className={styles.top}
            >
              {glossaryMenu.map((x, index) => (
                <Link
                  href={`#${x.letter}`}
                  key={index}
                  className={styles.letter1}
                >
                  {x.letter}
                </Link>
              ))}
            </motion.div>
            {glossaryMenu.map((x, index) => (
              <div
                key={index}
                className={styles.sectionContainer}
                id={x.letter}
              >
                <h2 className={styles.heading}>{x.letter}</h2>
                <div className={styles.sBottom}>
                  {x.section.map((y, index) => (
                    <Link
                      href={`/glossary/${y.term
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      key={index}
                      className={styles.section}
                      id={y.term}
                    >
                      <h3 className={styles.title}>{y.term}</h3>
                      <p className={styles.desc}>{y.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </>
  );
}
