import styles from "./BookingHero.module.css";
import Booking from "../../../public/icons/booking.svg";
import LayoutWrapper from "../LayoutWrapper";

const data = [
  {
    id: 1,
    heading: "Strong Online Presence",
    desc: "We understand the importance of a visually appealing and effective online presence to boost sales.",
  },
  {
    id: 2,
    heading: "Affordable Packages",
    desc: "Whether you're starting a new site or updating an existing one, we offer budget-friendly packages tailored to your needs.",
  },
  {
    id: 3,
    heading: "Attention-Grabbing Designs",
    desc: "Our online stores are designed to capture attention and provide a seamless shopping experience.",
  },
  {
    id: 4,
    heading: "Custom and Mobile-Friendly",
    desc: "We offer everything from custom designs to mobile-friendly options to ensure your site stands out in the digital marketplace.",
  },
];

const BookingHero = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <Booking className={styles.icon} />
            <h1 className={styles.heading}>
              Custom Booking Platforms for Seamless Reservations{" "}
            </h1>
            <p className={styles.copy}>
              Empower your business with efficient and user-friendly booking
              systems.
            </p>
          </div>
          <div className={styles.right}>
            <div className={styles.contentBottom}>
              {data.map((x) => (
                <div key={x.id} className={styles.card}>
                  <h2 className={styles.headingii}>{x.heading}</h2>
                  <p className={styles.desc}>{x.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default BookingHero;