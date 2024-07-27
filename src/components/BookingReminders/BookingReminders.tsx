"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./BookingReminders.module.css";
import { motion } from "framer-motion";
import { fadeIn } from "../../../animation/variants";

const benefits = [
  {
    heading: "Automated Notifications",
    description:
      "Send automated notifications for booking confirmations, reminders, and follow-ups.",
  },
  {
    heading: "SMS and Email Integration",
    description:
      "Reach clients via their preferred communication channels, be it SMS or email.",
  },
  {
    heading: "Personalized Messaging",
    description:
      "Customize messages to include personalized details and branding.",
  },
] as const;

const BookingReminders = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <h2 className={`${styles.heading} h2v2`}>
              Custom Notifications and Reminders
            </h2>
            <p className={styles.copy}>
              Keep your clients informed and engaged with custom notifications
              and reminders, reducing no-shows and improving customer
              satisfaction.
            </p>
          </div>
          <div className={styles.bottom}>
            {benefits.map((benefit, i) => (
              <div key={i} className={styles.benefitContainer}>
                <div className={styles.headingContainer}>
                  <h3 className={styles.heading2}>{benefit.heading}</h3>
                </div>
                <p className={styles.description}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default BookingReminders;
