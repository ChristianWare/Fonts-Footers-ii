"use client";
import { useEffect, useRef } from "react";
import styles from "./ScrollText.module.css";
import LayoutWrapper from "../LayoutWrapper";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Arrow from "../../../public/icons/arrow.svg";

const ScrollText = () => {
  const [lettersRef, setLettersRef] = useArrayRef();

  function useArrayRef(): [
    React.MutableRefObject<HTMLSpanElement[]>,
    (ref: HTMLSpanElement) => void
  ] {
    const lettersRef = useRef<HTMLSpanElement[]>([]);
    lettersRef.current = [];
    return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
  }

  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  const text =
    "While Airbnb and VRBO can boost your property's exposure, you should also consider developing your own direct booking website. This can help you build a personalized online presence, and enhance the reservation process for your guests, making it easier for them to book their stay directly with you.";

  useEffect(() => {
    const anim = gsap.to(lettersRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: 0.9,
        start: "top center",
        end: "bottom 85%",
      },
      color: "#aeff12",
      duration: 3,
      stagger: 1,
    });
    return () => {
      anim.kill();
    };
  }, [lettersRef]);

  return (
    <div className={styles.bgColor}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.reveal}>
            <div ref={triggerRef}>
              <h2 className={styles.text}>
                {text.split("").map((letter, index) => (
                  <span
                    key={index}
                    className={styles.revealText}
                    ref={setLettersRef}
                  >
                    {letter}
                  </span>
                ))}
              </h2>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.arrowContainer}>
              <Arrow className={styles.icon} />
              <Arrow className={styles.icon} />
              <Arrow className={styles.icon} />
            </div>
            <p className={styles.copy}>
              A tailored short-term rental website acts as your unique digital
              storefront, enhancing guest experience and brand visibility. By
              enabling direct bookings, you attract guests who prefer booking
              directly, avoiding commission fees. Professional vacation rental
              web design services can optimize functionality and aesthetic
              appeal, setting your property apart in the competitive market.
            </p>
          </div>
        </div>
      </LayoutWrapper>
    </div>
  );
};
export default ScrollText;
