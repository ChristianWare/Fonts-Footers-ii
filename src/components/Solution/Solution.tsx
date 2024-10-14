import Image from "next/image";
import styles from "./Solution.module.css";
import LayoutWrapper from "../LayoutWrapper";
import Img1 from "../../../public/images/solution.png";
import FalseButton from "../FalseButton/FalseButton";

const data = [
  {
    id: 1,
    title: "Inspiring Design",
    desc: "The design of your website inspires and you stay in the minds of your customers.",
  },
  {
    id: 2,
    title: "Professional identity",
    desc: "You will be perceived by your visitors as trustworthy and professional.",
  },
  {
    id: 3,
    title: "Authentic appearance",
    desc: "You can identify with your website and are happy to share the link with potential customers.",
  },
  {
    id: 4,
    title: "Stress-free management",
    desc: "Change or expand your content effortlessly, without technical know-how.",
  },
];

const Solution = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.falseBtnContainer}>
              <FalseButton btnType='primary' text='Our Solutions' />
            </div>
            <h2 className={`${styles.heading} h2v2`}>
              Work with Fonts & Footers and we&apos;ll provide these solutions:
            </h2>
            <div className={styles.rightBottom}>
              {data.map((x) => (
                <div key={x.id} className={styles.card}>
                  <h3 className={styles.title}>{x.title}</h3>
                  <p className={styles.desc}>{x.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.imgContainer}>
              <Image
                src={Img1}
                alt=''
                layout='fill'
                objectFit='cover'
                className={styles.img}
              />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Solution;
