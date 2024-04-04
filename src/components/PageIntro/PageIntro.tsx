"use client";

import ArrowCluster from "../ArrowCluster/ArrowCluster";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./PageIntro.module.css";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../../../animation/variants";

interface Props {
  h1Color?: string;
  h1OutlineColor?: string;
  text: string;
  copy?: string;
  copyColor?: string;
  span?: string;
  orientation?: string;
  src?: StaticImageData;
}

const PageIntro = ({
  h1Color = "",
  h1OutlineColor = "",
  text,
  copy,
  copyColor = "",
  span,
  orientation = "",
  src,
}: Props) => {
  return (
    <section className={styles.container}>
      {src && (
        <>
          <div className={styles.imgOverlay}></div>
          <Image
            src={src}
            alt='image'
            fill
            className={styles.img}
            priority
            sizes='s100vw'
            quality={100}
          />
        </>
      )}
      <LayoutWrapper>
        <div className={`${styles.content} ${styles[orientation]}`}>
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className={styles.arrowContainer}
          >
            <ArrowCluster />
          </motion.div>
          <motion.h1
            variants={fadeIn("down", 0.3)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className={`${styles.heading} ${styles[h1Color]}`}
          >
            {text}
            <span className={`${styles.span} ${styles[h1OutlineColor]}`}>
              {" "}
              <br /> {span}
            </span>
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.6)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className={`${styles.copy} ${styles[copyColor]}`}
          >
            {copy}
          </motion.p>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default PageIntro;
