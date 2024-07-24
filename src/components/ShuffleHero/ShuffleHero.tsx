"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styles from "./ShuffleHero.module.css";
import SEO from "../../../public/icons/seo.svg";
import Design from "../../../public/icons/designii.svg";
import Analytics from "../../../public/icons/analytics.svg";
import Payment from "../../../public/icons/payment.svg";
import Hexagon from "../../../public/icons/hexagon.svg";
import Social from "../../../public/icons/social.svg";
import Multiple from "../../../public/icons/multiple.svg";
import Cart from "../../../public/icons/cart.svg";
import Booking from "../../../public/icons/booking.svg";

const ShuffleHero = () => {
  return (
    <section className={styles.section}>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array: any) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: <Multiple width={50} height={50} className={styles.icon} />,
  },
  {
    id: 2,
    src: <Design width={50} height={50} className={styles.icon} />,
  },
  {
    id: 3,
    src: <Analytics width={50} height={50} className={styles.icon} />,
  },
  {
    id: 4,
    src: <Payment width={50} height={50} className={styles.icon} />,
  },
  {
    id: 5,
    src: <Hexagon width={50} height={50} className={styles.icon} />,
  },
  {
    id: 6,
    src: <Social width={50} height={50} className={styles.icon} />,
  },
  {
    id: 7,
    src: <Cart width={50} height={50} className={styles.icon} />,
  },
  {
    id: 8,
    src: <Booking width={50} height={50} className={styles.icon} />,
  },
  {
    id: 9,
    src: <SEO width={50} height={50} className={styles.icon} />,
  },
];

const generateSquares = () => {
  return squareData.map((sq: any) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className={styles.square}
    >
      {sq.src}
    </motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());
    setSquares((prevSquares) => shuffle([...prevSquares]));

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return <div className={styles.grid}>{squares}</div>;
};

export default ShuffleHero;
