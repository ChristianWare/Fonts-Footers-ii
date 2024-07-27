"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./Reviewsii.module.css";
import { reviews } from "@/lib/data";
import LeftArrow from "../../../public/icons/leftArrow.svg";
import RightArrow from "../../../public/icons/rightArrow.svg";

const CARD_SIZE_LG = 365;
const CARD_SIZE_SM = 290;

const Y_TRANSLATE = -10;

const STAGGER = 0;
const CENTER_STAGGER = -65;

const SECTION_HEIGHT = 700;
interface Review {
  id: number;
  review: string;
  reviewer: string;
  company: string;
}

interface TestimonialCardProps {
  position: number;
  testimonial: Review;
  handleMove: (position: number) => void;
  cardSize: number;
}

export const Reviewsii: React.FC = () => {
  const [cardSize, setCardSize] = useState(CARD_SIZE_LG);
  const [testimonials, setTestimonials] = useState<Review[]>([...reviews]);

  const handleMove = (position: number) => {
    const copy = [...testimonials];

    if (position > 0) {
      for (let i = position; i > 0; i--) {
        const firstEl = copy.shift();
        if (!firstEl) return;
        copy.push(firstEl);
      }
    } else {
      for (let i = position; i < 0; i++) {
        const lastEl = copy.pop();
        if (!lastEl) return;
        copy.unshift(lastEl);
      }
    }

    setTestimonials(copy);
  };

  useEffect(() => {
    const { matches } = window.matchMedia("(min-width: 640px)");

    if (matches) {
      setCardSize(CARD_SIZE_LG);
    } else {
      setCardSize(CARD_SIZE_SM);
    }

    const handleSetCardSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      if (matches) {
        setCardSize(CARD_SIZE_LG);
      } else {
        setCardSize(CARD_SIZE_SM);
      }
    };

    window.addEventListener("resize", handleSetCardSize);

    return () => window.removeEventListener("resize", handleSetCardSize);
  }, []);

  return (
    <div
      className={styles.container}
      style={{
        height: SECTION_HEIGHT,
      }}
    >
      {testimonials.map((t, idx) => {
        let position = 0;

        if (testimonials.length % 2) {
          position = idx - (testimonials.length + 1) / 2;
        } else {
          position = idx - testimonials.length / 2;
        }

        return (
          <TestimonialCard
            key={t.id}
            testimonial={t}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className={styles.buttonContainer}>
        <button onClick={() => handleMove(-1)} className={styles.button}>
          <LeftArrow className={styles.left} />
        </button>
        <button onClick={() => handleMove(1)} className={styles.button}>
          <RightArrow className={styles.right} />
        </button>
      </div>
    </div>
  );
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  position,
  testimonial,
  handleMove,
  cardSize,
}) => {
  const isActive = position === 0;

  return (
    <motion.div
      initial={false}
      onClick={() => handleMove(position)}
      className={`${styles.testimonialCard} ${
        isActive ? styles.testimonialCardActive : ""
      }`}
      animate={{
        width: cardSize,
        height: cardSize,
        x: `calc(-50% + ${position * (cardSize / 1.5)}px)`,
        y: `calc(-50% + ${
          isActive ? CENTER_STAGGER : position % 2 ? Y_TRANSLATE : STAGGER
        }px)`,
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
    >
      <div className={styles.stuff}>
        <h4 className={isActive ? styles.textBlack : styles.textNormal}>
          {testimonial.review}
        </h4>
        <p
          className={`absolute bottom-8 left-8 right-8 mt-2 text-sm italic ${
            isActive ? styles.textNeutral700 : styles.textNeutral700
          }`}
        >
          - {testimonial.reviewer}, {testimonial.company}
        </p>
      </div>
    </motion.div>
  );
};
