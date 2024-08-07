import Image from "next/image";
import FalseButton from "../FalseButton/FalseButton";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./ServicesHero.module.css";
import Img from "../../../public/images/house15.png";

const ServicesHero = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.falseBtnContainer}>
              <FalseButton text='Services Info' btnType='primary' />
            </div>
            <h1 className={`${styles.heading} h2v3`}>
              <span className={styles.em}>Transform</span> your business with
              our <span className={styles.em2}> web solutions</span>
            </h1>
            <p className={styles.copy}>
              Welcome to Fonts & Footers, your source for high-performance,
              custom websites specializing in booking systems, e-commerce
              platforms, and business sites. We enhance user experience and SEO,
              delivering tailored solutions for your needs.
            </p>
          </div>
          <div className={styles.right}>
            <svg
              width='0'
              height='0'
              xmlns='http://www.w3.org/2000/svg'
              version='1.1'
            >
              <defs>
                <filter id='goo'>
                  <feGaussianBlur
                    in='SourceGraphic'
                    stdDeviation='5'
                    result='blur'
                  />
                  <feColorMatrix
                    in='blur'
                    mode='matrix'
                    values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9'
                    result='goo'
                  />
                  <feComposite in='SourceGraphic' in2='goo' operator='atop' />
                </filter>
              </defs>
            </svg>
            <div className={styles.miscContainer}>
              <div className={styles.imgContainer}>
                <Image
                  src={Img}
                  alt=''
                  layout='fill'
                  objectFit='cover'
                  className={styles.img}
                />
              </div>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default ServicesHero;
