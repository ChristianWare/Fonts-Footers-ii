import LayoutWrapper from "../LayoutWrapper";
import styles from "./IndividualService.module.css";
import Booking from "../../../public/icons/booking.svg";
import Business from "../../../public/icons/business.svg";
import Landing from "../../../public/icons/landing.svg";
import Cart from "../../../public/icons/cart.svg";
import Link from "next/link";
import Button from "../Button/Button";

const IndividualService = () => {
  const individulaFeatures = [
    // {
    //   icon: <Landing width={75} height={75} className={styles.icon} />,
    //   title: "Landing Pages",
    //   description:
    //     "Integrating Stripe as your payment gateway for your property ensures secure transactions, supports multiple payment methods, automates payments, expands global reach, provides real-time reporting, offers easy integration, enhances the guest experience, and ensures compliance, all contributing to the success and efficiency of your vacation rental business.",
    //   href: "/landing-pages",
    //   whyImportant: [
    //     {
    //       title: "Secure Transactions",
    //
    //     },
    //     {
    //       title: "Payment Methods",
    //
    //     },
    //     {
    //       title: "Global Reach",
    //
    //     },
    //     {
    //       title: "Live Reporting",
    //
    //     },
    //   ],
    // },
    {
      icon: <Cart width={75} height={75} className={styles.icon} />,
      title: "E-Commerce Stores",
      description:
        "Integrating a booking engine for your properties enables direct bookings, control over pricing and availability, enhances guest experience, allows customization and personalization, provides valuable data insights, streamlines operations, boosts revenue and occupancy, and builds brand loyalty and trust.",
      href: "services/ecommerce-stores",
      whyImportant: [
        {
          title: "Control",
        },
        {
          title: "Guest Experience",
        },
        {
          title: "Customization",
        },
        // {
        //   title: "Streamlined Operations",

        // },
      ],
    },
    {
      icon: <Business width={75} height={75} className={styles.icon} />,
      title: "Business Websites",
      description:
        "Guest reviews on your direct booking website enhance transparency, build trust, provide valuable feedback for improvement, manage reputation, serve as social proof, offer SEO benefits, and ultimately increase bookings and occupancy rates for your property.",
      href: "services/business-websites",
      whyImportant: [
        {
          title: "Transparency",
        },
        {
          title: "Trust Building",
        },
        {
          title: "Feedback and Improvement",
        },
        // {
        //   title: "Reputation Management",

        // },
      ],
    },
    {
      icon: <Booking width={75} height={75} className={styles.icon} />,
      title: "Booking Platforms",
      description:
        "Adding an interactive map feature for your properties enhances the user experience by providing visual representation, improving decision-making, increasing engagement, differentiating your listings, enhancing marketing efforts, and ultimately boosting guest satisfaction and bookings.",
      href: "services/booking-platforms",
      whyImportant: [
        {
          title: "Visual Representation",
        },
        {
          title: "Improved Decision Making",
        },
        {
          title: "Increased Engagement",
        },
        // {
        //   title: "Enhanced Marketing",

        // },
      ],
    },
  ] as const;

  return (
    <section className={styles.container} id='features'>
      <LayoutWrapper>
        <h2 className={styles.heading}>What we build</h2>
        <div className={styles.parent}>
          {individulaFeatures.map((x, index) => (
            <div key={index} className={styles.content}>
              <Link href={x.href}>
                <div className={styles.left}>
                  <h3 className={styles.title}>{x.title}</h3>
                  <p className={styles.copy}>~Click to Learn More ~</p>
                  <div className={styles.iconContainer}>{x.icon}</div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default IndividualService;
