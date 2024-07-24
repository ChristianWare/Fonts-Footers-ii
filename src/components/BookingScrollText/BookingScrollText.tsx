import Image from "next/image";
import Author from "../../../public/images/author.png";
import FalseButton from "../FalseButton/FalseButton";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./BookingScrollText.module.css";
import Booking from '../../../public/icons/booking.svg'

const BookingScrollText = () => {
  return (
    <section className={styles.bgColor}>
      <LayoutWrapper color='green3'>
        <div className={styles.content}>
          <div className={styles.falseBtnContainer}>
            <FalseButton btnType='primary' text='Overview' />
          </div>
          <h2 className={styles.heading}>
            Custom Booking Platforms for Seamless Reservations
          </h2>
          <div className={styles.bottom}>
            <Booking
              width={100}
              height={100}
              className={styles.icon}
            />
            <Booking
              width={100}
              height={100}
              className={styles.icon}
            />
            <Booking
              width={100}
              height={100}
              className={styles.icon}
            />
            
          </div>
          <p className={styles.text}>
            At Fonts & Footers, we specialize in creating custom booking
            platforms that streamline the reservation process for your business.
            Whether you need a direct booking website or a sophisticated
            appointment scheduling system, our solutions are designed to enhance
            user experience and operational efficiency.
          </p>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default BookingScrollText;
