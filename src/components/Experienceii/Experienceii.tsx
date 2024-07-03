import { experince } from "@/lib/data";
import styles from "./Experienceii.module.css";
import Button from "../Button/Button";
import SectionHeading from "../SectionHeading/SectionHeading";
import FalseButton from "../FalseButton/FalseButton";

const Experienceii = () => {
  return (
    <section className={styles.container} id='experience'>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.sectionIntroContainer}></div>
          {/* <h2 className={styles.heading}>• Experience •</h2> */}
          <FalseButton btnType='primary' text='Recent Projects' />
          <p className={styles.copy}>
            As a seasoned web developer, I have experience in creating dynamic
            and responsive websites. I&#39;ve successfully collaborated on a
            variety of projects, demonstrating proficiency in Next.js/React, and
            a keen eye for design. Through my journey, I&#39;ve honed my skills
            to ensure that every project I undertake is not just functional but
            also aesthetically compelling.{" "}
          </p>
        </div>
        <div className={styles.right}>
          {experince.map((x, index) => (
            <div key={index} className={styles.box}>
              <h3 className={styles.title}>{x.title}</h3>
              <p className={styles.years}>{x.years}</p>
            </div>
          ))}
          <div className={styles.btnContainer}>
            <Button
              btnType='primary'
              text='Download My Resume'
              href='/ChrisWareResume2024.pdf'
              target='_blank'
              download={true}
              arrow
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experienceii;
