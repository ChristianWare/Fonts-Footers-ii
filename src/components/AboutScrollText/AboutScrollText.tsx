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
              {/* We are Fonts and Footers™, an award-winning digital design agency
              focusing on branding, web design, and Product designing in the
              heart of Phoenix, AZ. We design creative brands, websites, and
              product that deliver results. */}
              Welcome to Fonts and Footers™, the premier web design agency in
              Phoenix, AZ. Our team specializes in creating responsive, visually
              stunning websites that elevate your brand and engage your
              audience. Whether you&apos;re a startup, small business, or
              established enterprise, we have the expertise to bring your vision
              to life.
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
