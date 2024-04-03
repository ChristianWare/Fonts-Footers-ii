import LayoutWrapper from "../LayoutWrapper";
import styles from "./Features.module.css";
import Image from "next/image";
import Button from "../Button/Button";
import House from "../../../public/images/hero2.png";
import Calendar from "../../../public//icons/calendar.svg";
import Admin from "../../../public//icons/admin.svg";
import Review from "../../../public//icons/review.svg";
import CreditCard from "../../../public//icons/creditCard.svg";

const Features = () => {
  const features = [
    {
      service: "Booking Engine",
      description:
        "Implement a user-friendly booking system that allows guests to check availability, select dates, and make reservations directly on your site.",
      icon: <Calendar width={40} height={40} />,
    },
    {
      service: "Guest Reviews",
      description:
        "Showcase positive reviews and testimonials from previous guests to build trust and credibility. Visitors will only be able to review once they've booked a stay on your property.",
      icon: <Review width={40} height={40} />,
    },
    {
      service: "Admin Panel",
      description:
        "Your admin panel will allow you to create, update, and delete listings on your personalized booking websites. View the number of bookings, and make any updates as needed.",
      icon: <Admin width={40} height={40} />,
    },
    {
      service: "Payment Processing",
      description:
        "We use Stripe payment processing so that you'll be able to secure online transactions, integrating a trusted payment gateway for businesses to accept credit card payments.",
      icon: <CreditCard width={40} height={40} />,
    },
  ] as const;

  return (
    <section className={styles.parent}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.lTop}>
              <h2 className={styles.heading}>
                Our direct booking websites include:
              </h2>
              <div className={styles.test}>
                {features.slice(0, 4).map((x, index) => (
                  <div key={index} className={styles.featureContainer}>
                    {x.icon}
                    <h3 className={styles.service}>{x.service}</h3>
                    <p className={styles.desc}>{x.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.left}>
            <div className={styles.box1}>
              <Image
                src={House}
                alt='Direct Booking Website'
                fill
                className={styles.img}
              />
            </div>
            <div className={styles.box2}>
              <h4>Our Features</h4>
              <p>
                Having certain expected features on your direct booking site is
                crucial for ensuring a positive user experience and maximizing
                conversions. Meeting these expectations not only enhances
                customer satisfaction but also establishes credibility and
                fosters repeat business.
              </p>
              <div className={styles.btnContainer}>
                <Button
                  text=' all features'
                  href='/pricing/#features'
                  btnType='primary'
                  arrow
                />
              </div>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Features;
