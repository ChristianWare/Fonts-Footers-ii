import Image from "next/image";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./EcommResponsive.module.css";
import Img1 from "../../../public/images/house12.png";

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

const EcommResponsive = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <h2 className={`${styles.heading} h2v2`}>
              Responsive E-commerce Design
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
                  src={Img1}
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
export default EcommResponsive;
