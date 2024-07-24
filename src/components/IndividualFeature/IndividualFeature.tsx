"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./IndividualFeature.module.css";
import Talk from "../../../public/icons/talk.svg";
import Booking from "../../../public/icons/booking.svg";
import Payment from "../../../public/icons/payment.svg";
import Map from "../../../public/icons/map.svg";
import User from "../../../public/icons/dashboard.svg";
import Cog from "../../../public/icons/cog.svg";
import Multiple from "../../../public/icons/multiple.svg";
import Analytics from "../../../public/icons/analytics.svg";

const IndividualFeature = () => {
  const individulaFeatures = [
    {
      icon: <Payment width={150} height={150} className={styles.icon} />,
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
      icon: <Booking width={150} height={150} className={styles.icon} />,
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
      icon: <Talk width={150} height={150} className={styles.icon} />,
      title: "Guest Reviews",
      description:
        "Guest reviews on your direct booking website enhance transparency, build trust, provide valuable feedback for improvement, manage reputation, serve as social proof, offer SEO benefits, and ultimately increase bookings and occupancy rates for your property.",
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
        {
          title: "Reputation Management",
        },
      ],
    },
    {
      icon: <Map width={150} height={150} className={styles.icon} />,
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
      icon: <User width={150} height={150} className={styles.icon} />,
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
      icon: <Cog width={150} height={150} className={styles.icon} />,
      title: "Admin Dashboard",
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
    {
      icon: <Multiple width={150} height={150} className={styles.icon} />,
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
      icon: <Analytics width={150} height={150} className={styles.icon} />,
      title: "Custom Analytics Dashboard",
      description:
        "Utilizing a custom-built analytics dashboard provides insights into visitor traffic, user engagement, geographic distribution, and browsing behavior on your direct booking website. It empowers data-driven decisions, enhances marketing strategies, improves website performance, and optimizes guest experience.",
      whyImportant: [
        {
          title: "Data-Driven Decisions",
        },
        {
          title: "Enhanced Marketing Strategies",
        },
        {
          title: "Improved Website Performance",
        },
        {
          title: "Optimized Guest Experience",
        },
      ],
    },
  ] as const;

  return (
    <section className={styles.container} id='features'>
      <LayoutWrapper>
        <h2 className={styles.heading}>
          Core Features of our Direct Booking Websites
        </h2>
        <div className={styles.dataContainer}>
          {individulaFeatures.map((x, index) => (
            <div key={index} className={styles.parent}>
              <div className={styles.content}>
                <div className={styles.left}>
                  <h3 className={styles.titleMobile}>{x.title}</h3>
                  <div className={styles.iconContainer}>{x.icon}</div>
                </div>
                <div className={styles.right}>
                  <h3 className={styles.title}>{x.title}</h3>
                  <p className={styles.desc}>{x.description}</p>
                  <br />
                  <span className={styles.span}>Benefits:</span>
                  <ul className={styles.box}>
                    {x.whyImportant.map((y, index) => (
                      <li key={index}>
                        <h4 className={styles.reasonnTitle}>{y.title}</h4>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default IndividualFeature;
