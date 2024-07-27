import LayoutWrapper from "@/components/LayoutWrapper";
import styles from "./MPSection1.module.css";
import FalseButton from "../FalseButton/FalseButton";
import Scaleable from '../../../public/icons/scaleable.svg'
import Performance from '../../../public/icons/performance.svg'
import Secure from '../../../public/icons/secure.svg'

const data = [
  {
    id: 1,
    title: "Scalable Solutions",
    desc: "Our e-commerce platforms grow with your business, ensuring you can add new features and handle increased traffic as needed.",
    icon: <Scaleable width={75} height={75} className={styles.icon} />,
  },
  {
    id: 2,
    title: "Secure Transactions",
    desc: "We prioritize security to protect your customers' data and ensure safe transactions with SSL encryption and PCI compliance.",
    icon: <Secure width={75} height={75} className={styles.icon} />,
  },
  {
    id: 2,
    title: "Performance Optimization",
    desc: "Our websites are optimized for speed and performance, providing a smooth shopping experience and reducing cart abandonment.",
    icon: <Performance width={75} height={75} className={styles.icon} />,
  },
];

const MPSection1 = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <h2 className={`${styles.heading} h2v3`}>
              Custom E-commerce Development{" "}
            </h2>
            {/* <p className={styles.copy}>
              Our custom e-commerce development services ensure that your online
              store is uniquely designed to meet your business goals. We build
              scalable and secure platforms that are tailored to your specific
              needs, whether you’re a startup or an established enterprise.
            </p> */}
          </div>
          <div className={styles.btnContainer}>
            <FalseButton text='Key Features' btnType='primary' />
          </div>
          <div className={styles.bottom}>
            {data.map((x) => (
              <div key={x.id} className={styles.card}>
                <div className={styles.left}>{x.icon}</div>
                <div className={styles.right}>
                  <h3 className={styles.title}>{x.title}</h3>
                  <p className={styles.desc}>{x.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default MPSection1;
