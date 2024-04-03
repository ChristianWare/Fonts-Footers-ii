import LayoutWrapper from "../LayoutWrapper";
import styles from "./IndividualFeature.module.css";
import Image from "next/image";
import Stripe from "../../../public/images/stripe.png";
import Multiple from "../../../public/images/multiple.png";
import Booking from "../../../public/images/booking.png";
import Map from "../../../public/images/map.png";
import Admin from "../../../public/images/admin.png";
import User from "../../../public/images/user.png";
import House from "../../../public/icons/house.svg";

const IndividualFeature = () => {
  const individulaFeatures = [
    {
      image: Stripe,
      title: "Stripe Payment Gateway",
      description:
        "Integrating Stripe as your payment gateway for your property ensures secure transactions, supports multiple payment methods, automates payments, expands global reach, provides real-time reporting, offers easy integration, enhances the guest experience, and ensures compliance, all contributing to the success and efficiency of your vacation rental business.",
      whyImportant: [
        {
          title: "Secure Transactions",
        },
        {
          title: "Multiple Payment Methods",
        },
        {
          title: "Global Reach",
        },
        {
          title: "Real-Time Reporting",
        },
      ],
    },
    {
      image: Multiple,
      title: "List Multiple Properties on One Website",
      description:
        "Focus your marketing, SEO, and promotions on one platform to reach a wider audience and maximize exposure for all properties, enabling guests to easily compare amenities, locations, and pricing, enhancing user experience, promoting brand cohesion, and simplifying administrative tasks.",
      whyImportant: [
        {
          title: "Streamlined Marketing",
        },
        {
          title: "Enhanced User Experience",
        },
        {
          title: "Brand Cohesion",
        },
        {
          title: "Simplified Management",
        },
      ],
    },
    {
      image: Booking,
      title: "Booking Engine",
      description:
        "Integrating a booking engine for your properties enables direct bookings, control over pricing and availability, enhances guest experience, allows customization and personalization, provides valuable data insights, streamlines operations, boosts revenue and occupancy, and builds brand loyalty and trust.",
      whyImportant: [
        {
          title: "Control over Pricing and Availability",
        },
        {
          title: "Enhanced Guest Experience",
        },
        {
          title: "Customization and Personalization",
        },
        {
          title: "Streamlined Operations",
        },
      ],
    },
    {
      image: Map,
      title: "Interactive Map",
      description:
        "Adding an interactive map feature for your properties enhances the user experience by providing visual representation, improving decision-making, increasing engagement, differentiating your listings, enhancing marketing efforts, and ultimately boosting guest satisfaction and bookings.",
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
        {
          title: "Enhanced Marketing",
        },
      ],
    },
    {
      image: User,
      title: "User Dashboard",
      description:
        "Adding a user dashboard for your property provides guests with a personalized and convenient experience, allowing them to manage bookings, update profiles, communicate efficiently, leave feedback, access information, enjoy special offers, and receive support—all contributing to enhanced guest satisfaction and loyalty.",
      whyImportant: [
        {
          title: "Personalized Experience",
        },
        {
          title: "Booking Management",
        },
        {
          title: "Profile Updates",
        },
        {
          title: "Support and Assistance",
        },
      ],
    },
    {
      image: Admin,
      title: "Amin Dashboard",
      description:
        "An admin dashboard for your property facilitates centralized management of bookings, operations, data analytics, financial tasks, marketing efforts, guest communication, property maintenance, and security and compliance, enhancing efficiency, decision-making, and overall property success.",
      whyImportant: [
        {
          title: "Efficient Operations",
        },
        {
          title: "Data and Analytics",
        },
        {
          title: "Financial Management",
        },
        {
          title: "Guest Communication",
        },
      ],
    },
  ] as const;

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        {individulaFeatures.map((x, index) => (
          <div key={index}>
            <div className={styles.content}>
              <div className={styles.left}>
                <h3 className={styles.titleMobile}>{x.title}</h3>
                <div className={styles.imgContainer}>
                  <Image
                    src={x.image}
                    alt='image'
                    fill
                    className={styles.img}
                  />
                </div>
              </div>
              <div className={styles.right}>
                <h3 className={styles.title}>{x.title}</h3>
                <p className={styles.desc}>{x.description}</p>
                <span className={styles.span}>Why is this important?</span>
                <ul className={styles.box}>
                  {x.whyImportant.map((y, index) => (
                    <li key={index}>
                      <House className={styles.icon} width={30} height={30} />
                      <h4 className={styles.reasonnTitle}>{y.title}</h4>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </LayoutWrapper>
    </section>
  );
};
export default IndividualFeature;
