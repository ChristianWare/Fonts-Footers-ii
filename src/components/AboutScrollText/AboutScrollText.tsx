import LayoutWrapper from "../LayoutWrapper";
import styles from "./AboutScrollText.module.css";
import Author from "../../../public/images/author.png";
import Image from "next/image";
import FalseButton from "../FalseButton/FalseButton";

const AboutScrollText = () => {
  return (
    <section className={styles.bgColor}>
      <LayoutWrapper color='green3'>
        <div className={styles.content}>
          <div className={styles.falseBtnContainer}>
            <FalseButton btnType='secondary' text='About us' />
          </div>
          <h2 className={`${styles.heading} h2v2`}>Who are we?</h2>
          <div className={styles.bottom}>
            <Image
              src={Author}
              alt='Author'
              width={100}
              height={100}
              className={styles.author}
            />
            <p className={styles.authorDetails}>
              ~ Chris Ware, Founder & CEO ~
            </p>
          </div>
          <p className={styles.text}>
            Fonts & Footers is a digital agency focusing on web design, web
            development, and SEO. We&apos;re experts at blending the latest
            technology with creative ideas for top-notch results. By working
            with us, you get personal care, support, and a website that boosts
            engagement and sales. We opperate out of sunny Phoenix, AZ.
          </p>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default AboutScrollText;
