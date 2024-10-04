import Image from "next/image";
import styles from "./Solution.module.css";
import LayoutWrapper from "../LayoutWrapper";
import Img1 from "../../../public/images/solution.png";

const data = [
  {
    id: 1,
    title: "Mobile-First Approach",
    desc: "We design with a mobile-first mindset, ensuring your site is optimized for mobile users from the start.",
  },
  {
    id: 2,
    title: "Cross-Device Compatibility:",
    desc: "Our designs adapt to different screen sizes, providing a consistent and engaging experience for your customers",
  },
  {
    id: 3,
    title: "User-Friendly Navigation",
    desc: "We focus on intuitive navigation and clear calls-to-action, making it easy for customers to find products and complete purchases.",
  },
];

const Solution = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <h2 className={`${styles.heading} h2v2`}>
              Work with <span className={styles.em}> Fonts & Footers</span> and
              we&apos;ll provide these solutions
            </h2>
            <p className={styles.copy}>
              Our e-commerce websites are designed to provide a seamless
              shopping experience across all devices, from desktops to mobile
              phones. With more consumers shopping on mobile devices, it&apos;s
              crucial to have a responsive design that looks great and functions
              perfectly on any screen size.
            </p>
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
