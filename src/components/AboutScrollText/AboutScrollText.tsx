import LayoutWrapper from "../LayoutWrapper";
import styles from "./AboutScrollText.module.css";
import Author from "../../../public/images/author.png";
import Image from "next/image";

const AboutScrollText = () => {
  return (
    <section className={styles.bgColor}>
      <LayoutWrapper color='green3'>
        <div className={styles.content}>
          <div className={styles.reveal}>
            <h2 className={styles.text}>
              &ldquo;Our vision is for Homeowners to connect directly with
              travelers, without relying on platforms like Airbnb. We help you
              maximizing revenue, build guest relationships, and thrive in the
              home rental industry.&rdquo;
            </h2>
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
