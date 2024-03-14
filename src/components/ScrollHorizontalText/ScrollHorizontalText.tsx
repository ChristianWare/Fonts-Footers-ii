"use client";

import { gsap } from "gsap";
import styles from "./ScrollHorizontalText.module.css";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import Arrow from "../../../public/icons/arrow.svg";

const ScrollHorizontalText = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        // eslint-disable-next-line react-hooks/exhaustive-deps
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.03 * direction;
  };

  return (
    <section className={styles.sliderContainer}>
      <div ref={slider} className={styles.slider}>
        <h2 ref={firstText}>
          Fonts & Footers{" "}
          <span>
            <Arrow className={styles.icon2} />
          </span>{" "}
          Fonts & Footers{" "}
          <span>
            <Arrow className={styles.icon2} />
          </span>{" "}
          Fonts & Footers{" "}
          <span>
            <Arrow className={styles.icon2} />
          </span>{" "}
          Fonts & Footers{" "}
          <span>
            <Arrow className={styles.icon2} />
          </span>{" "}
          Fonts & Footers{" "}
          <span>
            <Arrow className={styles.icon2} />
          </span>{" "}
          Fonts & Footers{" "}
          <span>
            <Arrow className={styles.icon2} />
          </span>{" "}
          Fonts & Footers{" "}
          <span>
            <Arrow className={styles.icon2} />
          </span>{" "}
          Fonts & Footers{" "}
          <span>
            <Arrow className={styles.icon2} />
          </span>{" "}
          Fonts & Footers{" "}
          <span>
            <Arrow className={styles.icon2} />
          </span>{" "}
          Fonts & Footers{" "}
          <span>
            <Arrow className={styles.icon2} />
          </span>{" "}
        </h2>
        <h2 ref={secondText}>
          Fonts & Footers{" "}
          <span>
            <Arrow className={styles.icon2} />
          </span>{" "}
          Fonts & Footers{" "}
          <span>
            <Arrow className={styles.icon2} />
          </span>{" "}
          Fonts & Footers{" "}
          <span>
            <Arrow className={styles.icon2} />
          </span>{" "}
          Fonts & Footers{" "}
          <span>
            <Arrow className={styles.icon2} />
          </span>{" "}
          Fonts & Footers{" "}
          <span>
            <Arrow className={styles.icon2} />
          </span>{" "}
          Fonts & Footers{" "}
          <span>
            <Arrow className={styles.icon2} />
          </span>{" "}
          Fonts & Footers{" "}
          <span>
            <Arrow className={styles.icon2} />
          </span>{" "}
          Fonts & Footers{" "}
          <span>
            <Arrow className={styles.icon2} />
          </span>{" "}
          Fonts & Footers{" "}
          <span>
            <Arrow className={styles.icon2} />
          </span>{" "}
          Fonts & Footers{" "}
          <span>
            <Arrow className={styles.icon2} />
          </span>{" "}
        </h2>
      </div>
    </section>
  );
};
export default ScrollHorizontalText;
