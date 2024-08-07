import ContactForm from "../ContactForm/ContactForm";
import FalseButton from "../FalseButton/FalseButton";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./ContactHero.module.css";

const ContactHero = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <h1 className={styles.heading}>Contact Us</h1>
            <p className={styles.copy}>
              Whether you&apos;re a prospective client or have questions about
              our services, reaching out is simple and quick. We&apos;re ready
              to assist you to ensuring a seamless and personalized experience
              as you take the next step in transforming your vacation rental
              business.
            </p>
            <br />
            <b>
              The details shared here allow us to dive into details on our
              discovery call. Anything you share here remains confidential.
            </b>
          </div>
          <div className={styles.right}>
            <ContactForm />
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default ContactHero;
