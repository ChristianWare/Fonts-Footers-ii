import LayoutWrapper from "../LayoutWrapper";
import styles from "./ContactDetails.module.css";
import Image from "next/image";
import Img from "../../../public/images/house25.png";
import SocialsContainer from "../SocialsContainer/SocialsContainer";

const ContactDetails = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.imgContainer}>
              <Image src={Img} className={styles.img} alt='image' fill />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.top}>
              <div className={styles.box}>
                <h2 className={styles.title}>Phone</h2>
                <p className={styles.detail}>623-632-6780</p>
              </div>
              <div className={styles.box}>
                <h2 className={styles.title}>Email</h2>
                <p className={styles.detail}>hello@fontsandfooters.com</p>
              </div>
              <div className={styles.box}>
                <h2 className={styles.title}>Calendly</h2>
                <p className={styles.detail}>calendly.com/fontsandfooters</p>
              </div>
            </div>
            <div className={styles.bottom}>
              <SocialsContainer />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default ContactDetails;
