import styles from "./BookingHero.module.css";
import Booking from "../../../public/icons/booking.svg";
import LayoutWrapper from "../LayoutWrapper";

const data = [
  {
    id: 1,
    heading: "Real-Time Availability",
    desc: "Clients can view real-time availability and book appointments instantly.",
  },
  {
    id: 2,
    heading: "Automated Reminders",
    desc: "Automated email and SMS reminders reduce no-shows and keep clients informed.",
  },
  {
    id: 3,
    heading: "Intuitive Interface",
    desc: "A simple and intuitive interface makes it easy for clients to navigate and book services.",
  },
  {
    id: 4,
    heading: "Integrated Payment Systems",
    desc: "Accept payments from any major credit card with our payment services.",
  },
];

const BookingHero = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div>
              <Booking className={styles.icon} />
              <Booking className={styles.icon} />
              <Booking className={styles.icon} />
            </div>
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
