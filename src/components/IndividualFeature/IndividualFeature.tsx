"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./IndividualFeature.module.css";
import Image from "next/image";
import Stripe from "../../../public/images/stripe.png";
import Multiple from "../../../public/images/multiple.png";
import Booking from "../../../public/images/booking.png";
import Map from "../../../public/images/map.png";
import Admin from "../../../public/images/admin.png";
import User from "../../../public/images/user.png";
import Img from "../../../public/images/house25.png";
import House from "../../../public/icons/house.svg";
import { motion } from "framer-motion";
import { fadeIn } from "../../../animation/variants";

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
      image: Img,
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
  ] as const;

  return (
    <section className={styles.container} id='features'>
      <LayoutWrapper>
        <h2 className={styles.heading}>
          Features of our Direct Booking Websites
        </h2>
        {individulaFeatures.map((x, index) => (
          <div key={index}>
            <div className={styles.content}>
              <motion.div
                variants={fadeIn("right", 0.3)}
                initial='hidden'
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className={styles.left}
              >
                <h3 className={styles.titleMobile}>{x.title}</h3>
                <div className={styles.imgContainer}>
                  <Image
                    src={x.image}
                    alt='image'
                    fill
                    className={styles.img}
                  />
                </div>
              </motion.div>
              <div className={styles.right}>
                <motion.h3
                  variants={fadeIn("left", 0.3)}
                  initial='hidden'
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.3 }}
                  className={styles.title}
                >
                  {x.title}
                </motion.h3>
                <motion.p
                  variants={fadeIn("left", 0.3)}
                  initial='hidden'
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.3 }}
                  className={styles.desc}
                >
                  {x.description}
                </motion.p>
                <span className={styles.span}>Why is this important?</span>
                <ul className={styles.box}>
                  {x.whyImportant.map((y, index) => (
                    <motion.li
                      variants={fadeIn(index % 2 === 0 ? "up" : "left", 0.3)}
                      initial='hidden'
                      whileInView={"show"}
                      viewport={{ once: false, amount: 0.3 }}
                      key={index}
                    >
                      <House className={styles.icon} width={30} height={30} />
                      <h4 className={styles.reasonnTitle}>{y.title}</h4>
                    </motion.li>
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
