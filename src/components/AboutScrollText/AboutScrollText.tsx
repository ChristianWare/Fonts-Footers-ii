import LayoutWrapper from "../LayoutWrapper";
import styles from "./AboutScrollText.module.css";
import Author from "../../../public/images/author.png";
import Image from "next/image";

const AboutScrollText = () => {
  // const [lettersRef, setLettersRef] = useArrayRef();

  // function useArrayRef(): [
  //   React.MutableRefObject<HTMLSpanElement[]>,
  //   (ref: HTMLSpanElement) => void
  // ] {
  //   const lettersRef = useRef<HTMLSpanElement[]>([]);
  //   lettersRef.current = [];
  //   return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
  // }

  // const triggerRef = useRef(null);

  // gsap.registerPlugin(ScrollTrigger);

  // const text =
  //   '" Our vision is for Homeowners to connect directly with travelers, without relying on platforms like Airbnb. We  help you maximizing revenue, build guest relationships, and thrive in the home rental industry. "';

  // useEffect(() => {
  //   const anim = gsap.to(lettersRef.current, {
  //     scrollTrigger: {
  //       trigger: triggerRef.current,
  //       scrub: 0.9,
  //       start: "top center",
  //       end: "bottom 85%",
  //     },
  //     color: "#aeff12",
  //     duration: 3,
  //     stagger: 1,
  //   });
  //   return () => {
  //     anim.kill();
  //   };
  // }, [lettersRef]);

  return (
    <section className={styles.bgColor}>
      <LayoutWrapper color='green3'>
        <div className={styles.content}>
          <div className={styles.reveal}>
            {/* <div ref={triggerRef}> */}
            <h2 className={styles.text}>
              {/* {text.split("").map((letter, index) => (
                <span
                  key={index}
                  className={styles.revealText}
                  ref={setLettersRef}
                >
                  {letter}
                </span>
              ))} */}
              Our vision is for Homeowners to connect directly with travelers,
              without relying on platforms like Airbnb. We help you maximizing
              revenue, build guest relationships, and thrive in the home rental
              industry.
            </h2>
            {/* </div> */}
          </div>
          <div className={styles.bottom}>
            <Image
              src={Author}
              alt='Author'
              width={100}
              height={100}
              className={styles.author}
            />
            <p className={styles.authorDetails}>Chris Ware, Founder & CEO</p>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default AboutScrollText;
