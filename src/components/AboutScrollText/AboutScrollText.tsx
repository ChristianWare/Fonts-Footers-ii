import LayoutWrapper from "../LayoutWrapper";
import styles from "./AboutScrollText.module.css";
import Author from "../../../public/images/author.png";
import Image from "next/image";

const AboutScrollText = () => {
  return (
    <section className={styles.bgColor}>
      <LayoutWrapper color='green3'>
        <div className={styles.content}>
          <div className={styles.bottom}>
            <Image
              src={Author}
              alt='Author'
              width={100}
              height={100}
              className={styles.author}
            />
            <p className={styles.authorDetails}>~ Chris Ware, Founder & CEO ~</p>
          </div>
          <div className={styles.reveal}>
            <h2 className={styles.text}>
              We are <span className={styles.span1}>Fonts and Footers™,</span>
              an award-winning{" "}
            <span className={styles.span2}>digital design agency</span>
              focusing on web design, web development, and SEO in the heart of{" "}
              <span className={styles.span1}>Phoenix, AZ.</span>
              We design creative brands, websites, and products that
              <span className={styles.span2}>deliver results.</span>
              {/* Welcome to Fonts and Footers™, the premier web design agency in
              Phoenix, AZ. Our team specializes in creating responsive, visually
              stunning websites that elevate your brand and engage your
              audience. Whether you&apos;re a startup, small business, or
              established enterprise, we have the expertise to bring your vision
              to life. */}
            </h2>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default AboutScrollText;
