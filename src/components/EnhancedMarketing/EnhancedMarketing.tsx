"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./EnhancedMarketing.module.css";
import Image from "next/image";
import Img from "../../../public/images/mission.png";

const EnhancedMarketing = () => {
  const data = [
    {
      title: "Empowering Businesses",
      description:
        "Our mission is to empower businesses with innovative and bespoke digital solutions that drive growth, enhance customer engagement, and foster long-term success.",
    },
    {
      title: "Delivering Excellence",
      description:
        "We aim to deliver excellence in every project by combining our expertise in design and technology, ensuring our clients receive superior quality and value.",
    },
    {
      title: "Fostering Innovation",
      description:
        "We are committed to fostering a culture of innovation, continuously exploring new trends and technologies to provide our clients with forward-thinking and effective digital strategies.",
    },
  ] as const;
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
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
          <div className={styles.right}>
            <div className={styles.rightTop}>
              <div className={styles.box}>
                <h2 className={styles.heading}>Our Mission</h2>
                <p className={styles.copy}>
                  At Fonts and Footers, our mission is driven by a passion for
                  excellence, innovation, and empowering our clients to achieve
                  their digital goals.
                </p>
              </div>
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
                <div className={styles.imgContainerii}>
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
            <div className={styles.rightBottom}>
              {data.map((x, index) => (
                <div key={index} className={styles.card}>
                  <h3 className={styles.title}>{x.title}</h3>
                  <p className={styles.desc}>{x.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default EnhancedMarketing;
