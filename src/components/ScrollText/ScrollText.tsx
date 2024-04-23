"use client";
import { useEffect, useRef } from "react";
import styles from "./ScrollText.module.css";
import LayoutWrapper from "../LayoutWrapper";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import House from "../../../public/icons/house.svg";

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
    "While online travel authorities can boost your property's exposure, you should also consider developing your own direct booking website. This can help you build a personalized online presence, and enhance the reservation process for your guests, making it easier for them to book their stay directly with you.";

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
    <section className={styles.bgColor}>
      <LayoutWrapper color='green3'>
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
            <div className={styles.houseContainer}>
              <House className={styles.icon} />
              <House className={styles.icon} />
              <House className={styles.icon} />
            </div>
            <p className={styles.copy}>
              A customized website for your vacation rental home acts as your
              unique digital storefront, enhancing guest experience and brand
              visibility. By enabling direct bookings, you attract guests who
              prefer booking directly, avoiding commission fees. Having your own
              website that optimizes functionality and aesthetic appeal will set
              your property apart in the competitive market.
            </p>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default ScrollText;
